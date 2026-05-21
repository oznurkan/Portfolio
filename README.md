# Portfolio

[English](#english) | [Türkçe](#türkçe)

---

## English

A high-performance, single-page professional portfolio application built with modern web technologies. This project showcases my software engineering journey, technical skills, and production-ready architecture patterns.

### 🌟 Key Features
*   **Single-Page Architecture:** Streamlined UX with a single static URL (`/oznurkan`) preventing unnecessary DOM re-renders and keeping layout clean.
*   **Global State Management:** Redux architecture utilized for handling asynchronous actions, remote resource tracking, and global data synchronization.
*   **Localization (i18n):** Context API-powered dynamic language switching (EN/TR) without requiring page reloads.
*   **Clean API Layer:** Network communication layer handled via Axios, equipped with Thunk middleware interceptor logic to prevent redundant request race-conditions.
*   **Modern UI & Toast Notifications:** Polished user interface utilizing utility-first styling frameworks alongside descriptive, real-time user action notifications via `React-Toastify`.

### 🛠️ Tech Stack
*   **Frontend Core:** React 19, JavaScript (ES6+)
*   **State Management:** Redux (Vanilla Thunk Architecture), React Context API
*   **Data Fetching & API:** Axios, Static JSON Hydration & External REST API Integration
*   **Styling & UI:** Tailwind CSS, React-Toastify

---

## Türkçe

Modern web teknolojileri ile geliştirilmiş, yüksek performanslı ve tek sayfadan oluşan profesyonel portfolyo uygulaması. Bu proje; yazılım mühendisliği yolculuğumu, teknik yetkinliklerimi ve üretime hazır mimari kalıpları sergilemektedir.

### 🌟 Öne Çıkan Özellikler
*   **Tek Sayfa Mimarisi:** Gereksiz DOM re-render süreçlerini engelleyen ve düzeni temiz tutan tek bir statik URL (`/oznurkan`) ile akıcı kullanıcı deneyimi (UX).
*   **Küresel Durum Yönetimi:** Asenkron aksiyonların yönetimi, uzak kaynak takibi ve küresel veri senkronizasyonu için Redux mimarisi kullanılmıştır.
*   **Çoklu Dil Desteği (i18n):** Sayfa yenilemeye gerek kalmadan Context API destekli dinamik dil geçişi (EN/TR).
*   **Temiz API Katmanı:** Axios ile yönetilen ağ iletişim katmanı, mükerrer istek yarış durumlarını (race-conditions) engellemek adına Thunk ara yazılımı (middleware) kontrol mekanizmasıyla güçlendirilmiştir.
*   **Modern Arayüz ve Bildirimler:** Hızlı ve esnek tasarım araçları ile zenginleştirilmiş kullanıcı arayüzü ve `React-Toastify` ile gerçek zamanlı kullanıcı işlem geri bildirimleri.

### 🛠️ Kullanılan Teknolojiler
*   **Ana Cephe (Frontend):** React 19, JavaScript (ES6+)
*   **Durum Yönetimi:** Redux (Thunk Mimarisi), React Context API
*   **Veri Çekme & API:** Axios, Statik Veri Yönetimi (Local JSON) ve Dış REST API Entegrasyonu
*   **Tasarım & UI:** Tailwind CSS, React-Toastify

---

## 🚀 Getting Started / Başlangıç

### Prerequisites / Gereksinimler
*   Node.js 
*   npm or yarn

### Installation / Kurulum

1. Clone the repository / Repoyu klonlayın:
   ```bash
   git clone https://github.com/oznurkan/Portfolio.git
   cd portfolio
2. Install dependencies / Bağımlılıkları yükleyin:
   ```bash
   npm install
3. Start the local development server / Yerel sunucuyu başlatın:
   ```bash
   npm run dev
4. Build for production / Canlı ortam çıktısı almak için:
   ```bash
   npm run build