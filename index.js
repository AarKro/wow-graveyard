const tombstones = [
  {
    name: 'Brokode',
    race: 'Dwarf',
    class: 'Priest',
    level: '6',
    fromDate: '22.07.2025',
    toDate: '22.07.2025',
    quote: 'Died valiantly fighting a giant.',
    tombstoneNumber: 1,
  },
  {
    name: 'Geilisau',
    race: 'Human',
    class: 'Mage',
    level: '8',
    fromDate: '22.07.2025',
    toDate: '23.07.2025',
    quote: 'Died a geili sau.',
    tombstoneNumber: 5,
  },
  {
    name: 'WakeHolder',
    race: 'Dwarf',
    class: 'Priest',
    level: '7',
    fromDate: '22.07.2025',
    toDate: '23.07.2025',
    quote: 'Did not see the bear.',
    tombstoneNumber: 4,
  },
  {
    name: 'Gâtsû',
    race: 'Night Elf',
    class: 'Hunter',
    level: '12',
    fromDate: '22.07.2025',
    toDate: '26.07.2025',
    quote: 'The brave die never, though they sleep in dust: Their courage nerves a thousand living men.',
    tombstoneNumber: 2,
  },
  {
    name: 'Furyal',
    race: 'Night Elf',
    class: 'Warrior',
    level: '17',
    fromDate: '22.07.2025',
    toDate: '27.07.2025',
    quote: 'Murlocs...',
    tombstoneNumber: 2,
  },
  {
    name: 'Sparepart',
    race: 'Dwarf',
    class: 'Priest',
    level: '14',
    fromDate: '22.07.2025',
    toDate: '27.07.2025',
    quote: 'Wasn\'t me.',
    tombstoneNumber: 6,
  },
  {
    name: 'Furyest',
    race: 'Night Elf',
    class: 'Warrior',
    level: '8',
    fromDate: '27.07.2025',
    toDate: '28.07.2025',
    quote: 'Who was this guy even.',
    tombstoneNumber: 3,
  },
  {
    name: 'Sparepartii',
    race: 'Dwarf',
    class: 'Priest',
    level: '9',
    fromDate: '27.07.2025',
    toDate: '28.07.2025',
    quote: 'Fell to the stunning beauty of Rockjaws.',
    tombstoneNumber: 5,
  },
  {
    name: 'Sparepartiiv',
    race: 'Dwarf',
    class: 'Priest',
    level: '9',
    fromDate: '28.07.2025',
    toDate: '28.07.2025',
    quote: 'Attracted lepracy.',
    tombstoneNumber: 3,
  },
  {
    name: 'Sparepartiv',
    race: 'Dwarf',
    class: 'Priest',
    level: '7',
    fromDate: '28.07.2025',
    toDate: '29.07.2025',
    quote: 'Trolls be trollin\'.',
    tombstoneNumber: 7,
  },
  {
    name: 'Swarly',
    race: 'Gnome',
    class: 'Warlock',
    level: '17',
    fromDate: '22.07.2025',
    toDate: '30.07.2025',
    quote: 'Dragons in a starting zone? Really??',
    tombstoneNumber: 7,
  }
]

const left1 = document.getElementById('left1');
const left2 = document.getElementById('left2');
const right1 = document.getElementById('right1');
const right2 = document.getElementById('right2');

const insertTombstone = (tombstone, section) => {
  section.innerHTML += `
      <article class="graveyard__tombstone">
        <div class="graveyard__tombstone--header">
          <h1 class="graveyard__tombstone--header-name">${tombstone.name}</h1>
          <h2 class="graveyard__tombstone--header-class">${tombstone.race} ${tombstone.class} — lvl ${tombstone.level}</h2>
        </div>

        <img src="./assets/tombstone_${tombstone.tombstoneNumber}.svg" alt="Tombstone of ${tombstone.name}" class="graveyard__tombstone--image">

        <div class="graveyard__tombstone--info">
          <p class="graveyard__tombstone--date">${tombstone.fromDate} – ${tombstone.toDate}</p>
          <p class="graveyard__tombstone--description">${tombstone.quote}</p>
        </div>
      </article>
    `;
};

const nextSectionGen = function*() {
  while (true) {
    yield left2;
    yield right1;
    yield left1;
    yield right2;
  }
}

const nextSection = nextSectionGen();

tombstones.forEach((tombstone) => {
  const section = nextSection.next().value;
  insertTombstone(tombstone, section);
});


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