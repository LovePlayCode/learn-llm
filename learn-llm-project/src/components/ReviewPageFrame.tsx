import { useEffect, type ReactNode } from 'react';

interface ReviewPageFrameProps {
  css: string;
  children: ReactNode;
}

function normalizeReviewStyle(css: string) {
  return css
    .replaceAll(':root', '.react-review-page')
    .replace(/html\s*,\s*body/g, '.react-review-page')
    .replace(/body::before/g, '.react-review-page::before')
    .replace(/body::after/g, '.react-review-page::after')
    .replace(/body\s*\{/g, '.react-review-page {')
    .replace(/main\s*\{/g, '.react-review-page main {')
    .replace(/section\s*\{/g, '.react-review-page section {')
    .replace(/p\s*\{/g, '.react-review-page p {');
}

function ReviewPageFrame({ css, children }: ReviewPageFrameProps) {
  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const xPercent = `${((event.clientX / window.innerWidth) * 100).toFixed(1)}%`;
      const yPercent = `${((event.clientY / window.innerHeight) * 100).toFixed(1)}%`;
      const root = document.documentElement;

      root.style.setProperty('--mx', xPercent);
      root.style.setProperty('--my', yPercent);
      root.style.setProperty('--mx-px', `${event.clientX}px`);
      root.style.setProperty('--my-px', `${event.clientY}px`);
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    const targets = document.querySelectorAll('.react-review-page section, .react-review-page .reveal');
    targets.forEach(target => observer.observe(target));
    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <article className="react-review-page">
      <style>{normalizeReviewStyle(css)}</style>
      {children}
    </article>
  );
}

export default ReviewPageFrame;
