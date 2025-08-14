# Kopi Kita Website - Tailwind CSS Setup

Website untuk bisnis kopi organik dengan Tailwind CSS CLI v3.

## 🚀 Setup Tailwind CSS

### Prerequisites
- Node.js dan npm terinstall
- Project sudah diinisialisasi dengan `npm init`

### Instalasi
Tailwind CSS CLI v3 sudah terinstall sebagai dev dependency:
```bash
npm install -D tailwindcss@^3.0.0
```

### Konfigurasi
File `tailwind.config.js` sudah dikonfigurasi dengan:
- Content paths untuk HTML files
- Custom colors sesuai brand Kopi Kita
- Custom font families (Playfair Display & Lora)

### File Structure
```
02_Website/
├── src/
│   └── input.css          # Input CSS dengan Tailwind directives
├── dist/
│   └── output.css         # Generated CSS output
├── index.html             # Original file dengan CDN
├── index-tailwind.html    # File dengan Tailwind CLI build
├── tailwind.config.js     # Konfigurasi Tailwind
└── package.json           # NPM scripts
```

## 🛠️ NPM Scripts

### Development (Watch Mode)
```bash
npm run dev
```
Menjalankan Tailwind dalam watch mode - otomatis rebuild saat ada perubahan.

### Build Production
```bash
npm run build
```
Build CSS untuk production (tanpa watch mode).

### Build dengan Watch
```bash
npm run build-css
```
Sama dengan `npm run dev` - build dengan watch mode.

## 🎨 Custom Configuration

### Colors
- **Primary**: `#5D4037` (Brown)
- **Secondary**: `#8BC34A` (Green)
- **Neutral Background**: `#FFF8F0`
- **Neutral Card**: `#F5F5F5`
- **Text Dark**: `#212121`
- **Text Light**: `#757575`

### Fonts
- **Heading**: Playfair Display (serif)
- **Body**: Lora (serif)

### Custom Components
File `src/input.css` sudah include custom components:
- `.btn-primary` - Button utama
- `.btn-secondary` - Button sekunder
- `.card` - Card component
- `.section-padding` - Padding konsisten untuk section

## 📝 Usage

### Development Workflow
1. Edit HTML files atau `src/input.css`
2. Jalankan `npm run dev` untuk watch mode
3. File `dist/output.css` akan otomatis ter-update
4. Refresh browser untuk melihat perubahan

### Production Build
1. Jalankan `npm run build`
2. File `dist/output.css` akan di-generate untuk production
3. Upload semua files termasuk folder `dist/`

## 🔄 Migration dari CDN

### Before (CDN)
```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    // config here
  }
</script>
```

### After (CLI)
```html
<link rel="stylesheet" href="./dist/output.css">
```

## 📁 Files

- `index.html` - Original dengan Tailwind CDN
- `index-tailwind.html` - Menggunakan Tailwind CLI build
- Kedua file bisa digunakan, tapi untuk production disarankan menggunakan CLI build

## 🚀 Deployment

Untuk deployment, pastikan:
1. Jalankan `npm run build` sebelum upload
2. Upload folder `dist/` beserta file `output.css`
3. Gunakan `index-tailwind.html` atau update `index.html` untuk menggunakan `./dist/output.css`

## 📦 Dependencies

- **tailwindcss**: ^3.4.17 (dev dependency)

## 🔧 Troubleshooting

### CSS tidak ter-update
- Pastikan `npm run dev` berjalan
- Check console untuk error
- Pastikan path di `tailwind.config.js` benar

### File tidak ditemukan
- Pastikan struktur folder sesuai
- Check path relatif di HTML

### Custom styles tidak muncul
- Pastikan custom CSS ada di `src/input.css`
- Rebuild dengan `npm run build`
