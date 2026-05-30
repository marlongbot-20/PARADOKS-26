/* =============================================
   CULINARY JOURNEY — region.js
   Shared script for yogyakarta.html,
   sumatera-selatan.html, nusa-tenggara-barat.html
   Fetches JSON data, renders dish cards, modal
   ============================================= */

'use strict';

let regionData = null;

async function loadRegionData() {
  // Determine which JSON to load from data-region attribute on body
  const region = document.body.dataset.region;

  // PERBAIKAN 1: Menghapus awalan '/' atau '../' agar path menjadi relatif
  const jsonMap = {
    'yogyakarta': 'data/yogyakarta.json',
    'sumatera-selatan': 'data/sumatera-selatan.json',
    'nusa-tenggara-barat': 'data/nusa-tenggara-barat.json',
  };

  const url = jsonMap[region];
  if (!url) return;

  const res = await fetch(url);
  regionData = await res.json();
  renderDishGrid(regionData.hidangan);
}

function flavorBarHTML(label, pct, isHot = false) {
  const cls = isHot ? 'flavor-bar__fill--hot' : '';
  return `
    <div class="flavor-bar">
      <span class="flavor-bar__label">${label}</span>
      <div class="flavor-bar__track">
        <div class="flavor-bar__fill ${cls}" style="width:0%" data-target="${pct}%"></div>
      </div>
    </div>`;
}

function cardHTML(dish, regionColor) {
  const f = dish.flavor;
  // Pick top 3 flavor bars for card preview
  const entries = Object.entries(f).sort((a, b) => b[1] - a[1]).slice(0, 3);
  const bars = entries.map(([key, val]) =>
    flavorBarHTML(key.charAt(0).toUpperCase() + key.slice(1), val, key === 'pedas')
  ).join('');

  return `
    <article class="dish-card reveal" data-kategori="${dish.kategori}"
             data-id="${dish.id}" tabindex="0" role="button"
             aria-label="Lihat detail ${dish.nama}">
      <div class="dish-card__img-wrap">
        <img src="${dish.img}" alt="${dish.nama}" loading="lazy" />
      </div>
      <div class="dish-card__body">
        <span class="dish-card__tag" style="color:${regionColor}; border-color:${regionColor};">
          ${dish.tags[0]}
        </span>
        <h3 class="dish-card__title">${dish.nama}</h3>
        <div class="dish-card__flavor-bars">${bars}</div>
      </div>
    </article>`;
}

function renderDishGrid(hidangan) {
  const grid = document.getElementById('dish-grid');
  if (!grid) return;
  const color = regionData.warna;
  grid.innerHTML = hidangan.map(d => cardHTML(d, color)).join('');

  // Animate flavor bars and cards after render
  requestAnimationFrame(() => {
    // Animasi bar rasa
    grid.querySelectorAll('.flavor-bar__fill').forEach(el => {
      setTimeout(() => { el.style.width = el.dataset.target; }, 300);
    });

    // PERBAIKAN 2: Paksa kartu untuk muncul perlahan secara berurutan
    grid.querySelectorAll('.dish-card').forEach((card, i) => {
      setTimeout(() => card.classList.add('visible'), i * 100);
    });
  });

  // Attach click handlers
  grid.querySelectorAll('.dish-card').forEach(card => {
    const openCard = () => {
      const id = card.dataset.id;
      const dish = hidangan.find(d => d.id === id);
      if (dish) openModal(dish, color);
    };
    card.addEventListener('click', openCard);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openCard(); });
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', loadRegionData);
/* =========================================
   ELEMENT
========================================= */

const track = document.getElementById("carouselTrack");

const nextBtn = document.getElementById("nextBtn");

const prevBtn = document.getElementById("prevBtn");

/* =========================================
   STATE
========================================= */

let foods = [];

let currentIndex = 0;

/* =========================================
   LOAD JSON
========================================= */

async function loadFoods() {

  try {

    const response =
      await fetch("./data/sumatera-selatan.json");

    const data =
      await response.json();

    foods = data.makanan;

    renderCards();

    updateCoverflow();

  } catch (error) {

    console.error(error);
  }
}

/* =========================================
   RENDER CARDS
========================================= */

function renderCards() {

  track.innerHTML = foods.map(food => `

    <article class="food-card">

      <div class="food-card__image">
        <img src="${food.img}" alt="${food.nama}">
      </div>

      <div class="food-card__content">

        <span class="food-card__category">
          ${food.kategori}
        </span>

        <h3 class="food-card__title">
          ${food.nama}
        </h3>

        <p class="food-card__desc">
          ${food.deskripsi}
        </p>

        <div class="food-card__traits">

          ${(food.tags || [])
      .map(tag => `<span>${tag}</span>`)
      .join("")}

        </div>

      </div>

    </article>

  `).join("");
}

/* =========================================
   UPDATE COVERFLOW
========================================= */

function updateCoverflow() {

  const cards =
    document.querySelectorAll(".food-card");

  cards.forEach((card, index) => {

    const offset =
      index - currentIndex;

    let transform = "";

    /* =========================
       ACTIVE
    ========================= */

    if (offset === 0) {

      transform = `
        translate(-50%, -50%)
        translateX(0)
        rotateY(0deg)
        scale(1)
      `;

      card.classList.add("active");

      card.style.opacity = "1";

      card.style.zIndex = "20";
    }

    /* =========================
       RIGHT
    ========================= */

    else if (offset > 0) {

      transform = `
        translate(-50%, -50%)
        translateX(${offset * 240}px)
        rotateY(-45deg)
        scale(${1 - offset * 0.15})
      `;

      card.classList.remove("active");

      card.style.opacity =
        Math.max(0, 1 - offset * 0.25);

      card.style.zIndex =
        10 - offset;
    }

    /* =========================
       LEFT
    ========================= */

    else {

      transform = `
        translate(-50%, -50%)
        translateX(${offset * 240}px)
        rotateY(45deg)
        scale(${1 - Math.abs(offset) * 0.15})
      `;

      card.classList.remove("active");

      card.style.opacity =
        Math.max(0, 1 - Math.abs(offset) * 0.25);

      card.style.zIndex =
        10 - Math.abs(offset);
    }

    card.style.transform = transform;
  });
}

/* =========================================
   NEXT
========================================= */

function nextSlide() {

  currentIndex++;

  if (currentIndex >= foods.length) {
    currentIndex = 0;
  }

  updateCoverflow();
}

/* =========================================
   PREV
========================================= */

function prevSlide() {

  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = foods.length - 1;
  }

  updateCoverflow();
}

/* =========================================
   EVENTS
========================================= */

nextBtn.addEventListener("click", nextSlide);

prevBtn.addEventListener("click", prevSlide);

/* =========================================
   AUTO SLIDE
========================================= */

setInterval(() => {

  nextSlide();

}, 5000);

/* =========================================
   START
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  loadFoods();
});