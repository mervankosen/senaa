const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const responseMessage = document.getElementById('responseMessage');
const buttonsContainer = document.querySelector('.buttons-container');

// GIF'leri rastgele dağıt
const backgroundGifs = document.getElementById('backgroundGifs');
const gifSources = [
    'gifs/ballsdex-ballsdexkot.gif',
    'gifs/cat (1).gif',
    'gifs/cat (2).gif',
    'gifs/cat-tiktok.gif',
    'gifs/cat.gif',
    'gifs/cmon-cat.gif',
    'gifs/dil-atan-kedi.gif',
    'gifs/haleys-ouo.gif',
    'gifs/oui-oui-yeah.gif',
    'gifs/popcat.gif',
    'gifs/uwu-rizzchu.gif'
];

// Her GIF'i 3-4 kez kullanarak toplam 35-40 GIF oluştur
const totalGifs = 35;

for (let i = 0; i < totalGifs; i++) {
    const gif = document.createElement('img');
    // Rastgele bir GIF seç
    const randomGif = gifSources[Math.floor(Math.random() * gifSources.length)];
    gif.src = randomGif;
    gif.className = 'bg-gif';
    gif.alt = '';
    
    // Rastgele pozisyon (ekranın her yerine)
    const randomX = Math.random() * 100; // 0-100%
    const randomY = Math.random() * 100; // 0-100%
    
    // Rastgele boyut (50px - 90px arası)
    const randomSize = 50 + Math.random() * 40;
    
    // Rastgele animasyon süresi (6s - 12s arası)
    const randomDuration = 6 + Math.random() * 6;
    const randomDelay = Math.random() * 3;
    
    // Rastgele rotasyon (-15deg ile +15deg arası)
    const randomRotation = (Math.random() - 0.5) * 30;
    
    gif.style.left = randomX + '%';
    gif.style.top = randomY + '%';
    gif.style.width = randomSize + 'px';
    gif.style.animationDuration = randomDuration + 's';
    gif.style.animationDelay = randomDelay + 's';
    gif.style.setProperty('--rotation', randomRotation + 'deg');
    gif.style.transition = 'all 3s ease-in-out';
    
    backgroundGifs.appendChild(gif);
    
    // Her GIF'in sürekli rastgele gezmesi için
    function moveGifRandomly() {
        const newX = Math.random() * 100; // 0-100%
        const newY = Math.random() * 100; // 0-100%
        const newRotation = (Math.random() - 0.5) * 30;
        
        gif.style.left = newX + '%';
        gif.style.top = newY + '%';
        gif.style.setProperty('--rotation', newRotation + 'deg');
    }
    
    // Her GIF için rastgele süre (3-6 saniye arası)
    const moveInterval = 3000 + Math.random() * 3000;
    setInterval(moveGifRandomly, moveInterval);
}

// Hayır butonuna tıklandığında veya dokunulduğunda rastgele pozisyon değiştir
noBtn.addEventListener('click', function(e) {
    e.preventDefault();
    moveNoButton();
});

// Telefon için touch event
noBtn.addEventListener('touchstart', function(e) {
    e.preventDefault();
    moveNoButton();
});

// Hayır butonuna yaklaşıldığında da kaç (mouse için)
noBtn.addEventListener('mouseenter', function() {
    moveNoButton();
});

function moveNoButton() {
    const buttonRect = noBtn.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Ekranın herhangi bir yerine rastgele pozisyon hesapla
    const maxX = windowWidth - buttonRect.width - 20;
    const maxY = windowHeight - buttonRect.height - 20;
    
    const randomX = Math.random() * Math.max(0, maxX) + 10;
    const randomY = Math.random() * Math.max(0, maxY) + 10;
    
    // Butonu fixed pozisyona al ve rastgele yere taşı
    noBtn.classList.add('absolute');
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.transition = 'all 0.3s ease';
    noBtn.style.zIndex = '1000';
}

// Evet butonuna tıklandığında veya dokunulduğunda
yesBtn.addEventListener('click', function() {
    showResponse();
});

// Telefon için touch event
yesBtn.addEventListener('touchstart', function(e) {
    e.preventDefault();
    showResponse();
});

function showResponse() {
    // Yeni sayfaya yönlendir
    window.location.href = 'success.html';
}