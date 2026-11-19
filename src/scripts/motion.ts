// Shared animations used on every page.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
export const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Lines marked [data-split] slide up one by one. */
export function splitLines(tl = gsap.timeline()) {
  const lines = document.querySelectorAll<HTMLElement>('[data-split]');
  lines.forEach((line) => {
    line.innerHTML = `<span style="display:inline-block">${line.innerHTML}</span>`;
  });
  if (!reduce) tl.from('[data-split] > span', { yPercent: 110, duration: 1, stagger: 0.12, ease: 'power4.out' }, 0);
  return tl;
}

/** Elements marked [data-reveal] fade up as they enter. [data-rise] headings rise in on scroll. */
export function reveals() {
  if (reduce) return;
  gsap.from('[data-reveal]', { y: 24, opacity: 0, duration: 0.7, stagger: 0.08, delay: 0.5, ease: 'power3.out' });
  gsap.utils.toArray<HTMLElement>('[data-rise]').forEach((el) => {
    gsap.from(el, { y: 60, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } });
  });
}

/** SVG paths inside [data-draw] draw themselves when they come into view. */
export function drawPaths() {
  document.querySelectorAll<SVGElement>('[data-draw]').forEach((svg) => {
    const paths = svg.querySelectorAll<SVGPathElement>('path');
    if (reduce) return;
    paths.forEach((p) => {
      const len = p.getTotalLength();
      gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
    });
    gsap.to(paths, { strokeDashoffset: 0, duration: 0.9, stagger: 0.25, ease: 'power2.inOut', scrollTrigger: { trigger: svg, start: 'top 85%' } });
  });
}

/** Numbers in [data-count] count up. */
export function countUp() {
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count);
    const obj = { v: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => gsap.to(obj, { v: target, duration: reduce ? 0 : 1.6, ease: 'power3.out', onUpdate: () => { el.textContent = Math.round(obj.v).toLocaleString('en-US'); } }),
    });
  });
}

/** Adds .is-in to [data-in] elements once they enter the viewport. */
export function markIn() {
  document.querySelectorAll<HTMLElement>('[data-in]').forEach((el) => {
    ScrollTrigger.create({ trigger: el, start: 'top 75%', once: true, onEnter: () => el.classList.add('is-in') });
  });
}

export function allBasics() {
  reveals();
  drawPaths();
  countUp();
  markIn();
}
