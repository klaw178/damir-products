const exploreBtn = document.querySelector(".explore-btn");
const intro = document.querySelector("body > section:nth-child(3)");
const banner = document.querySelector("body > section:nth-child(2)");
const galleryBtn = document.querySelector(".gallery-btn");
const cardBtns = [...document.querySelectorAll(".card-btn")];
const btns = [exploreBtn, galleryBtn].concat(cardBtns);

const btnObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__rubberBand');
        }
    });
});

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

for (let btn of btns) {
    btnObserver.observe(btn);
}