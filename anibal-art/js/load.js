const nav = document.getElementsByTagName("nav")[0];
const main = document.getElementsByTagName("main")[0];
const footer = document.getElementsByTagName("footer")[0];
const mainOpacity = [{ opacity: 0 }, { opacity: 1 }];
const mainOpacityTiming = { duration: 500, iterations: 1, fill: "forwards" };

nav.style.display = "none";
main.style.display = "none";
footer.style.display = "none";

window.onload = (e)=>{
    nav.style.removeProperty("display");
    nav.animate(mainOpacity, mainOpacityTiming);

    main.style.removeProperty("display");
    main.animate(mainOpacity, mainOpacityTiming);

    footer.style.removeProperty("display");
    footer.animate(mainOpacity, mainOpacityTiming);
}
// document.addEventListener("DOMContentLoaded", function () {
//     const lebainImage = document.querySelector("#lebain img");

//     const staticSrc = "./public/img/lebain/0_cover_lebain.jpg";
//     const gifSrc = "./public/img/lebain/resized/Lebain-GIF.gif";

//     lebainImage.addEventListener("mouseenter", function () {
//       lebainImage.src = gifSrc;
//     });

//     lebainImage.addEventListener("mouseleave", function () {
//       lebainImage.src = staticSrc;
//     });
// });