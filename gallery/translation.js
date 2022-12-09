let lng = localStorage.getItem("lng");
if (!lng) {
    localStorage.setItem("lng", "en");
}
window.addEventListener("load", (event) => {
    console.log(lng);
    if (lng == "ky") {
        toKy();
    }
});

const en = document.querySelector(".lang-opt > div:first-child");
const ky = document.querySelector(".lang-opt > div:nth-child(2)");



function toEn() {
    localStorage.setItem("lng", "en");
    window.location.reload();
}

function toKy() {
    localStorage.setItem("lng", "ky");
    document.querySelector(".nav-bar-container a:first-child li").innerText = "ҮЙ";
    document.querySelector(".nav-bar-container a:nth-child(2) li").innerText = "БИЗ ЖӨНҮНДӨ";
    document.querySelector(".nav-bar-container a:nth-child(3) li").innerText = "ГАЛЕРИЯ";
    document.querySelector(".nav-bar-container a:nth-child(4) li").innerText = "БИЗ МЕНЕН БАЙЛАНЫШ";
    document.querySelector(".sub-menu a:first-child li").innerText = "ҮЙ";
    document.querySelector(".sub-menu a:nth-child(2) li").innerText = "БИЗ ЖӨНҮНДӨ";
    document.querySelector(".sub-menu a:nth-child(3) li").innerText = "ГАЛЕРИЯ";
    document.querySelector(".sub-menu a:nth-child(4) li").innerText = "БИЗ МЕНЕН БАЙЛАНЫШ";
    document.querySelector(".banner-cover h1").innerText = "ГАЛЕРИЯ";
    document.querySelector(".banner-cover h2").innerText = "ДАМИР ТОО ФЕЛЕЛИ";
    document.querySelector(".footer-container h3").innerText = "Дамир тоо форели & Балык уулоо каражаттары, Токмок, Кыргызстан";
    document.querySelector(".footer-container p").innerText = "© 2022 Дамир тоо форели .Бардык укуктар корголгон.";
}

en.addEventListener("click", toEn);
ky.addEventListener("click", toKy);