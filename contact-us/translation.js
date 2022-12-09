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
    document.querySelector(".banner-cover h1").innerText = "БАЙЛАНЫШ";
    document.querySelector(".banner-cover h2").innerText = "ДАМИР ТОО ФЕЛЕЛИ";
    document.querySelector(".contact-container h2").innerText = "Биздин байланыш";
    document.querySelector(".contact-container p:nth-child(2)").innerHTML = "Уильям<br>Дамир тоо форели жана балык уулоо каражаттары<br>Токмок<br>Кыргызстан";
    document.querySelector(".contact-container p:nth-child(3)").innerText = "Телефон: +996 312 133453";
    document.querySelector("#contact-form h2").innerText = "Байланышыңыз";
    document.getElementsByName("email")[0].placeholder = "Электрондук почта дареги";
    document.getElementsByName("full_name")[0].placeholder = "Толук аты";
    document.getElementsByName("company_name")[0].placeholder = "Компаниянын аталышы";
    document.getElementsByName("message")[0].placeholder = "Сиздин суроо";
    document.querySelector("#contact-form button div").innerText = "Жөнөтүү";
    document.querySelector(".info-block h2").innerText = "Бизди кантип тапса болот"
    document.querySelector(".info-block p").innerText = "Айдоо M41 .Дарыянын жээгиндеги бөлүгү 90км/саат. Көбүнчө ошол жерде. Абайлагыла, пейзаж кооз жана алагды болуу оңой. Бирок жолдун бул бөлүгү чоң, жакшы сакталган жана абдан коопсуз. Бир нече унаа токтотуучу жайлар бар, андыктан кабардар болуңуз.";
    document.querySelector(".footer-container h3").innerText = "Дамир тоо форели & Балык уулоо каражаттары, Токмок, Кыргызстан";
    document.querySelector(".footer-container p").innerText = "© 2022 Дамир тоо форели .Бардык укуктар корголгон.";
}

en.addEventListener("click", toEn);
ky.addEventListener("click", toKy);