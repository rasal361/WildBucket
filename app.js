/* ============================================================
   WildBucket — Adventure Tracker  |  app.js
   ============================================================ */

// ── CONSTANTS ──────────────────────────────────────────────
const CAT_ICONS = {
  trek:      '🏔',
  cycling:   '🚴',
  travel:    '✈️',
  diving:    '🤿',
  skydiving: '🪂',
  camping:   '🏕',
  surfing:   '🏄',
  climbing:  '🧗'
};
const CAT_COLORS = {
  trek:      '#1e4a32',
  cycling:   '#1d3a5f',
  travel:    '#4a1e6a',
  diving:    '#0d3d52',
  skydiving: '#3a2010',
  camping:   '#2d4a20',
  surfing:   '#0d3060',
  climbing:  '#5c2510'
};
const INSPIRE_IDEAS = [
  { name: 'Trek to Everest Base Camp',        country: 'Nepal',           cat: 'trek',      pri: 'high', desc: '4-day classic trek through Sherpa villages to 5,364m base camp.' },
  { name: 'Cycle the Silk Road',              country: 'Central Asia',    cat: 'cycling',   pri: 'high', desc: 'Epic 7,000km cross-continental cycling odyssey through ancient civilizations.' },
  { name: 'Dive the Great Barrier Reef',      country: 'Australia',       cat: 'diving',    pri: 'med',  desc: 'Explore the world\'s largest coral reef teeming with marine life.' },
  { name: 'Skydive over Fox Glacier',         country: 'New Zealand',     cat: 'skydiving', pri: 'med',  desc: 'Freefall over stunning glacial Southern Alps landscapes.' },
  { name: 'Surf Pipeline',                    country: 'Hawaii, USA',     cat: 'surfing',   pri: 'high', desc: 'Legendary big wave surfing on the North Shore of Oahu.' },
  { name: 'Climb Mount Kilimanjaro',          country: 'Tanzania',        cat: 'climbing',  pri: 'high', desc: 'Africa\'s highest peak via the Machame route — 5,895m summit.' },
  { name: 'Camp in the Sahara Desert',        country: 'Morocco',         cat: 'camping',   pri: 'med',  desc: 'Sleep under a billion stars in the Erg Chebbi dunes.' },
  { name: 'Backpack Patagonia',               country: 'Argentina/Chile', cat: 'travel',    pri: 'high', desc: 'Torres del Paine W-Circuit through untamed windswept wilderness.' },
  { name: 'Kayak the Norwegian Fjords',       country: 'Norway',          cat: 'cycling',   pri: 'med',  desc: 'Paddle through dramatic fjords framed by waterfalls and cliffs.' },
  { name: 'Trek the Annapurna Circuit',       country: 'Nepal',           cat: 'trek',      pri: 'high', desc: '21-day high altitude trek circling the Annapurna massif.' },
  { name: 'Dive with Whale Sharks',           country: 'Mexico',          cat: 'diving',    pri: 'high', desc: 'Swim alongside the ocean\'s gentle giants in Isla Holbox.' },
  { name: 'Cycle Coast to Coast in Scotland', country: 'Scotland, UK',    cat: 'cycling',   pri: 'med',  desc: 'C2C route from Inverness to St Andrews across the Highlands.' },
  { name: 'Surf the Pipeline in Hossegor',    country: 'France',          cat: 'surfing',   pri: 'med',  desc: 'Europe\'s premier surfing destination with powerful beach breaks.' },
  { name: 'Climb the Dolomites Via Ferrata',  country: 'Italy',           cat: 'climbing',  pri: 'med',  desc: 'Iron-rung mountain routes through dramatic alpine scenery.' },
  { name: 'Camp in Milford Sound',            country: 'New Zealand',     cat: 'camping',   pri: 'high', desc: 'Wild camping in one of the world\'s most spectacular fiords.' },
  { name: 'Trek Patagonia Torres del Paine',  country: 'Chile',           cat: 'trek',      pri: 'high', desc: 'The legendary W-trek past granite towers and turquoise lakes.' },
  { name: 'Trek the Annapurna Circuit',          country: 'Nepal',                      cat: 'trek',      pri: 'high', desc: '21-day high-altitude circumnavigation of the Annapurna massif crossing the 5,416m Thorong La pass.' },
  { name: 'Trek the Annapurna Base Camp',        country: 'Nepal',                      cat: 'trek',      pri: 'high', desc: '10-day trek through Modi Khola valley to the stunning 4,130m amphitheatre below Annapurna I.' },
  { name: 'Trek the Langtang Valley',            country: 'Nepal',                      cat: 'trek',      pri: 'med',  desc: '7-day journey through the "Valley of Glaciers" near the Tibetan border with yak pastures and stupas.' },
  { name: 'Climb Mera Peak',                     country: 'Nepal',                      cat: 'climbing',  pri: 'high', desc: 'Nepal\'s highest trekking peak at 6,476m — a non-technical summit with panoramic views of 5 x 8,000m giants.' },
  { name: 'Trek the Manaslu Circuit',            country: 'Nepal',                      cat: 'trek',      pri: 'high', desc: 'Remote 14-day trek circling the world\'s 8th highest peak through ancient Buddhist Nubri villages.' },
  { name: 'Trek to Gokyo Lakes & Ri',            country: 'Nepal',                      cat: 'trek',      pri: 'high', desc: 'Reach the sacred turquoise Gokyo Lakes at 4,700m and summit Gokyo Ri for breathtaking Everest views.' },
  { name: 'Trek the Three Passes Circuit',       country: 'Nepal',                      cat: 'trek',      pri: 'high', desc: 'Ultimate Everest region challenge crossing Renjo La, Cho La and Kongma La — 20 days of raw Himalayan beauty.' },
  { name: 'Trek to Everest Cho La Pass',         country: 'Nepal',                      cat: 'trek',      pri: 'high', desc: 'Glacier crossing at 5,420m connecting Gokyo valley to the Khumbu — thrilling and technically demanding.' },
  { name: 'Camp at Kala Patthar',                country: 'Nepal',                      cat: 'camping',   pri: 'high', desc: 'Spend a night at 5,645m for a front-row sunrise view directly over Everest\'s summit pyramid.' },
  { name: 'Climb Island Peak (Imja Tse)',        country: 'Nepal',                      cat: 'climbing',  pri: 'high', desc: 'One of Nepal\'s most popular trekking peaks at 6,189m — crampons, ice axe and fixed ropes required.' },
  { name: 'Trek Upper Mustang to Lo Manthang',   country: 'Nepal',                      cat: 'trek',      pri: 'high', desc: 'Journey into the forbidden kingdom — a restricted-area trek through a wind-sculpted Tibetan plateau at 3,800m.' },
  { name: 'Trek the Pikey Peak Circuit',         country: 'Nepal',                      cat: 'trek',      pri: 'med',  desc: 'Sir Edmund Hillary\'s favourite viewpoint — a lesser-known 5-day loop with unobstructed views of Everest.' },
  { name: 'Raft the Trishuli River',             country: 'Nepal',                      cat: 'cycling',   pri: 'med',  desc: 'Exhilarating one-day white-water rafting on Grade III-IV rapids through lush gorges near Kathmandu.' },
  { name: 'Paraglide in Pokhara',                country: 'Nepal',                      cat: 'skydiving', pri: 'med',  desc: 'Tandem paraglide from Sarangkot ridge with front-row views of the entire Annapurna range over Phewa Lake.' },
  { name: 'Cycle the Kathmandu Valley',          country: 'Nepal',                      cat: 'cycling',   pri: 'low',  desc: 'Pedal between ancient UNESCO World Heritage temples — Pashupatinath, Boudhanath and Bhaktapur Durbar Square.' },
  { name: 'Trek to Poon Hill Sunrise',           country: 'Nepal',                      cat: 'trek',      pri: 'med',  desc: 'Classic 4-day Ghorepani loop — watch dawn paint the Dhaulagiri and Annapurna ranges gold from 3,210m.' },
  { name: 'Trek the Chadar Frozen River',        country: 'Ladakh, India',              cat: 'trek',      pri: 'high', desc: 'Walk across the frozen Zanskar River in -20°C winter — one of the world\'s most extreme and surreal treks.' },
  { name: 'Summit Stok Kangri',                  country: 'Ladakh, India',              cat: 'climbing',  pri: 'high', desc: 'Reach 6,153m on this classic Himalayan peak above the Indus Valley — no technical gear required.' },
  { name: 'Trek the Markha Valley',              country: 'Ladakh, India',              cat: 'trek',      pri: 'med',  desc: '8-day high-altitude trek through remote Ladakhi villages, Buddhist monasteries and 5,200m mountain passes.' },
  { name: 'Cycle Manali to Leh Highway',         country: 'Himachal Pradesh, India',    cat: 'cycling',   pri: 'high', desc: '480km legendary high-altitude cycling route crossing Rohtang, Baralacha La and Tanglang La passes.' },
  { name: 'Trek the Hampta Pass',                country: 'Himachal Pradesh, India',    cat: 'trek',      pri: 'med',  desc: 'Dramatic 5-day crossing from lush Kullu Valley to the barren Spiti moonscape at 4,270m.' },
  { name: 'Camp at Chandratal Lake',             country: 'Spiti, India',               cat: 'camping',   pri: 'high', desc: 'Wild camp beside the ethereal crescent-shaped lake at 4,300m under an impossibly star-filled sky.' },
  { name: 'Trek the Pin Parvati Pass',           country: 'Himachal Pradesh, India',    cat: 'trek',      pri: 'high', desc: 'One of India\'s toughest treks — 9 days crossing a glacial 5,319m pass from Kullu into wild Spiti valley.' },
  { name: 'Trek Kedarkantha in Winter',          country: 'Uttarakhand, India',         cat: 'trek',      pri: 'med',  desc: 'Summit a snow-blanketed 3,800m peak with sweeping panoramas of Swargarohini and Bandarpunch.' },
  { name: 'Trek the Valley of Flowers',          country: 'Uttarakhand, India',         cat: 'trek',      pri: 'med',  desc: 'UNESCO World Heritage meadow bursting with 300+ Himalayan wildflower species at 3,600m in monsoon season.' },
  { name: 'Roopkund Skeleton Lake Trek',         country: 'Uttarakhand, India',         cat: 'trek',      pri: 'high', desc: 'Eerie 8-day trek to a glacial lake at 5,029m strewn with ancient human skeletons dating back 1,200 years.' },
  { name: 'Cycle the Spiti Valley Circuit',      country: 'Himachal Pradesh, India',    cat: 'cycling',   pri: 'high', desc: 'Ride through one of the world\'s highest inhabited valleys past ancient monasteries and alien lunar landscapes.' },
  { name: 'Trek Goecha La in Sikkim',            country: 'Sikkim, India',              cat: 'trek',      pri: 'high', desc: 'Up-close views of Kangchenjunga\'s south face on this dramatic 11-day trek through rhododendron forests.' },
  { name: 'Trek Brahmatal in Winter',            country: 'Uttarakhand, India',         cat: 'trek',      pri: 'med',  desc: '6-day winter snowshoe trek to a frozen lake at 3,800m with jaw-dropping views of Trishul and Nanda Ghunti.' },
  { name: 'Trek the Har Ki Dun Valley',          country: 'Uttarakhand, India',         cat: 'trek',      pri: 'med',  desc: 'Cradle of the Gods — 7-day trek through ancient Garhwali villages in the Govind Wildlife Sanctuary.' },
  { name: 'Cycle Khardung La Pass',              country: 'Ladakh, India',              cat: 'cycling',   pri: 'high', desc: 'Conquer one of the world\'s highest motorable passes at 5,359m on a mountain bike above Leh.' },
  { name: 'Trek the Kuari Pass (Lord Curzon Trail)', country: 'Uttarakhand, India',     cat: 'trek',      pri: 'med',  desc: '6-day moderate trek offering a sweeping 270-degree panorama of Nanda Devi, Kamet and Dronagiri.' },
];

const BADGES = [
  { id: 'first',       icon: '🌱', name: 'First Step',       desc: 'Add your first adventure',         check: (items) => items.length >= 1 },
  { id: 'explorer',   icon: '🧭', name: 'Explorer',         desc: 'Add 5 adventures',                 check: (items) => items.length >= 5 },
  { id: 'adventurer', icon: '🎒', name: 'Adventurer',       desc: 'Add 10 adventures',                check: (items) => items.length >= 10 },
  { id: 'firstdone',  icon: '🏆', name: 'First Conquest',   desc: 'Complete your first adventure',    check: (items) => items.filter(i=>i.done).length >= 1 },
  { id: 'fivedone',   icon: '⭐', name: 'Five Stars',       desc: 'Complete 5 adventures',            check: (items) => items.filter(i=>i.done).length >= 5 },
  { id: 'globetrotter',icon:'✈️', name: 'Globetrotter',     desc: 'Visit 5 different countries',      check: (items) => new Set(items.filter(i=>i.done&&i.country).map(i=>i.country)).size >= 5 },
  { id: 'trekker',    icon: '🏔', name: 'Mountain Trekker', desc: 'Complete 2 trekking adventures',   check: (items) => items.filter(i=>i.done&&i.cat==='trek').length >= 2 },
  { id: 'cyclist',    icon: '🚴', name: 'Road Warrior',     desc: 'Complete 2 cycling adventures',    check: (items) => items.filter(i=>i.done&&i.cat==='cycling').length >= 2 },
  { id: 'diver',      icon: '🤿', name: 'Deep Diver',       desc: 'Complete 2 diving adventures',     check: (items) => items.filter(i=>i.done&&i.cat==='diving').length >= 2 },
  { id: 'skydiver',   icon: '🪂', name: 'Sky High',         desc: 'Complete a skydiving adventure',   check: (items) => items.filter(i=>i.done&&i.cat==='skydiving').length >= 1 },
  { id: 'camper',     icon: '🏕', name: 'Wild Camper',      desc: 'Complete 2 camping adventures',    check: (items) => items.filter(i=>i.done&&i.cat==='camping').length >= 2 },
  { id: 'halfwaythere',icon:'🌗',  name: 'Halfway There',   desc: 'Complete 50% of your list',        check: (items) => items.length > 0 && items.filter(i=>i.done).length / items.length >= 0.5 },
];

// ── STATE ──────────────────────────────────────────────────
let items = [];
let editId = null;

// ── INIT ───────────────────────────────────────────────────
(function init() {
  try { items = JSON.parse(localStorage.getItem('wb_items') || '[]'); } catch(e) { items = []; }
  if (!items.length) {
    items = [
      { id: 1001, name: 'Hike the Inca Trail',       country: 'Peru',        cat: 'trek',    pri: 'high', desc: '4-day classic trek to Machu Picchu through cloud forest.',   done: false, createdAt: Date.now()-5000 },
      { id: 1002, name: 'Cycle Across Iceland',      country: 'Iceland',     cat: 'cycling', pri: 'med',  desc: 'Ring road 1,332km cycling adventure around the island.',      done: false, createdAt: Date.now()-4000 },
      { id: 1003, name: 'Dive in the Maldives',      country: 'Maldives',    cat: 'diving',  pri: 'high', desc: 'Crystal clear warm waters with stunning coral reef systems.',  done: true,  createdAt: Date.now()-3000 },
      { id: 1004, name: 'Skydive over Dubai',        country: 'UAE',         cat: 'skydiving',pri:'med',  desc: 'Tandem skydive over the Palm Jumeirah at 13,000ft.',           done: false, createdAt: Date.now()-2000 },
      { id: 1005, name: 'Camp in the Scottish Highlands', country: 'Scotland', cat: 'camping', pri: 'low', desc: 'Wild camping along the Cape Wrath Trail.',                  done: false, createdAt: Date.now()-1000 },
    ];
    save();
  }
  renderAll();
})();

// ── PERSISTENCE ────────────────────────────────────────────
function save() {
  localStorage.setItem('wb_items', JSON.stringify(items));
}

// ── VIEWS ──────────────────────────────────────────────────
function switchView(viewId, el) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('view-' + viewId).classList.add('active');
  if (el) el.classList.add('active');
  const titles = { dashboard: 'Dashboard', list: 'My Adventures', completed: 'Completed', badges: 'Badges' };
  document.getElementById('view-title').textContent = titles[viewId] || 'WildBucket';
  // Close sidebar on mobile
  if (window.innerWidth <= 768) {
    document.getElementById('sidebar').classList.remove('open');
  }
  renderAll();
  return false;
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// ── MODAL ──────────────────────────────────────────────────
function openModal(edit) {
  const overlay = document.getElementById('modal-overlay');
  if (edit) {
    editId = edit.id;
    document.getElementById('modal-title').textContent = 'Edit Adventure';
    document.getElementById('f-name').value    = edit.name;
    document.getElementById('f-country').value = edit.country || '';
    document.getElementById('f-cat').value     = edit.cat;
    document.getElementById('f-pri').value     = edit.pri;
    document.getElementById('f-year').value    = edit.year || '';
    document.getElementById('f-desc').value    = edit.desc || '';
  } else {
    editId = null;
    document.getElementById('modal-title').textContent = 'New Adventure';
    ['f-name','f-country','f-year','f-desc'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('f-cat').value = 'trek';
    document.getElementById('f-pri').value = 'high';
  }
  overlay.classList.add('open');
  setTimeout(() => document.getElementById('f-name').focus(), 100);
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modal-overlay')) return;
  document.getElementById('modal-overlay').classList.remove('open');
  editId = null;
}

// ESC to close
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── SAVE ITEM ──────────────────────────────────────────────
function saveItem() {
  const name = document.getElementById('f-name').value.trim();
  if (!name) {
    const inp = document.getElementById('f-name');
    inp.style.borderColor = '#e8640a';
    inp.focus();
    setTimeout(() => { inp.style.borderColor = ''; }, 1500);
    return;
  }
  const obj = {
    id:        editId || Date.now(),
    name,
    country:   document.getElementById('f-country').value.trim(),
    cat:       document.getElementById('f-cat').value,
    pri:       document.getElementById('f-pri').value,
    year:      document.getElementById('f-year').value.trim(),
    desc:      document.getElementById('f-desc').value.trim(),
    done:      editId ? (items.find(i => i.id === editId) || {}).done || false : false,
    createdAt: editId ? (items.find(i => i.id === editId) || {}).createdAt || Date.now() : Date.now(),
  };
  if (editId) {
    const idx = items.findIndex(i => i.id === editId);
    if (idx > -1) items[idx] = obj;
  } else {
    items.unshift(obj);
  }
  save();
  renderAll();
  document.getElementById('modal-overlay').classList.remove('open');
  editId = null;
}

// ── DELETE ─────────────────────────────────────────────────
function deleteItem(id) {
  if (!confirm('Remove this adventure from your bucket list?')) return;
  items = items.filter(i => i.id !== id);
  save();
  renderAll();
}

// ── TOGGLE DONE ────────────────────────────────────────────
function toggleDone(id) {
  const it = items.find(i => i.id === id);
  if (!it) return;
  it.done = !it.done;
  if (it.done) {
    it.completedAt = Date.now();
    confetti();
  } else {
    delete it.completedAt;
  }
  save();
  renderAll();
}

// ── INSPIRE ────────────────────────────────────────────────
function inspire() {
  const used = new Set(items.map(i => i.name));
  const pool = INSPIRE_IDEAS.filter(x => !used.has(x.name));
  const pick = pool.length
    ? pool[Math.floor(Math.random() * pool.length)]
    : INSPIRE_IDEAS[Math.floor(Math.random() * INSPIRE_IDEAS.length)];
  openModal();
  setTimeout(() => {
    document.getElementById('f-name').value    = pick.name;
    document.getElementById('f-country').value = pick.country;
    document.getElementById('f-cat').value     = pick.cat;
    document.getElementById('f-pri').value     = pick.pri;
    document.getElementById('f-desc').value    = pick.desc;
  }, 50);
}

// ── RENDER ALL ─────────────────────────────────────────────
function renderAll() {
  renderStats();
  renderRecent();
  renderCatGrid();
  renderList();
  renderCompleted();
  renderBadges();
}

// ── STATS ──────────────────────────────────────────────────
function renderStats() {
  const done      = items.filter(i => i.done).length;
  const countries = new Set(items.map(i => i.country).filter(Boolean)).size;
  const cats      = new Set(items.map(i => i.cat)).size;
  const pct       = items.length ? Math.round(done / items.length * 100) : 0;
  document.getElementById('s-total').textContent    = items.length;
  document.getElementById('s-done').textContent     = done;
  document.getElementById('s-countries').textContent = countries;
  document.getElementById('s-cats').textContent     = cats;
  document.getElementById('bar').style.width        = pct + '%';
  document.getElementById('pct').textContent        = pct + '%';
}

// ── RECENT LIST ────────────────────────────────────────────
function renderRecent() {
  const recent = [...items].slice(0, 4);
  document.getElementById('recent-list').innerHTML = recent.length
    ? recent.map(it => itemHTML(it)).join('')
    : emptyHTML('No adventures yet!', 'Add your first wild adventure above.');
}

// ── CAT GRID ───────────────────────────────────────────────
function renderCatGrid() {
  const cats = Object.keys(CAT_ICONS);
  const counts = {};
  cats.forEach(c => counts[c] = items.filter(i => i.cat === c).length);
  const sorted = cats.filter(c => counts[c] > 0).sort((a,b) => counts[b]-counts[a]);
  const display = sorted.length ? sorted : cats.slice(0, 8);
  document.getElementById('cat-grid').innerHTML = display.map(c => `
    <div class="cat-card" onclick="filterByCat('${c}')">
      <div class="cat-card-icon">${CAT_ICONS[c]}</div>
      <div class="cat-card-name">${c}</div>
      <div class="cat-card-count">${counts[c] || 0}</div>
    </div>
  `).join('');
}

function filterByCat(cat) {
  switchView('list', document.querySelector('[data-view="list"]'));
  document.getElementById('cat-filter').value = cat;
  renderList();
}

// ── MAIN LIST ──────────────────────────────────────────────
function renderList() {
  const q   = (document.getElementById('search')?.value || '').toLowerCase();
  const cf  = document.getElementById('cat-filter')?.value || '';
  const pf  = document.getElementById('pri-filter')?.value || '';
  const sf  = document.getElementById('sort-filter')?.value || 'newest';

  let filtered = items.filter(it => {
    if (q && !it.name.toLowerCase().includes(q) && !(it.country||'').toLowerCase().includes(q)) return false;
    if (cf && it.cat !== cf) return false;
    if (pf && it.pri !== pf) return false;
    return true;
  });

  const priOrder = { high: 0, med: 1, low: 2 };
  if      (sf === 'newest')   filtered.sort((a,b) => b.createdAt - a.createdAt);
  else if (sf === 'oldest')   filtered.sort((a,b) => a.createdAt - b.createdAt);
  else if (sf === 'priority') filtered.sort((a,b) => priOrder[a.pri] - priOrder[b.pri]);
  else if (sf === 'name')     filtered.sort((a,b) => a.name.localeCompare(b.name));

  document.getElementById('main-list').innerHTML = filtered.length
    ? filtered.map(it => itemHTML(it)).join('')
    : emptyHTML('No adventures found', 'Try adjusting your search or filters.');
}

// ── COMPLETED ──────────────────────────────────────────────
function renderCompleted() {
  const done = items.filter(i => i.done).sort((a,b) => (b.completedAt||0)-(a.completedAt||0));
  document.getElementById('done-count').textContent = done.length + ' Adventure' + (done.length !== 1 ? 's' : '') + ' Conquered';
  document.getElementById('done-list').innerHTML = done.length
    ? done.map(it => itemHTML(it)).join('')
    : emptyHTML('No completed adventures yet', 'Go conquer something wild!');
}

// ── BADGES ─────────────────────────────────────────────────
function renderBadges() {
  document.getElementById('badges-grid').innerHTML = BADGES.map(b => {
    const earned = b.check(items);
    return `
      <div class="badge-card${earned ? ' earned' : ''}">
        <div class="badge-icon">${b.icon}</div>
        <div class="badge-name">${b.name}</div>
        <div class="badge-desc">${b.desc}</div>
      </div>
    `;
  }).join('');
}

// ── ITEM HTML ──────────────────────────────────────────────
function itemHTML(it) {
  const priLabel = { high: '🔥 High', med: '⚡ Med', low: '🌱 Low' };
  const priClass = { high: 'pri-high', med: 'pri-med', low: 'pri-low' };
  return `
    <div class="item${it.done ? ' done' : ''}">
      <div class="item-icon" style="background:${CAT_COLORS[it.cat] || '#1e3d2b'}">
        ${CAT_ICONS[it.cat] || '🌍'}
      </div>
      <div class="item-body">
        <div class="item-name">${escHtml(it.name)}</div>
        <div class="item-meta">
          ${it.country ? `<span class="meta-loc">📍 ${escHtml(it.country)}</span>` : ''}
          <span class="meta-tag">${CAT_ICONS[it.cat] || ''} ${it.cat}</span>
          <span class="${priClass[it.pri]}">${priLabel[it.pri] || it.pri}</span>
          ${it.year ? `<span class="year-tag">📅 ${it.year}</span>` : ''}
          ${it.done ? `<span class="done-badge">✓ Done</span>` : ''}
        </div>
        ${it.desc ? `<div class="item-desc">${escHtml(it.desc)}</div>` : ''}
      </div>
      <div class="item-actions">
        <button class="act check${it.done ? ' active' : ''}" onclick="toggleDone(${it.id})" title="${it.done ? 'Mark incomplete' : 'Mark complete'}">
          ${it.done ? '✓' : '○'}
        </button>
        <button class="act" onclick='openModal(${JSON.stringify(it).replace(/'/g, "&#39;")})' title="Edit">✎</button>
        <button class="act del" onclick="deleteItem(${it.id})" title="Delete">✕</button>
      </div>
    </div>
  `;
}

// ── EMPTY STATE ────────────────────────────────────────────
function emptyHTML(title, sub) {
  return `
    <div class="empty">
      <div class="empty-icon">🌄</div>
      <div class="empty-title">${title}</div>
      <div class="empty-sub">${sub}</div>
    </div>
  `;
}

// ── CONFETTI ───────────────────────────────────────────────
function confetti() {
  const c = document.getElementById('confetti');
  const colors = ['#e8640a', '#f5a623', '#6daa3a', '#4a7c59', '#ffffff', '#f5ede0', '#7ab648'];
  for (let i = 0; i < 50; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    const size = 6 + Math.random() * 8;
    p.style.cssText = [
      `left:${Math.random() * 100}%`,
      `top:-20px`,
      `width:${size}px`,
      `height:${size}px`,
      `background:${colors[Math.floor(Math.random() * colors.length)]}`,
      `animation-delay:${Math.random() * 0.6}s`,
      `animation-duration:${1.2 + Math.random() * 1.2}s`,
      `border-radius:${Math.random() > 0.5 ? '50%' : '2px'}`,
    ].join(';');
    c.appendChild(p);
    setTimeout(() => p.remove(), 2500);
  }
}

// ── UTILS ──────────────────────────────────────────────────
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
