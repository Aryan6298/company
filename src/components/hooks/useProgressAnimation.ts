import { useEffect, useRef } from 'react';

export const useProgressAnimation = () => {
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const animateProgress = (
      progressBar: HTMLDivElement,
      textEl: HTMLSpanElement,
      to: number
    ) => {
      const duration = 1500;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(progress * to);

        // Animate number
        textEl.textContent = `${value}%`;

        // Animate width
        progressBar.style.width = `${value}%`;

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target as HTMLDivElement;
            const levelAttr = progressBar.getAttribute('aria-valuenow');
            const index = progressRefs.current.indexOf(progressBar);

            if (levelAttr && index !== -1) {
              const level = parseInt(levelAttr);
              const textEl = textRefs.current[index];
              if (textEl) {
                animateProgress(progressBar, textEl, level);
              }
              observer.unobserve(progressBar); // only animate once
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    progressRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      progressRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return { progressRefs, textRefs };
};
