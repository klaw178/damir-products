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
    document.querySelector(".banner-cover h1").innerText = "ЖӨНҮНДӨ";
    document.querySelector(".description-container p:first-child").innerText = "2022-жылы түзүлгөн, биз жүз миңдеген форель өстүрүүчү чарбабыз. форель бир жыл. Бул жерде биз эмне кылабыз, аны кантип жасайбыз жана бизди эмне кыла тургандыгы жөнүндө бир аз маалымат башка Форель чарбаларынан башка.";
    document.querySelector(".description-container p:nth-child(2)").innerText = "Балык чарбасы Нарындын борбордук бөлүгүндөгү эң маанилүү дарыялардын бири болгон Нарында жайгашкан Азия. Нарын дарыясы саякаты Кыргызстандын Тянь-Шань тоолорунан башталат. In Фергана өрөөнү, Кара-Дарыя Нарынга куят, Сырдарыядан башталат, Борбордук Азиянын негизги суу жолдорунун бири."
    document.querySelector(".description-container p:nth-child(3)").innerText = "Нарын дарыясынын тунук, кычкылтектүү булактары эң сонун шарттарды түзөт форель өстүрүү. Биз алдын алуу үчүн балыктын тыгыздыгын атайылап төмөн кармайбыз ашыкча толтуруу жана табигый кенири, минералдарга бай чөйрөнү жайылтуу. Биз анда биздин транспорт форель балыктары кычкылтектүү резервуарларда эч качан ашыкча толуп кетпейт, ошондуктан алар эң сонун абалда келишет."
    document.querySelector("body > section:nth-child(3) > div > div:nth-child(2) > div > div:nth-child(1) > h2").innerText = "Форель";
    document.querySelector("body > section:nth-child(3) > div > div:nth-child(2) > div > div:nth-child(1) > p").innerText = "Биз форельдин үч түрүн чыгарабыз – Браун, Көк жана Радуга – аларды балык чарбаларына, балык чарбаларына, балык кармоо клубдарына сатабыз; жана жеке көлдөр, суу сактагычтар жана өлкө боюнча дарыялар. Биз ошондой эле Котсволдсдогу бир катар пабдарды жана ресторандарды камсыздайбыз, жергиликтүү фермерлердин базарларына барабыз жана жай мезгилинде абдан популярдуу болгон балык чарбабыз бар. Биздин кардарлар биздин форельди жашоо циклинин ар кандай этаптарында – жумуртка, кууруу (бал балык) же толук өстүрүлгөн балык катары сатып ала алышат. Биздин балыктардын баары “үйдө” өндүрүлөт – фермадагы жумурткадан өзүбүздүн асыл тукум малды колдонуу менен өстүрүлөт. Бул бизге алардын жашоосунун ар бир этабында алардын ден соолугун жана жыргалчылыгын толук көзөмөлдөөгө мүмкүндүк берет.";
    document.querySelector("body > section:nth-child(3) > div > div:nth-child(2) > div > div:nth-child(2) > h2").innerText = "Балык уулоо каражаттары";
    document.querySelector("body > section:nth-child(3) > div > div:nth-child(2) > div > div:nth-child(2) > p").innerText = "Биздин балык азыгы туруктуу булактан алынат жана форельди оптималдуу диета менен камсыз кылуу үчүн эң сонун тең салмактуу. Ал сонун кызгылт түс менен сонун даамдуу этти чыгарат. Биздин булак сууларынын тазалыгы топурактан арылтып, анын назик даамын арттырат. Биздин балык азыгы балык чарбасын өнүктүрүү үчүн ишенимдүү тандоо болуп саналат жана суунун сапатына эч кандай зыян келтирбестен, запастардын ишенимдүү прогрессиясын камсыз кылат. Биз дүйнө жүзү боюнча балык чарбаларына жапырт жеткирип жатабыз.";
    document.querySelector(".footer-container h3").innerText = "Дамир тоо форели & Балык уулоо каражаттары, Токмок, Кыргызстан";
    document.querySelector(".footer-container p").innerText = "© 2022 Дамир тоо форели .Бардык укуктар корголгон.";
}

en.addEventListener("click", toEn);
ky.addEventListener("click", toKy);