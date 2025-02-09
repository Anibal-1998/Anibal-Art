const nav = document.getElementsByTagName("nav")[0];
const main = document.getElementsByTagName("main")[0];
const footer = document.getElementsByTagName("footer")[0];
const mainOpacity = [{ opacity: 0 }, { opacity: 1 }];
const mainOpacityTiming = { duration: 500, iterations: 1, fill: "forwards" };

nav.style.display = "none";
main.style.display = "none";
footer.style.display = "none";

// addEventListener("load", () =>{
//     nav.style.removeProperty("display");
//     nav.animate(mainOpacity, mainOpacityTiming);

//     main.style.removeProperty("display");
//     main.animate(mainOpacity, mainOpacityTiming);

//     footer.style.removeProperty("display");
//     footer.animate(mainOpacity, mainOpacityTiming);
// })

window.onload = (e)=>{
    nav.style.removeProperty("display");
    nav.animate(mainOpacity, mainOpacityTiming);

    main.style.removeProperty("display");
    main.animate(mainOpacity, mainOpacityTiming);

    footer.style.removeProperty("display");
    footer.animate(mainOpacity, mainOpacityTiming);
}