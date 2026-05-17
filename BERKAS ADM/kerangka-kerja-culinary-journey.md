---
{
  "id": "file_hdqvy6et",
  "filetype": "document",
  "filename": "kerangka-kerja-culinary-journey",
  "created_at": "2026-05-17T15:59:01.226Z",
  "updated_at": "2026-05-17T15:59:01.227Z",
  "meta": {
    "location": "/",
    "tags": [],
    "categories": [],
    "description": "",
    "source": "markdown"
  }
}
---
# Kerangka Kerja Proyek — *Culinary Journey: Menjelajahi Rasa Nusantara*
**Tim:** 3 Orang | **Format Output:** Web Story / Visual Essay Interaktif  
**Fokus Daerah:** Yogyakarta · Sumatera Selatan · Nusa Tenggara Barat  
**Versi Dokumen:** 1.0 | **Status:** Draft Awal

---

## Daftar Isi

1. [Pendahuluan](#1-pendahuluan)
   - 1.1 Latar Belakang
   - 1.2 Tinjauan Masalah dan Peluang
   - 1.3 Ruang Lingkup
2. [Requirements](#2-requirements)
   - 2.1 Functional Requirements
   - 2.2 Non-Functional Requirements
3. [Wireframe dan UI/UX](#3-wireframe-dan-uiux)
4. [Rancangan Arsitektur Sistem](#4-rancangan-arsitektur-sistem)
5. [Storyline dan Storyboard](#5-storyline-dan-storyboard)
6. [Implementasi Program](#6-implementasi-program)

---

## 1. Pendahuluan

### 1.1 Latar Belakang

Indonesia adalah negara kepulauan dengan lebih dari 17.000 pulau yang menyimpan kekayaan kuliner luar biasa. Setiap daerah memiliki cita rasa, bahan, dan teknik memasak yang unik — membentuk identitas budaya lokal yang tak ternilai. Namun, kekayaan ini seringkali tersebar dan sulit diakses oleh publik secara interaktif dan menarik.

Proyek ini menghadirkan **Culinary Journey: Menjelajahi Rasa Nusantara**, sebuah **web story berbasis data** yang membawa pengguna menjelajahi kuliner tiga daerah ikonik Indonesia:

| Daerah | Identitas Kuliner | Hidangan Ikonik |
|--------|-------------------|-----------------|
| **Yogyakarta** | Cita rasa manis-gurih, warisan Keraton | Gudeg, Oseng Mercon, Bakpia |
| **Sumatera Selatan** | Paduan asam segar dan bumbu pekat | Pempek, Tekwan, Model |
| **Nusa Tenggara Barat** | Pedas ekstrem, pengaruh seafood | Ayam Taliwang, Plecing Kangkung, Beberuk |

Proyek ini menggabungkan **storytelling naratif**, **visualisasi data**, dan **desain interaktif** untuk menciptakan pengalaman eksplorasi kuliner yang imersif dan berbasis data nyata.

### 1.2 Tinjauan Masalah dan Peluang

#### Masalah yang Diidentifikasi

- **Fragmentasi informasi kuliner**: Data kuliner daerah tersebar di berbagai sumber (Wikipedia, blog, media sosial) tanpa satu platform terintegrasi yang berbasis data.
- **Kurangnya narasi berbasis data**: Sebagian besar konten kuliner bersifat deskriptif, bukan eksploratif dan data-driven.
- **Aksesibilitas rendah**: Masyarakat umum, wisatawan, dan pelajar tidak memiliki akses mudah ke visualisasi kuliner yang komprehensif.
- **Potensi warisan budaya belum terdokumentasi secara digital** dengan baik dalam format yang menarik dan interaktif.

#### Peluang

- **Tren Web Story & Scrollytelling**: Format visual essay/scrollytelling semakin populer sebagai media edukasi dan eksplorasi.
- **Dataset publik tersedia**: Tiga dataset dari Kaggle menyediakan data terstruktur mulai dari nama makanan, bahan, resep, hingga informasi nutrisi — yang bisa divisualisasikan.
- **Potensi audiens luas**: Wisatawan domestik dan mancanegara, pelajar, komunitas kuliner, dan masyarakat umum.
- **Nilai promosi pariwisata**: Web story ini secara tidak langsung mempromosikan kuliner lokal sebagai daya tarik wisata ketiga daerah.

### 1.3 Ruang Lingkup

#### Dalam Scope ✅

- Web story interaktif mencakup **3 daerah fokus**: Yogyakarta, Sumatera Selatan, dan Nusa Tenggara Barat
- Visualisasi data dari **3 dataset Kaggle**:
  - [Indonesian Food (Name & Genre)](https://www.kaggle.com/datasets/sinusinu/indonesian-food) — klasifikasi makanan
  - [Indonesian Food Recipes](https://www.kaggle.com/datasets/canggih/indonesian-food-recipes/data) — 14.000+ resep
  - [Indonesian Food and Drink Nutrition Dataset](https://www.kaggle.com/datasets/anasfikrihanif/indonesian-food-and-drink-nutrition-dataset/data) — 1.346 data nutrisi
- Desain responsif (desktop & mobile)
- Fitur interaktif: filter daerah, radar chart profil rasa, bar chart nutrisi, navigasi scrollytelling
- Halaman: Landing, Eksplorasi Daerah (3 halaman), Detail Hidangan, Data & Insight

#### Luar Scope ❌

- Sistem login dan akun pengguna
- Fitur ulasan atau komentar pengguna
- Cakupan seluruh 34 provinsi Indonesia
- Sistem rekomendasi berbasis AI/ML
- Integrasi e-commerce atau pemesanan makanan

---

## 2. Requirements

### 2.1 Functional Requirements

#### FR-01 — Halaman Landing (Hero Page)

| ID | Requirement |
|----|-------------|
| FR-01.1 | Sistem menampilkan hero section dengan judul, tagline, dan CTA utama |
| FR-01.2 | Sistem menampilkan animasi visual penanda 3 daerah fokus |
| FR-01.3 | Sistem menyediakan tombol navigasi ke halaman eksplorasi daerah |
| FR-01.4 | Sistem menampilkan statistik ringkasan (jumlah hidangan, dataset) |

#### FR-02 — Eksplorasi Daerah

| ID | Requirement |
|----|-------------|
| FR-02.1 | Sistem menyediakan halaman khusus untuk setiap daerah (Jogja, Sumsel, NTB) |
| FR-02.2 | Sistem menampilkan daftar hidangan khas per daerah dalam format card |
| FR-02.3 | Sistem menyediakan filter berdasarkan kategori (makanan berat, snack, minuman) |
| FR-02.4 | Sistem menampilkan flavor bar (pedas, manis, gurih, asam) per hidangan |
| FR-02.5 | Setiap card hidangan dapat diklik untuk membuka halaman detail |

#### FR-03 — Detail Hidangan (DNA Rasa)

| ID | Requirement |
|----|-------------|
| FR-03.1 | Sistem menampilkan nama, asal daerah, dan deskripsi naratif hidangan |
| FR-03.2 | Sistem menampilkan **radar chart** 5 dimensi rasa (pedas, manis, gurih, asam, pahit) |
| FR-03.3 | Sistem menampilkan **bar chart nutrisi** (kalori, protein, lemak, karbohidrat per 100g) |
| FR-03.4 | Sistem menampilkan daftar bahan utama dalam format chip/tag |
| FR-03.5 | Sistem menampilkan ringkasan resep (diambil dari dataset resep) |

#### FR-04 — Data & Insight

| ID | Requirement |
|----|-------------|
| FR-04.1 | Sistem menampilkan perbandingan kalori antar hidangan dari 3 daerah (bar chart) |
| FR-04.2 | Sistem menampilkan heatmap profil rasa antar daerah |
| FR-04.3 | Sistem menampilkan informasi sumber dataset dan tautan ke Kaggle |
| FR-04.4 | Sistem menampilkan visualisasi perbandingan antar daerah (radar chart gabungan) |

#### FR-05 — Navigasi & UX

| ID | Requirement |
|----|-------------|
| FR-05.1 | Sistem menyediakan navigasi sticky di bagian atas (navbar) |
| FR-05.2 | Sistem mendukung scrollytelling — konten muncul bertahap saat di-scroll |
| FR-05.3 | Sistem menyediakan tombol "Kembali" yang konsisten di setiap halaman |
| FR-05.4 | Sistem menampilkan indikator progres scrollytelling |

### 2.2 Non-Functional Requirements

#### NFR-01 — Performa

| ID | Requirement | Target |
|----|-------------|--------|
| NFR-01.1 | Waktu loading halaman pertama | < 3 detik pada koneksi 4G |
| NFR-01.2 | Animasi dan transisi berjalan smooth | ≥ 60 fps |
| NFR-01.3 | Ukuran bundle JavaScript | < 500 KB (gzipped) |
| NFR-01.4 | Optimasi gambar dengan lazy loading | Diterapkan di semua gambar |

#### NFR-02 — Responsivitas

| ID | Requirement |
|----|-------------|
| NFR-02.1 | Layout responsif mendukung breakpoint: mobile (< 768px), tablet (768–1024px), desktop (> 1024px) |
| NFR-02.2 | Visualisasi data (chart) menyesuaikan ukuran layar |
| NFR-02.3 | Touch-friendly pada perangkat mobile |

#### NFR-03 — Aksesibilitas

| ID | Requirement |
|----|-------------|
| NFR-03.1 | Contrast ratio teks minimal 4.5:1 (WCAG AA) |
| NFR-03.2 | Semua gambar memiliki atribut `alt` yang deskriptif |
| NFR-03.3 | Navigasi dapat digunakan dengan keyboard |

#### NFR-04 — Maintainability

| ID | Requirement |
|----|-------------|
| NFR-04.1 | Data hidangan disimpan dalam file JSON terpisah (mudah diperbarui) |
| NFR-04.2 | Komponen UI dibuat modular dan reusable |
| NFR-04.3 | Kode terdokumentasi dengan komentar inline |

#### NFR-05 — Kompatibilitas Browser

| ID | Requirement |
|----|-------------|
| NFR-05.1 | Mendukung Chrome, Firefox, Safari (2 versi terakhir) |
| NFR-05.2 | Mendukung Edge (Chromium-based) |

---

## 3. Wireframe dan UI/UX

### 3.1 Rekomendasi Template Referensi

Dari [learning-zone.github.io/website-templates](https://learning-zone.github.io/website-templates/), berikut **3 template yang paling relevan** untuk proyek ini:

---

#### 🥇 Pilihan 1 — `bestro-restaurant-bootstrap-html5-template`
**Live:** https://learning-zone.github.io/website-templates/bestro-restaurant-bootstrap-html5-template/

**Alasan cocok:**
- Template **restoran** dengan layout card grid yang ideal untuk menampilkan hidangan per kategori
- Struktur multi-halaman (Home, Gallery, Services) sesuai dengan kebutuhan navigasi web story
- Hero section dengan full-width slider sangat cocok untuk hook visual pertama
- Section "Our Events" bisa diadaptasi menjadi **timeline hidangan per daerah**
- Footer multi-kolom mendukung tautan dataset dan sumber data

**Yang perlu diadaptasi:** Ganti elemen restoran komersial (pricing, contact form) dengan section data visualisasi dan insight.

---

#### 🥈 Pilihan 2 — `eat-restaurant-bootstrap-html5-template`
**Live:** https://learning-zone.github.io/website-templates/eat-restaurant-bootstrap-html5-template/

**Alasan cocok:**
- Desain **one-page scrolling** — sangat sesuai dengan format web story / scrollytelling
- Navigasi anchor link memudahkan scrolling antar section tanpa pindah halaman
- Layout "Streets Best / Continental / Daily Dishes" bisa diadaptasi menjadi **3 daerah fokus**
- Visual section Gallery yang bersih cocok untuk menampilkan foto hidangan

**Yang perlu diadaptasi:** Tambahkan section visualisasi data (chart) di antara section narasi, dan ubah struktur menu menjadi navigasi antar daerah.

---

#### 🥉 Pilihan 3 — `golden-hotel-free-html5-bootstrap-web-template`
**Live:** https://learning-zone.github.io/website-templates/golden-hotel-free-html5-bootstrap-web-template/

**Alasan cocok:**
- Estetika **premium dan elegan** (nuansa emas/gelap) yang sangat cocok dengan tema kuliner Nusantara
- Section "Portfolio" bisa diubah menjadi **grid hidangan interaktif**
- Layout "Our Team" bisa diadaptasi menjadi **profil daerah** (Jogja, Sumsel, NTB)
- Section services 6-kolom cocok untuk menampilkan kategori makanan (berat, ringan, minuman)

**Yang perlu diadaptasi:** Paling banyak memerlukan modifikasi karena tema hotel, tapi menawarkan estetika visual terbaik dari ketiganya.

---

### 3.2 Struktur Halaman dan Wireframe

#### Halaman 1 — Landing Page

```
┌─────────────────────────────────────────────┐
│  NAVBAR: Logo | Yogyakarta | Sumsel | NTB | Data
├─────────────────────────────────────────────┤
│                                             │
│           HERO SECTION                      │
│    [Animasi 3 daerah — visual ikonik]        │
│    "Culinary Journey: Menjelajahi Rasa"     │
│    Yogyakarta · Sumatera Selatan · NTB      │
│    [CTA: Mulai Jelajah ▶]                   │
│                                             │
├─────────────────────────────────────────────┤
│  STATISTIK ROW                              │
│  [3 Daerah] [XX Hidangan] [1.346 Data Nutrisi]
├─────────────────────────────────────────────┤
│  INTRO NARASI (scrollytelling)              │
│  "Indonesia punya ribuan cita rasa..."      │
├─────────────────────────────────────────────┤
│  CARD PILIH DAERAH (3 kolom)               │
│  [🎋 Jogja] [🌶️ Sumsel] [🌊 NTB]           │
└─────────────────────────────────────────────┘
```

#### Halaman 2 — Eksplorasi Daerah (contoh: Yogyakarta)

```
┌─────────────────────────────────────────────┐
│  NAVBAR (sticky)                            │
├─────────────────────────────────────────────┤
│  ← Kembali                                  │
│  HEADER DAERAH                              │
│  🎋 YOGYAKARTA                              │
│  "Kota dengan cita rasa manis dan budaya"   │
├─────────────────────────────────────────────┤
│  FILTER: [Semua] [Makanan Berat] [Snack]   │
├─────────────────────────────────────────────┤
│  GRID HIDANGAN (3 kolom)                   │
│  ┌──────┐ ┌──────┐ ┌──────┐               │
│  │[Foto]│ │[Foto]│ │[Foto]│               │
│  │Gudeg │ │Mercon│ │Bakpia│               │
│  │Flavor│ │Flavor│ │Flavor│               │
│  │bars  │ │bars  │ │bars  │               │
│  └──────┘ └──────┘ └──────┘               │
└─────────────────────────────────────────────┘
```

#### Halaman 3 — Detail Hidangan / DNA Rasa

```
┌─────────────────────────────────────────────┐
│  NAVBAR (sticky)                            │
├─────────────────────────────────────────────┤
│  ← Kembali ke Yogyakarta                   │
├───────────────────────┬─────────────────────┤
│  LEFT PANEL           │  RIGHT PANEL        │
│                       │                     │
│  [Foto Hidangan]      │  PROFIL RASA        │
│  Nama Hidangan        │  [RADAR CHART]      │
│  Asal Daerah          │  Pedas / Manis /    │
│  Deskripsi naratif    │  Gurih / Asam /     │
│                       │  Pahit              │
│  BAHAN UTAMA          │─────────────────────│
│  [chip] [chip] [chip] │  NUTRISI (per 100g) │
│                       │  Kalori  ████░░ 195 │
│  RESEP SINGKAT        │  Protein ████░░  26g│
│  1. Siapkan...        │  Lemak   ███░░░   9g│
│  2. Masak...          │  Karbo   ██░░░░   4g│
└───────────────────────┴─────────────────────┘
```

#### Halaman 4 — Data & Insight

```
┌─────────────────────────────────────────────┐
│  NAVBAR (sticky)                            │
├─────────────────────────────────────────────┤
│  DATA & INSIGHT KULINER NUSANTARA           │
├─────────────────────────────────────────────┤
│  [Chart 1: Kalori Perbandingan — Bar Chart] │
│  Perbandingan kalori 9 hidangan 3 daerah    │
├─────────────────────────────────────────────┤
│  [Chart 2: Heatmap Profil Rasa]            │
│  Daerah × Dimensi Rasa                     │
├─────────────────────────────────────────────┤
│  [Chart 3: Radar Perbandingan 3 Daerah]    │
│  Overlay radar Jogja vs Sumsel vs NTB       │
├─────────────────────────────────────────────┤
│  SUMBER DATASET                            │
│  [Kaggle 1] [Kaggle 2] [Kaggle 3]          │
└─────────────────────────────────────────────┘
```

### 3.3 Design System

| Elemen | Spesifikasi |
|--------|-------------|
| **Font Heading** | Georgia / Playfair Display (serif, kesan tradisional) |
| **Font Body** | Inter / Arial (sans-serif, keterbacaan tinggi) |
| **Warna Primer** | `#C8902A` — Emas (nuansa rempah) |
| **Warna Sekunder** | `#9B3A1A` — Merah bata (pedas, Nusantara) |
| **Background** | `#120906` — Cokelat sangat gelap |
| **Teks Utama** | `#F2E8D5` — Krem |
| **Teks Muted** | `#9A8070` — Cokelat muda |
| **Aksen Jogja** | `#C8902A` (emas — identitas Keraton) |
| **Aksen Sumsel** | `#C84C22` (jingga — pempek, cuka) |
| **Aksen NTB** | `#1A5C4A` (hijau teal — plecing, seafood) |
| **Border-radius** | 4px (tegas, bukan terlalu bulat) |
| **Spacing System** | 4px base (4, 8, 12, 16, 24, 32, 48, 64px) |

---

## 4. Rancangan Arsitektur Sistem

### 4.1 Gambaran Umum Arsitektur

Proyek ini menggunakan arsitektur **Client-Side Static Web Application** — tidak memerlukan server backend dinamis. Semua data di-preprocess dari dataset Kaggle dan disimpan sebagai file JSON statis.

```
┌──────────────────────────────────────────────────────┐
│                    CLIENT (Browser)                   │
│                                                      │
│   ┌─────────────┐    ┌──────────────┐               │
│   │   UI Layer   │    │  Data Layer  │               │
│   │  (HTML/CSS) │    │  (JSON files)│               │
│   └──────┬──────┘    └──────┬───────┘               │
│          │                  │                        │
│   ┌──────▼──────────────────▼──────┐                │
│   │     JavaScript / Framework      │                │
│   │  (Vanilla JS / Vue / React)    │                │
│   └──────────────────────────────┘                │
│                                                      │
│   ┌──────────────────────────────┐                  │
│   │  Visualization Libraries      │                  │
│   │  D3.js / Chart.js / Recharts │                  │
│   └──────────────────────────────┘                  │
└──────────────────────────────────────────────────────┘
           ▲
           │ Static files (HTML, CSS, JS, JSON, Img)
           │
┌──────────▼──────────┐
│    Static Hosting   │
│  GitHub Pages /     │
│  Netlify / Vercel   │
└─────────────────────┘
```

### 4.2 Struktur Direktori Proyek

```
culinary-journey/
│
├── index.html                  # Landing page
├── yogyakarta.html             # Halaman daerah Yogyakarta
├── sumatera-selatan.html       # Halaman daerah Sumatera Selatan
├── nusa-tenggara-barat.html    # Halaman daerah NTB
├── insight.html                # Halaman Data & Insight
│
├── assets/
│   ├── css/
│   │   ├── main.css            # Global styles, design system
│   │   ├── components.css      # Reusable component styles
│   │   └── charts.css          # Chart-specific styles
│   ├── js/
│   │   ├── main.js             # Global scripts, navigation
│   │   ├── charts.js           # Chart rendering (D3/Chart.js)
│   │   ├── scrollytelling.js   # Scroll animation logic
│   │   └── filter.js           # Filter & search functionality
│   └── images/
│       ├── jogja/              # Foto hidangan Yogyakarta
│       ├── sumsel/             # Foto hidangan Sumatera Selatan
│       └── ntb/                # Foto hidangan NTB
│
├── data/
│   ├── yogyakarta.json         # Data hidangan Yogyakarta (processed)
│   ├── sumatera-selatan.json   # Data hidangan Sumatera Selatan
│   ├── ntb.json                # Data hidangan NTB
│   └── insight.json            # Data agregat untuk halaman insight
│
├── scripts/
│   └── preprocess.py           # Script Python untuk proses dataset Kaggle
│
└── README.md
```

### 4.3 Alur Data (Data Flow)

```
Dataset Kaggle (CSV/Excel)
        │
        ▼
┌───────────────────┐
│  preprocess.py    │  ← Dikerjakan oleh Back-End
│  - Filter 3 daerah│
│  - Clean & merge  │
│  - Hitung avg rasa│
│  - Export ke JSON │
└────────┬──────────┘
         │
         ▼
   data/*.json
         │
         ▼
┌───────────────────┐
│  JavaScript       │  ← Dikerjakan oleh Front-End
│  fetch() JSON     │
│  Render UI        │
│  Render Charts    │
└───────────────────┘
         │
         ▼
   Tampilan Web Story
```

### 4.4 Stack Teknologi

| Layer | Teknologi | Keterangan |
|-------|-----------|------------|
| **Markup** | HTML5 | Semantic HTML |
| **Styling** | CSS3 + Bootstrap 5 | Responsif, grid system |
| **Interaktivitas** | Vanilla JavaScript / Vue.js | Routing, state management |
| **Visualisasi** | D3.js atau Chart.js | Radar chart, bar chart, heatmap |
| **Scrollytelling** | Intersection Observer API | Native browser API, tanpa library besar |
| **Data Preprocessing** | Python (pandas) | Di-run sekali, output JSON |
| **Hosting** | GitHub Pages / Netlify | Free tier, cukup untuk static site |

### 4.5 Pembagian Tugas Tim

| Peran | Nama | Tanggung Jawab |
|-------|------|----------------|
| **Ketua Tim + UI/UX** | [Nama] | Desain sistem keseluruhan, wireframe, design system, koordinasi, QA visual |
| **Front-End** | [Nama] | Implementasi HTML/CSS/JS, integrasi chart library, scrollytelling, responsivitas |
| **Back-End / Data** | [Nama] | Preprocessing dataset Kaggle (Python), struktur JSON, validasi data |

---

## 5. Storyline dan Storyboard

### 5.1 Storyline Utama

**Big Idea:**
> *"Setiap suapan adalah cerita. Di balik cita rasa yang berbeda dari Yogyakarta, Sumatera Selatan, dan Nusa Tenggara Barat, tersimpan data, sejarah, dan identitas budaya yang bisa kita jelajahi bersama."*

**Arc Narasi (5 Babak):**

```
HOOK → KONTEKS → EKSPLORASI → PENEMUAN → REFLEKSI
```

| Babak | Deskripsi | Halaman |
|-------|-----------|---------|
| **1. Hook** | Pertanyaan pembuka: "Apa yang membuat rendang berbeda dari gudeg?" — mengundang rasa ingin tahu | Landing Page |
| **2. Konteks** | Perkenalan 3 daerah dan identitas kuliner masing-masing — peta visual, statistik | Landing → Pemilihan Daerah |
| **3. Eksplorasi** | Pengguna memilih daerah, menjelajahi hidangan, membaca deskripsi naratif | Halaman Daerah |
| **4. Penemuan** | Pengguna menemukan "DNA Rasa" — radar chart, profil nutrisi, bahan unik | Halaman Detail |
| **5. Refleksi** | Perbandingan antar daerah, insight menarik dari data | Halaman Insight |

### 5.2 Storyline per Daerah

#### 🎋 Yogyakarta — "Di Balik Manisnya Kota Pelajar"

> Yogyakarta bukan hanya soal Malioboro dan Prambanan. Di balik hiruk-pikuk kotanya, tersimpan filosofi rasa yang dalam: manis bukan sekadar selera, tapi warisan Keraton yang merasuk ke setiap masakan.

**Hidangan utama yang disorot:** Gudeg (ikonik), Oseng-Oseng Mercon (kontras: paling pedas), Bakpia (oleh-oleh)

**Angle data menarik:** Gudeg Yogya memiliki skor manis tertinggi (9/10) di antara semua hidangan dari 3 daerah. Kontras dengan Oseng Mercon yang memiliki skor pedas 10/10 — keduanya berasal dari kota yang sama.

---

#### 🌶️ Sumatera Selatan — "Warisan Sungai Musi dalam Setiap Gigitan"

> Pempek lahir di tepi Sungai Musi. Ikan, cuka, dan cabai — tiga bahan sederhana yang menciptakan kombinasi rasa yang tak tertandingi. Sumatera Selatan adalah daerah dengan profil rasa paling kompleks: asam tinggi, pedas sedang, gurih kuat.

**Hidangan utama yang disorot:** Pempek (ikonis, internasional), Tekwan (lokal, autentik), Model (kurang dikenal)

**Angle data menarik:** Pempek memiliki skor **asam tertinggi** (9/10) dari seluruh dataset. Kombinasi asam + gurih yang unik membedakannya dari masakan daerah lain.

---

#### 🌊 Nusa Tenggara Barat — "Tanah Bumbu di Ujung Sunda Kecil"

> Di Lombok, pedas bukan sekadar bumbu — ia adalah identitas. Ayam Taliwang dan Plecing Kangkung bukan hanya makanan, tapi pernyataan budaya masyarakat Sasak yang tangguh dan berani.

**Hidangan utama yang disorot:** Ayam Taliwang (pedas, ikonik), Plecing Kangkung (segar, sederhana), Beberuk Terong (kurang dikenal)

**Angle data menarik:** NTB memiliki **rata-rata skor pedas tertinggi** (8.5/10) di antara 3 daerah. Namun juga memiliki hidangan dengan kalori paling rendah (Plecing Kangkung: 45 kcal/100g).

### 5.3 Storyboard Visual (Frame per Frame)

#### Frame 1 — Hero Landing

```
┌─────────────────────────────────────────┐
│ [Full-screen background: peta Indonesia │
│  dengan 3 titik bercahaya]             │
│                                         │
│        CULINARY JOURNEY                 │
│   Menjelajahi Rasa Nusantara           │
│                                         │
│  Yogyakarta · Sumatera Selatan · NTB  │
│                                         │
│     [ Mulai Perjalanan ▶ ]             │
│                                         │
│ [Scroll indicator: ↓]                  │
└─────────────────────────────────────────┘
Transisi: Fade in judul → CTA muncul setelah 1 detik
Narasi: "Setiap daerah punya cerita di atas piringnya."
```

#### Frame 2 — Intro Scroll

```
┌─────────────────────────────────────────┐
│ [Scroll-triggered: teks muncul satu per │
│  satu]                                  │
│                                         │
│  "Dari 34 provinsi di Indonesia..."    │
│         ↓ (scroll)                      │
│  "...kami pilih 3 daerah dengan        │
│   cita rasa paling ikonik."            │
│         ↓ (scroll)                      │
│  "Mari jelajahi bersama."              │
└─────────────────────────────────────────┘
Transisi: Intersection Observer — teks slide up + fade in
```

#### Frame 3 — Pilih Daerah

```
┌─────────────────────────────────────────┐
│  3 CARD DAERAH (muncul staggered)      │
│                                         │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐  │
│  │ 🎋 Jogja│ │🌶️ Sumsel│ │🌊  NTB  │  │
│  │ Manis · │ │ Asam ·  │ │ Pedas · │  │
│  │ Gurih   │ │ Gurih   │ │ Segar   │  │
│  │[Jelajah]│ │[Jelajah]│ │[Jelajah]│  │
│  └─────────┘ └─────────┘ └─────────┘  │
└─────────────────────────────────────────┘
Transisi: Card muncul dari bawah, delay 200ms per card
```

#### Frame 4 — Eksplorasi Hidangan

```
┌─────────────────────────────────────────┐
│  HEADER: 🎋 YOGYAKARTA                  │
│  "Kota dengan cita rasa paling manis"  │
│                                         │
│  [Filter tabs: Semua | Berat | Snack]  │
│                                         │
│  ┌──────┐ ┌──────┐ ┌──────┐            │
│  │[Gudeg│ │Oseng │ │Bakpia│            │
│  │ foto]│ │Mercon│ │      │            │
│  │flavor│ │flavor│ │flavor│            │
│  │bars  │ │bars  │ │bars  │            │
│  └──────┘ └──────┘ └──────┘            │
└─────────────────────────────────────────┘
Interaksi: Klik card → slide ke halaman detail
```

#### Frame 5 — DNA Rasa (Detail Hidangan)

```
┌──────────────────┬──────────────────────┐
│  LEFT: Narasi    │  RIGHT: Visualisasi  │
│                  │                      │
│  [Foto Gudeg]    │  RADAR CHART         │
│                  │    Pedas             │
│  "Gudeg adalah   │   /    \             │
│  filosofi rasa   │ Pahit   Manis ████   │
│  orang Jogja:    │   \    /             │
│  manis, sabar,   │  Asam  Gurih         │
│  dan penuh       │                      │
│  kelembutan."    │  ──────────────────  │
│                  │  NUTRISI (per 100g)  │
│  BAHAN:          │  Kalori ████░ 220   │
│  [nangka][santan]│  Protein ██░░░  8g  │
│  [gula jawa]     │  Lemak  ███░░ 10g   │
│  [telur][krecek] │  Karbo  ████░ 30g   │
└──────────────────┴──────────────────────┘
```

#### Frame 6 — Data & Insight

```
┌─────────────────────────────────────────┐
│  DATA & INSIGHT                         │
│                                         │
│  [Bar Chart: Kalori per Hidangan]      │
│  Babi Guling    ████████████  310      │
│  Rendang        ████████      195      │
│  Gudeg          █████████     220      │
│  Pempek         ████████      185      │
│  Plecing        ██             45      │
│                                         │
│  [Heatmap: Profil Rasa × Daerah]      │
│           Pedas Manis Gurih Asam       │
│  Jogja      2    9     7     3         │
│  Sumsel     5    6     8     9         │
│  NTB        9    2     7     6         │
│                                         │
│  [Radar Overlay: 3 Daerah]             │
│  — Jogja (emas) vs Sumsel (jingga)    │
│    vs NTB (hijau teal)                 │
└─────────────────────────────────────────┘
```

---

## 6. Implementasi Program

### 6.1 Sprint Plan (4 Minggu)

| Sprint | Minggu | Fokus | PIC Utama |
|--------|--------|-------|-----------|
| **Sprint 1** | Minggu 1 | Setup project, preprocessing data, design system | Back-End + UI/UX |
| **Sprint 2** | Minggu 2 | Implementasi Landing Page + Halaman Daerah | Front-End + UI/UX |
| **Sprint 3** | Minggu 3 | Halaman Detail (DNA Rasa) + Chart Library | Front-End + Back-End |
| **Sprint 4** | Minggu 4 | Halaman Insight, scrollytelling, polish, testing | Semua |

### 6.2 Task Breakdown per Peran

#### 🎨 Ketua Tim / UI-UX Designer

**Sprint 1:**
- [ ] Finalisasi design system (warna, tipografi, spacing)
- [ ] Buat wireframe detail semua halaman (Figma / Adobe XD)
- [ ] Siapkan aset visual (ikon daerah, placeholder foto)
- [ ] Review dan approve output preprocessing data

**Sprint 2:**
- [ ] Review implementasi Landing Page (visual QA)
- [ ] Review halaman daerah — konsistensi card, layout, warna
- [ ] Buat panduan komponen UI untuk front-end

**Sprint 3:**
- [ ] Review halaman detail — apakah radar chart terbaca jelas?
- [ ] QA responsivitas di berbagai ukuran layar
- [ ] Finalisasi foto/ilustrasi per hidangan

**Sprint 4:**
- [ ] Review final halaman Insight (chart labeling, keterbacaan)
- [ ] User testing sederhana (minta 2–3 orang coba navigasi)
- [ ] Polish: animasi, transisi, micro-interaction
- [ ] Dokumentasi project

#### 💻 Front-End Developer

**Sprint 1:**
- [ ] Setup repo GitHub dan struktur direktori
- [ ] Install dan konfigurasi Bootstrap 5
- [ ] Implementasi navbar sticky dan routing antar halaman
- [ ] Setup Chart.js atau D3.js

**Sprint 2:**
- [ ] Implementasi Landing Page (hero, statistik, card daerah)
- [ ] Implementasi halaman daerah (grid hidangan, filter tab)
- [ ] Implementasi flavor bars per hidangan card
- [ ] Setup Intersection Observer untuk scroll animation

**Sprint 3:**
- [ ] Implementasi halaman detail (layout 2 kolom)
- [ ] Render radar chart dari data JSON
- [ ] Render bar chart nutrisi dari data JSON
- [ ] Implementasi chip bahan dan ringkasan resep

**Sprint 4:**
- [ ] Implementasi halaman Insight (kalori bar chart, heatmap, radar overlay)
- [ ] Implementasi scrollytelling (Frame 1–3)
- [ ] Optimasi performa (lazy loading, minify)
- [ ] Cross-browser testing

#### 🗃️ Back-End / Data Engineer

**Sprint 1:**
- [ ] Download dan eksplorasi 3 dataset Kaggle
- [ ] Buat script `preprocess.py` untuk:
  - Filter hidangan berdasarkan 3 daerah
  - Merge data nama + resep + nutrisi
  - Normalisasi nama kolom
  - Hitung skor rasa (jika belum ada, buat manual/rule-based)
  - Export ke `yogyakarta.json`, `sumatera-selatan.json`, `ntb.json`, `insight.json`
- [ ] Validasi JSON output (format, tipe data, missing values)
- [ ] Dokumentasi struktur JSON

**Sprint 2:**
- [ ] Review data yang digunakan di halaman daerah (bersama front-end)
- [ ] Tambahkan data yang kurang (cari sumber sekunder jika perlu)
- [ ] Buat `insight.json` — data agregat untuk halaman insight

**Sprint 3:**
- [ ] Validasi data nutrisi yang ditampilkan di chart
- [ ] Pastikan konsistensi satuan (kcal, gram)
- [ ] Buat dokumentasi sumber data

**Sprint 4:**
- [ ] Hosting setup (GitHub Pages / Netlify)
- [ ] Deploy dan uji production build
- [ ] Backup dan dokumentasi akhir dataset

### 6.3 Struktur JSON Data

#### Contoh Format: `yogyakarta.json`

```json
{
  "daerah": "Yogyakarta",
  "region": "Jawa",
  "deskripsi": "Kota dengan cita rasa kuliner paling manis di Indonesia...",
  "warna_aksen": "#C8902A",
  "hidangan": [
    {
      "id": "gudeg-jogja",
      "nama": "Gudeg Jogja",
      "kategori": "makanan berat",
      "deskripsi": "Nangka muda yang dimasak dalam santan dan gula jawa...",
      "bahan_utama": ["Nangka muda", "Santan", "Gula jawa", "Telur", "Krecek"],
      "resep_singkat": ["Rebus nangka hingga empuk", "Masak dengan santan dan gula jawa", "..."],
      "flavor": {
        "pedas": 1,
        "manis": 9,
        "gurih": 7,
        "asam": 2,
        "pahit": 1
      },
      "nutrisi": {
        "kalori": 220,
        "protein": 8,
        "lemak": 10,
        "karbohidrat": 30,
        "satuan": "per 100g"
      },
      "tags": ["Ikonik", "Manis", "Warisan Keraton"],
      "sumber_nutrisi": "Kaggle - anasfikrihanif",
      "sumber_resep": "Kaggle - canggih"
    }
  ]
}
```

### 6.4 Library dan Dependencies

```json
{
  "dependencies": {
    "bootstrap": "^5.3.0",
    "chart.js": "^4.4.0",
    "d3": "^7.8.0"
  },
  "devDependencies": {
    "live-server": "^1.2.2"
  }
}
```

```txt
# requirements.txt (Python — preprocessing)
pandas==2.1.0
numpy==1.24.0
openpyxl==3.1.2
```

### 6.5 Kriteria Selesai (Definition of Done)

| Checklist | Kriteria |
|-----------|----------|
| ✅ Landing Page | Hero tampil, 3 card daerah terklik, statistik muncul |
| ✅ Halaman Daerah | 3 halaman daerah berfungsi, filter bekerja, card terklik |
| ✅ Halaman Detail | Radar chart render, bar chart nutrisi render, bahan tampil |
| ✅ Halaman Insight | 3 chart tampil, sumber data tercantum |
| ✅ Responsivitas | Tampil baik di 375px, 768px, 1440px |
| ✅ Data | JSON tervalidasi, tidak ada data null yang terekspos |
| ✅ Performa | Loading < 3 detik, tidak ada console error |
| ✅ Hosting | Dapat diakses via URL publik |

---

## Appendix

### A. Tautan Dataset

| Dataset | Platform | Tautan |
|---------|----------|--------|
| Indonesian Food (Name & Genre) | Kaggle | https://www.kaggle.com/datasets/sinusinu/indonesian-food |
| Indonesian Food Recipes | Kaggle | https://www.kaggle.com/datasets/canggih/indonesian-food-recipes/data |
| Indonesian Food & Drink Nutrition | Kaggle | https://www.kaggle.com/datasets/anasfikrihanif/indonesian-food-and-drink-nutrition-dataset/data |

### B. Referensi Desain

| Referensi | Tautan |
|-----------|--------|
| Template 1: Bestro Restaurant | https://learning-zone.github.io/website-templates/bestro-restaurant-bootstrap-html5-template/ |
| Template 2: Eat Restaurant | https://learning-zone.github.io/website-templates/eat-restaurant-bootstrap-html5-template/ |
| Template 3: Golden Hotel | https://learning-zone.github.io/website-templates/golden-hotel-free-html5-bootstrap-web-template/ |
| Tableau Ref 1: Sunday Dinners | https://public.tableau.com/app/profile/kimly.scott/viz/SundayDinnersIronViz2026/ |
| Tableau Ref 2: Late-night Snacks | https://public.tableau.com/app/profile/shreya.arya/viz/Late-nightSnacksIronViz2026/ |

### C. Glossary

| Istilah | Definisi |
|---------|----------|
| **Web Story** | Format konten digital yang menggabungkan narasi, data, dan interaksi dalam satu halaman web yang bisa di-scroll |
| **Scrollytelling** | Teknik storytelling digital di mana konten muncul/berubah seiring pengguna melakukan scroll |
| **DNA Rasa** | Profil rasa multidimensi suatu hidangan, divisualisasikan dengan radar chart |
| **Flavor Profile** | Kombinasi skor kuantitatif dari dimensi rasa: pedas, manis, gurih, asam, pahit |
| **Preprocessing** | Proses pembersihan, transformasi, dan penggabungan dataset mentah menjadi format JSON siap pakai |

---

*Dokumen ini bersifat living document — akan diperbarui seiring perkembangan proyek.*  
*Last updated: 2026 | Tim Culinary Journey*
