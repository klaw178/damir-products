const exploreBtn = document.querySelector(".explore-btn");
const intro = document.querySelector("body > section:nth-child(3)");
const banner = document.querySelector("body > section:nth-child(2)");

function scrollToIntro() {
    window.scrollTo({
        top: intro.offsetTop,
        behavior: "smooth"
    });
}

function scrollAtLoad() {
    setTimeout(function () {
        window.scrollTo({
            top: banner.offsetTop,
            behavior: "smooth"
        });
    }, 100);
};

exploreBtn.addEventListener("click", scrollToIntro);
scrollAtLoad();