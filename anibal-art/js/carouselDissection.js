const gallery = document.querySelectorAll('img');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentIndex = 0;

gallery.forEach((img, index) => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImage.src = img.src;
        currentIndex = index;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
    modalImage.src = gallery[currentIndex].src;
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % gallery.length;
    modalImage.src = gallery[currentIndex].src;
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});