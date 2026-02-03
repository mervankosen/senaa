// GIF'leri eşit dağıt
const backgroundGifs = document.getElementById('backgroundGifs');
const gifPath = 'gif2/excited-cat.gif';

// Grid sistemi ile eşit dağılım
// 414x896 çözünürlük için optimize edilmiş grid
// Genişlik 414px, yükseklik 896px
const cols = 5; // 5 sütun (414px / 5 ≈ 83px per hücre)
const rows = 10; // 10 satır (896px / 10 ≈ 90px per hücre)
const totalCells = cols * rows; // 50 GIF

// Her hücre için bir GIF oluştur
for (let i = 0; i < totalCells; i++) {
    const gif = document.createElement('img');
    gif.src = gifPath;
    gif.className = 'bg-gif';
    gif.alt = '';
    
    // Grid pozisyonu hesapla
    const col = i % cols;
    const row = Math.floor(i / cols);
    
    // Her hücrenin merkez pozisyonu
    const cellWidth = 100 / cols;
    const cellHeight = 100 / rows;
    
    // Hücre içinde biraz rastgelelik ekle (merkez etrafında ±10%)
    const offsetX = (Math.random() - 0.5) * (cellWidth * 0.2);
    const offsetY = (Math.random() - 0.5) * (cellHeight * 0.2);
    
    const x = (col * cellWidth) + (cellWidth / 2) + offsetX;
    const y = (row * cellHeight) + (cellHeight / 2) + offsetY;
    
    // Rastgele boyut (120px - 200px arası)
    const randomSize = 120 + Math.random() * 80;
    
    // Rastgele animasyon süresi (6s - 12s arası)
    const randomDuration = 6 + Math.random() * 6;
    const randomDelay = Math.random() * 2;
    
    // Rastgele başlangıç rotasyonu (-15deg ile +15deg arası)
    const randomRotation = (Math.random() - 0.5) * 30;
    
    gif.style.left = x + '%';
    gif.style.top = y + '%';
    gif.style.width = randomSize + 'px';
    gif.style.animationDuration = randomDuration + 's';
    gif.style.animationDelay = randomDelay + 's';
    gif.style.setProperty('--rotation', randomRotation + 'deg');
    
    backgroundGifs.appendChild(gif);
}
