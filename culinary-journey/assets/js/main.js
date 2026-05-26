/* =============================================
   CULINARY JOURNEY — main.js
   Global: Progress Bar, Navbar, Scrollytelling,
           Mobile Menu, Modal, Shared Utilities
   ============================================= */

'use strict';

/* ── Reading Progress Bar ── */
function initProgressBar() {
  const bar = document.getElementById('reading-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const doc  = document.documentElement;
    const top  = doc.scrollTop  || document.body.scrollTop;
    const h    = doc.scrollHeight - doc.clientHeight;
    bar.style.width = h > 0 ? `${(top / h) * 100}%` : '0%';
  }, { passive: true });
}

/* ── Mobile Hamburger Menu ── */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });
  // Close when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

/* ── Scrollytelling: Intersection Observer ── */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => observer.observe(el));
}

/* ── Staggered Card Reveal ── */
function initStaggeredCards() {
  const groups = document.querySelectorAll('[data-stagger]');
  groups.forEach(group => {
    const children = group.querySelectorAll('[data-stagger-child]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          children.forEach((child, i) => {
            setTimeout(() => child.classList.add('visible'), i * 120);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    observer.observe(group);
  });
}

function initFilterTabs() {
  const tabContainer = document.querySelector('.filter-tabs');
  if (!tabContainer) return;
  const tabs = tabContainer.querySelectorAll('.filter-tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;

      // Pencarian kartu dipindah ke SINI agar selalu mengambil data terbaru dari region.js
      const cards = document.querySelectorAll('.dish-card[data-kategori]');

      cards.forEach(card => {
        const show = filter === 'semua' || card.dataset.kategori === filter;
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        if (show) {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
          card.style.display = '';
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => { if (!show) card.style.display = 'none'; }, 300);
        }
      });
    });
  });
}

/* ── Modal (Dish Detail) ── */
let currentChart = null;

function openModal(data, regionColor) {
  const overlay = document.getElementById('dish-modal');
  if (!overlay) return;

  overlay.querySelector('#modal-img').src     = data.img;
  overlay.querySelector('#modal-img').alt     = data.nama;
  overlay.querySelector('#modal-title').textContent  = data.nama;
  overlay.querySelector('#modal-desc').textContent   = data.deskripsi;
  overlay.querySelector('#modal-region-tag').textContent = data.tags.join(' · ');
  overlay.querySelector('#modal-region-tag').style.color  = regionColor;

  // Bahan chips
  const chipList = overlay.querySelector('#modal-chips');
  chipList.innerHTML = data.bahan.map(b => `<span class="chip">${b}</span>`).join('');

  // Resep list
  const recipeList = overlay.querySelector('#modal-recipe');
  recipeList.innerHTML = data.resep
    .map((s, i) => `<li style="margin-bottom:6px; color: var(--color-on-surface-variant); font-size:0.9rem;">${i + 1}. ${s}</li>`)
    .join('');

  // Nutrisi bars
  const nutrisi = data.nutrisi;
  const maxNutrisi = Math.max(nutrisi.kalori, 350);
  const nutrisiHTML = [
    { label: 'Kalori', value: nutrisi.kalori, unit: 'kcal', max: 350 },
    { label: 'Protein', value: nutrisi.protein, unit: 'g', max: 35 },
    { label: 'Lemak',   value: nutrisi.lemak,   unit: 'g', max: 30 },
    { label: 'Karbo',   value: nutrisi.karbohidrat, unit: 'g', max: 50 },
  ].map(n => `
    <div class="flavor-bar">
      <span class="flavor-bar__label" style="width:56px;">${n.label}</span>
      <div class="flavor-bar__track">
        <div class="flavor-bar__fill" style="width:${(n.value/n.max)*100}%; background-color:${regionColor};"></div>
      </div>
      <span style="font-size:0.6875rem; color:var(--color-on-surface-variant); width:48px; text-align:right;">${n.value} ${n.unit}</span>
    </div>
  `).join('');
  overlay.querySelector('#modal-nutrisi').innerHTML = nutrisiHTML;

  // Radar chart
  renderRadarChart(data.flavor, regionColor);

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('dish-modal');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  if (currentChart) { currentChart.destroy(); currentChart = null; }
}

function renderRadarChart(flavor, color) {
  const canvas = document.getElementById('modal-radar');
  if (!canvas || !window.Chart) return;
  if (currentChart) currentChart.destroy();

  const labels = ['Pedas', 'Manis', 'Gurih', 'Asam', 'Pahit'];
  const values = [flavor.pedas, flavor.manis, flavor.gurih, flavor.asam, flavor.pahit].map(v => v / 10);

  currentChart = new Chart(canvas, {
    type: 'radar',
    data: {
      labels,
      datasets: [{
        data: values,
        borderColor: color,
        backgroundColor: `${color}33`,
        borderWidth: 2,
        pointBackgroundColor: color,
        pointRadius: 3,
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        r: {
          min: 0, max: 10,
          grid: { color: 'rgba(157,143,124,0.2)' },
          angleLines: { color: 'rgba(157,143,124,0.2)' },
          ticks: { display: false },
          pointLabels: {
            color: '#d4c4b0',
            font: { family: 'Inter', size: 11, weight: '600' }
          }
        }
      }
    }
  });
}

function initModal() {
  const overlay = document.getElementById('dish-modal');
  if (!overlay) return;

  // Close on overlay click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  // Close button
  const closeBtn = overlay.querySelector('#modal-close');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  // ESC key
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}

/* ── Interactive Map Pins ── */
function initMapPins() {
  document.querySelectorAll('.map-pin[data-href]').forEach(pin => {
    pin.addEventListener('click', () => {
      window.location.href = pin.dataset.href;
    });
  });
}

/* ── Init All ── */
document.addEventListener('DOMContentLoaded', () => {
  initProgressBar();
  initMobileMenu();
  initScrollReveal();
  initStaggeredCards();
  initFilterTabs();
  initModal();
  initMapPins();
});
