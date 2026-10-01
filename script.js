const startButton = document.querySelector("#start-button");
const memoriesButton = document.querySelector("#memories-button");
const aboutButton = document.querySelector("#about-button");
const wordsButton = document.querySelector("#words-button");
const finalButton = document.querySelector("#final-button");

const message = document.querySelector("#message");
const memories = document.querySelector("#memories");
const aboutMom = document.querySelector("#about-mom");
const words = document.querySelector("#words");
const finalSection = document.querySelector("#final");

const cards = document.querySelectorAll(".memory-card");

// =========================
// الموسيقى الخلفية 🎵
// =========================

const backgroundMusic = document.querySelector("#background-music");


// =========================
// دالة الـ Scroll
// =========================

function goTo(element) {

    setTimeout(function () {

        element.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 300);

}


// =========================
// زر ابدأ الحكاية
// =========================

startButton.addEventListener("click", function () {

    // تشغيل الموسيقى
    backgroundMusic.play();

    message.classList.add("show");

    memoriesButton.style.display = "block";

    startButton.style.display = "none";

    // انزل للرسالة
    goTo(message);

});


// =========================
// زر الذكريات
// =========================

memoriesButton.addEventListener("click", function () {

    memoriesButton.style.display = "none";

    memories.style.display = "block";

    // إظهار الصورة الأولى
    cards[0].classList.add("show");

    // انزل لبداية الذكريات
    goTo(memories);


    // =========================
    // الصورة الثانية
    // =========================

    setTimeout(function () {

        cards[1].classList.add("show");

        // انزل للصورة الثانية
        goTo(cards[1]);

    }, 2000);


    // =========================
    // الصورة الثالثة
    // =========================

    setTimeout(function () {

        cards[2].classList.add("show");

        aboutButton.style.display = "block";

        // انزل للصورة الثالثة
        goTo(cards[2]);

    }, 4000);

});


// =========================
// زر أمي بالنسبة لي
// =========================

aboutButton.addEventListener("click", function () {

    aboutButton.style.display = "none";

    aboutMom.classList.add("show");

    wordsButton.style.display = "block";

    // انزل لقسم أمي
    goTo(aboutMom);

});


// =========================
// زر الكلمة الأخيرة
// =========================

wordsButton.addEventListener("click", function () {

    wordsButton.style.display = "none";

    words.classList.add("show");

    finalButton.classList.add("show");

    // انزل لقسم الكلمات
    goTo(words);

});


// =========================
// زر النهاية
// =========================

finalButton.addEventListener("click", function () {

    finalButton.style.display = "none";

    finalSection.classList.add("show");

    // انزل للنهاية
    goTo(finalSection);

});