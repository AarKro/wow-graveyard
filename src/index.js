// Pixel Rain SVG Overlay
(function createPixelRain() {
  const overlay = document.getElementById('pixel-rain-overlay');
  if (!overlay) return;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const numPixels = Math.floor(width / 20) * 4; // density
  const svgNS = 'http://www.w3.org/2000/svg';

  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('class', 'pixel-rain-svg');
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

  for (let i = 0; i < numPixels; i++) {
    const x = Math.random() * width;
    const w = 3 + Math.random() * 3;
    const h = 10 + Math.random() * 10; // raindrops are longer
    const duration = 1.5 + Math.random() * 1.5;
    const delay = Math.random() * 2;
    const rect = document.createElementNS(svgNS, 'rect');
    rect.setAttribute('x', x);
    // Start each drop at a random position above the viewport, so they don't all start at the top
    const initialY = -10 - Math.random() * height;
    rect.setAttribute('y', initialY);
    rect.setAttribute('width', w);
    rect.setAttribute('height', h);
    rect.setAttribute('class', 'pixel-drop');
    rect.style.animationDuration = duration + 's';
    rect.style.animationDelay = delay + 's';
    svg.appendChild(rect);
  }
  overlay.appendChild(svg);

  // Optional: update on resize
  window.addEventListener('resize', () => {
    overlay.innerHTML = '';
    createPixelRain();
  }, { once: true });
})();