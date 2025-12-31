// const thumbs = document.querySelectorAll(".carrousel-thumb");
// const modal = document.getElementById('modal');
// const modalImage = document.getElementById('modalImage');
// const closeBtn = document.getElementById('close');
// const prevBtn = document.getElementById('prev');
// const nextBtn = document.getElementById('next');

// let images = [];
// let currentIndex = 0;

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
// thumbs.forEach((thumb) => {
//     thumb.addEventListener("click", () => {

//         const folder = thumb.dataset.folder;
//         const files = JSON.parse(thumb.dataset.files);

//         images = files.map(file => `${folder}/${file}`);
//         currentIndex = 0;

//         // Texto del título
//         document.getElementById("modalTitle").textContent = thumb.dataset.title || "";

//         modal.style.display = "flex";
//         modalImage.src = images[currentIndex];
//     });
// });

// // Cerrar modal
// closeBtn.addEventListener("click", () => {
//     modal.style.display = "none";
// });

// // Imagen anterior
// prevBtn.addEventListener("click", () => {
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     modalImage.src = images[currentIndex];
// });

// // Imagen siguiente
// nextBtn.addEventListener("click", () => {
//     currentIndex = (currentIndex + 1) % images.length;
//     modalImage.src = images[currentIndex];
// });

// // Cerrar clickeando afuera
// modal.addEventListener("click", (e) => {
//     if (e.target === modal) {
//         modal.style.display = "none";
//     }
// });

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const downloadLink = document.getElementById("download");

let currentIndex = 0;

const allImages = [];
const imageInfo = []; 

document.querySelectorAll(".carrousel-thumb").forEach(img => {
    const folder = img.dataset.folder;
    const files = JSON.parse(img.dataset.files);
    console.log(files)
    files.forEach(file => {
        allImages.push(`${folder}/${file}`);
        imageInfo.push(img.dataset.title || "");
    });
});

document.querySelectorAll(".carrousel-thumb").forEach(img => {
    img.addEventListener("click", e => {
        const folder = img.dataset.folder;
        const files = JSON.parse(img.dataset.files);

        currentIndex = allImages.indexOf(`${folder}/${files[0]}`);

        modalImage.src = allImages[currentIndex];
        modalTitle.textContent = imageInfo[currentIndex] || "";
        modal.style.display = "flex";   
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        // intento de link de descarga
        if (downloadLink) {
            downloadLink.href = modalImage.src;
            try { downloadLink.download = modalImage.src.split('/').pop(); } catch(e){}
        }
    });
});

document.getElementById("next").onclick = () => {
    currentIndex = (currentIndex + 1) % allImages.length;
    modalImage.src = allImages[currentIndex];
    modalTitle.textContent = imageInfo[currentIndex];
    if (downloadLink) {
        downloadLink.href = modalImage.src;
        try { downloadLink.download = modalImage.src.split('/').pop(); } catch(e){}
    }
};

document.getElementById("prev").onclick = () => {
    currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    modalImage.src = allImages[currentIndex];
    modalTitle.textContent = imageInfo[currentIndex];
    if (downloadLink) {
        downloadLink.href = modalImage.src;
        try { downloadLink.download = modalImage.src.split('/').pop(); } catch(e){}
    }
};

function closeModal(){
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
    modal.style.display = "none";
}

document.getElementById("close").onclick = closeModal;

// cerrar clicando fuera de la imagen (overlay)
if (modal) {
    modal.addEventListener('click', function(e){
        // si el target es exactamente el overlay (modal) y no los controles o la imagen
        if (e.target === modal) closeModal();
    });
}