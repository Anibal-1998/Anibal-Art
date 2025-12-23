// document.addEventListener('DOMContentLoaded', function () {
//     const filterLinks = document.querySelectorAll('.filter-links a');
//     const items = document.querySelectorAll('.galleryelement');

//     filterLinks.forEach(link => {
//         link.addEventListener('click', (e) => {
//             e.preventDefault(); // que no recargue la página

//             const filter = link.getAttribute('data-filter');

//             // estado activo visual
//             filterLinks.forEach(l => l.classList.remove('active'));
//             link.classList.add('active');

//             // mostrar / ocultar proyectos
//             items.forEach(item => {
//                 const categories = (item.getAttribute('data-category') || '').split(' ');

//                 if (filter === 'all' || categories.includes(filter)) {
//                     item.style.display = '';
//                 } else {
//                     item.style.display = 'none';
//                 }
//             });
//         });
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.galleryelement');
    const allFilterLinks = document.querySelectorAll('a[data-filter]');

    allFilterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const filter = link.getAttribute('data-filter');

            allFilterLinks.forEach(l => {
                console.log(l)
                l.classList.remove('active');
                if (l.getAttribute('data-filter') === filter) {
                    l.classList.add('active');
                }
            });

            items.forEach(item => {
                const categories = (item.getAttribute('data-category') || '').split(' ');

                if (filter === 'all' || categories.includes(filter)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});