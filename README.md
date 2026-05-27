# Culinary Journey: Menjelajahi Rasa Nusantara 🇮🇩🍲

Selamat datang di repositori **Culinary Journey: Menjelajahi Rasa Nusantara**! Proyek ini adalah sebuah *web story* interaktif dan *visual essay scrollytelling* yang menyajikan perjalanan kuliner imersif dari tiga wilayah ikonik di Indonesia: **Yogyakarta**, **Sumatera Selatan**, dan **Nusa Tenggara Barat**.

Proyek ini menggabungkan narasi budaya yang kaya dengan visualisasi data interaktif menggunakan dataset kuliner riil (dataset Kaggle) guna menghadirkan representasi komprehensif atas profil rasa dan nilai gizi kuliner khas nusantara.

---

## 📂 Struktur Repositori

Berikut adalah pemetaan terperinci dari struktur folder dan berkas dalam repositori ini:

```text
PARADOKS-26-1/
├── BERKAS ADM/                     # Berkas Administrasi & Laporan Proyek
│   ├── Laporan-Pengerjaan-Culinary-Journey.docx    # Dokumen laporan resmi (Word)
│   ├── Laporan-Pengerjaan-Culinary-Journey.md      # Laporan proyek dalam format Markdown
│   ├── kerangka-kerja-culinary-journey.md          # Dokumen kerangka kerja (framing & requirements)
│   └── teori visualisasi.md                        # Catatan teori dan konsep visualisasi data yang digunakan
│
├── DESIGN/                         # Aset & Rancangan Desain UI/UX
│   ├── stitch_rasa_nusantara_visual_essay.zip      # Arsip kompresi seluruh aset desain
│   └── stitch_rasa_nusantara_visual_essay/         # Folder aset desain visual essay
│       ├── data_insights_dashboard/                # Desain dashboard wawasan data
│       ├── landing_page_culinary_journey/          # Desain beranda utama
│       ├── nusantara_narrative/                    # Desain alur narasi nusantara
│       └── region_exploration_yogyakarta/          # Desain halaman eksplorasi wilayah (Yogyakarta)
│
├── REFERENSI DATA/                 # Dokumen Referensi & Data Mentah Pendukung
│   ├── food-and-beverage-service-actvities-statistics-2023.pdf  # PDF statistik aktivitas F&B 2023
│   ├── statistik-penyediaan-makanan-minuman-2024.pdf            # PDF statistik penyediaan makanan/minuman 2024
│   ├── map_paradoks.json                            # Data geoJSON peta Indonesia untuk visualisasi
│   └── peta-rasa-nusantara.html                     # Prototipe peta interaktif rasa nusantara
│
└── culinary-journey/               # Aplikasi Web Utama (Frontend Web Story)
    ├── index.html                  # Halaman Utama (Landing Page & Hero Section)
    ├── insight.html                # Halaman Dashboard Analisis & Perbandingan Data Kuliner
    ├── yogyakarta.html             # Eksplorasi Kuliner Wilayah D.I. Yogyakarta
    ├── sumatera-selatan.html       # Eksplorasi Kuliner Wilayah Sumatera Selatan
    ├── nusa-tenggara-barat.html    # Eksplorasi Kuliner Wilayah Nusa Tenggara Barat
    │
    ├── assets/                     # Aset Statis Website
    │   ├── css/
    │   │   └── main.css            # Styling utama website (Desain responsivitas & visual)
    │   └── js/
    │       ├── main.js             # Logika interaktivitas umum & navigasi
    │       ├── region.js           # Logika interaktif eksplorasi kuliner wilayah
    │       └── charts.js           # Konfigurasi visualisasi grafik (Chart.js / radar chart rasa)
    │
    └── data/                       # File Data JSON untuk Dinamisasi Konten Kuliner
        ├── insight.json            # Data statistik perbandingan gizi & rasa antar wilayah
        ├── yogyakarta.json         # Data kuliner detail Yogyakarta (gizi, rasa, deskripsi)
        ├── sumatera-selatan.json   # Data kuliner detail Sumatera Selatan
        └── nusa-tenggara-barat.json # Data kuliner detail Nusa Tenggara Barat
```

---

## 🛠️ Stack Teknologi

Aplikasi web ini dibangun dengan teknologi modern, optimal, dan responsif tanpa *overhead* berlebih:

* **Markup**: HTML5 (Semantic HTML untuk struktur yang SEO-friendly)
* **Styling**: CSS3 + Bootstrap 5 (Sistem grid responsif dan variabel warna khusus tema nusantara)
* **Interaktivitas**: Vanilla JavaScript (Manipulasi DOM native untuk performa maksimal)
* **Visualisasi Grafik**: Chart.js / D3.js (Radar chart rasa 5 dimensi & bar chart gizi)
* **Scrollytelling**: Intersection Observer API (Efek transisi scroll yang mulus dan interaktif)
* **Pengolahan Data**: Python (Pandas) untuk *preprocessing* awal dataset kuliner

---

## 🌟 Fitur Utama

1. **Scrollytelling Nusantara**: Narasi interaktif yang membawa pengguna menyusuri peta kuliner seiring dengan digulirnya halaman.
2. **Eksplorasi 3 Wilayah**: Halaman detail untuk Yogyakarta, Sumatera Selatan, dan Nusa Tenggara Barat yang menampilkan hidangan ikonik lengkap dengan keterangannya.
3. **Grafik Profil Rasa 5 Dimensi**: Radar chart interaktif yang menggambarkan tingkat rasa (Manis, Gurih, Pedas, Asam, Pahit) pada hidangan detail.
4. **Analisis Komparatif Nutrisi**: Dashboard pada halaman Insight yang membandingkan kandungan kalori, lemak, protein, dan karbohidrat antardaerah.
5. **Responsivitas Penuh**: Tampilan yang dioptimalkan baik untuk perangkat seluler (*mobile*), tablet, maupun desktop.
