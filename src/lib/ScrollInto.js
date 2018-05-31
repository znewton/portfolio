export default function ScrollInto(elementId, callback) {
  const element = document.getElementById(elementId);
  if (!element) return;

  window.addEventListener('scroll', e => {
    const box = element.getBoundingClientRect();
    const y = window.scrollY;
  });
}
