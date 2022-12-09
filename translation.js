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
    document.querySelector(".banner-cover-text p:first-child").innerText = "КОШ КЕЛИҢИЗ";
    document.querySelector(".banner-cover-text p:nth-child(2)").innerText = "ДАМИР ТОО ФЕЛЕЛИ";
    document.querySelector(".banner-cover-text p:nth-child(3)").innerText = "& БАЛЫК УРУУ КЕРЕКТЕРИ";
    document.querySelector(".explore-btn").innerText = "ИЗИЛДӨӨ";
    document.querySelector(".intro-container h2").innerText = "ДАМИР ТОО ФЕЛЕЛИ";
    document.querySelector(".intro-container h1").innerText = "КЫРГЫЗСТАН";
    document.querySelector(".intro-container p").innerText = "Биз бардык кардарларыбызга эң мыкты балык жана балык уулоо каражаттарын сунуштайбыз. Биздин балык чарбабыз Кыргызстанда жайгашкан жана дүйнөлүк стандарттагы жабдууларга ээ. Таң калыштуу жаратылыш чөйрөсү таза суунун сапатын, ошондой эле биздин өнүмдөрдүн, анын ичинде Радуга форель, көк, жолборс жана жапайы күрөң форельди кепилдейт. Биздин миссия ишенимге, ишенимдүүлүккө жана жогорку сапаттагы балыктарды коопсуз жеткирүүгө негизделген кызматтын өзгөчө деңгээлин камсыз кылуу болуп саналат.";
    document.querySelector(".gallery-btn").innerText = "ГАЛЕРИЯНЫ КӨРҮҮ";
    document.querySelector(".card-container .custom-card:first-child .card-text-container h4").innerText = "БИЗДИН ПРОДУКЦИЯЛАР";
    document.querySelector(".card-container .custom-card:first-child .card-text-container p").innerText = "Биз тоо дарыясынан жаңы форельдерди жыйнап алабыз жана табигый премиум ингредиенттерден биринчи сорттогу балык азыгын жасайбыз";
    document.querySelector(".card-container .custom-card:first-child .card-text-container .card-btn a").innerText = "КӨБҮРӨӨК БИЛҮҮ";
    document.querySelector(".card-container .custom-card:nth-child(2) .card-text-container h4").innerText = "КАНДАЙ СУРОО";
    document.querySelector(".card-container .custom-card:nth-child(2) .card-text-container p").innerText = "Эгерде сизде кандайдыр бир суроолор болсо, кайрылгыңыз келсе, байланыш формасын толтуруудан тартынбаңыз";
    document.querySelector(".card-container .custom-card:nth-child(2) .card-text-container .card-btn a").innerText = "БИЗ МЕНЕН БАЙЛАНЫШ";
    document.querySelector(".footer-container h3").innerText = "Дамир тоо форели & Балык уулоо каражаттары, Токмок, Кыргызстан";
    document.querySelector(".footer-container p").innerText = "© 2022 Дамир тоо форели .Бардык укуктар корголгон.";
}

en.addEventListener("click", toEn);
ky.addEventListener("click", toKy);

