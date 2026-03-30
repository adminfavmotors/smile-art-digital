import { useEffect } from 'react';

function collectRevealElements(root: ParentNode): HTMLElement[] {
  const nested = Array.from(root.querySelectorAll<HTMLElement>('.reveal:not(.visible)'));

  if (root instanceof HTMLElement && root.matches('.reveal:not(.visible)')) {
    return [root, ...nested];
  }

  return nested;
}

export function useScrollReveal() {
  useEffect(() => {
    const timeouts = new Set<number>();

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          const delay = parseFloat(element.dataset.delay || '0');
          const timeoutId = window.setTimeout(() => {
            element.classList.add('visible');
            timeouts.delete(timeoutId);
          }, delay * 1000);

          timeouts.add(timeoutId);
          revealObserver.unobserve(element);
        });
      },
      { threshold: 0.15 },
    );

    const observeRevealElements = (root: ParentNode) => {
      collectRevealElements(root).forEach((element) => revealObserver.observe(element));
    };

    observeRevealElements(document);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          observeRevealElements(node);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      revealObserver.disconnect();
      timeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
      timeouts.clear();
    };
  }, []);
}

export function staggerDelay(index: number, base = 0.1) {
  return { 'data-delay': String(index * base) };
}
