const sliderContainer = document.querySelector('.slider-container');
const images = sliderContainer.getElementsByTagName('img');
let currentIndex = 0;
let interval;

function showImage(index) {
    if (index < 0) {
        currentIndex = images.length - 1;
    } else if (index >= images.length) {
        currentIndex = 0;
    }

    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('active');
    }

    images[currentIndex].classList.add('active');
}

function nextImage() {
    currentIndex++;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex--;
    showImage(currentIndex);
}

function startSlider() {
    interval = setInterval(nextImage, 4000); // Cambia de imagen cada 4 segundos
}

function stopSlider() {
    clearInterval(interval);
}

showImage(currentIndex);

sliderContainer.addEventListener('click', () => {
    nextImage();
});

startSlider(); // Inicia el slider automáticamente

// Pausa el slider cuando el cursor está sobre el contenedor
sliderContainer.addEventListener('mouseover', () => {
    stopSlider();
});

// Reinicia el slider cuando el cursor sale del contenedor
sliderContainer.addEventListener('mouseout', () => {
    startSlider();
});