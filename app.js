const html = document.querySelector("html");
const navi = document.querySelector(".navigation");

document.addEventListener("scroll" , () => {
    let scrollPosition = html.scrollTop
    console.log(scrollPosition);
    if (scrollPosition > 99) {
        navi.style.backgroundColor = " rgb(15, 15, 15,0.8)";
    } else {
        navi.style.backgroundColor = "transparent";
    }
})