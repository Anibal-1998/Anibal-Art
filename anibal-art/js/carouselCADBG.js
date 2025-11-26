const thumbs = document.querySelectorAll(".carrousel-thumb");
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let images = [];
let currentIndex = 0;

// Cada imagen puede tener su propio set de fotos
// thumbs.forEach((thumb) => {
//     thumb.addEventListener("click", () => {

//         const folder = thumb.dataset.folder;
//         const files = JSON.parse(thumb.dataset.files);

//         images = files.map(file => `${folder}/${file}`);
//         currentIndex = 0;

//         modal.style.display = "flex";
//         modalImage.src = images[currentIndex];
//     });
// });
thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {

        const folder = thumb.dataset.folder;
        const files = JSON.parse(thumb.dataset.files);

        images = files.map(file => `${folder}/${file}`);
        currentIndex = 0;

        // Texto del título
        document.getElementById("modalTitle").textContent = thumb.dataset.title || "";

        modal.style.display = "flex";
        modalImage.src = images[currentIndex];
    });
});

// Cerrar modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Imagen anterior
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImage.src = images[currentIndex];
});

// Imagen siguiente
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    modalImage.src = images[currentIndex];
});

// Cerrar clickeando afuera
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

