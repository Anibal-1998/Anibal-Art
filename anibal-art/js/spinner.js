const spinner = document.getElementById("spinner");
const nav = document.getElementsByTagName("nav")[0];
const main = document.getElementsByTagName("main")[0];
const footer = document.getElementsByTagName("footer")[0];
const mainOpacity = [{ opacity: 0 }, { opacity: 1 }];
const mainOpacityTiming = { duration: 500, iterations: 1, fill: "forwards" };

main.style.display = "none";
footer.style.display = "none";

addEventListener("load", () =>{

    main.style.removeProperty("display");
    main.animate(mainOpacity, mainOpacityTiming);
    footer.style.removeProperty("display");
    footer.animate(mainOpacity, mainOpacityTiming);
    setTimeout(() => {
        spinner.style.opacity = 0;
    }, 20);
    setTimeout(() => {
        spinner.style.display = "none";
    }, 500);

})