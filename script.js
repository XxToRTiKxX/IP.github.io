// Ваш JavaScript код для сайта здесь

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
        scrollToTopBtn.classList.add("show"); // добавляем класс для анимации выезда
    } else {
        scrollToTopBtn.classList.remove("show"); // убираем класс для анимации выезда
        scrollToTopBtn.classList.add("hide"); // добавляем класс для анимации уезда
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Добавляем обработчик события transitionend
document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    scrollToTopBtn.addEventListener("click", function() {
        scrollToTop();
    });

    scrollToTopBtn.addEventListener("transitionend", function(event) {
        // После завершения анимации уезда
        if (event.propertyName === "right" && scrollToTopBtn.classList.contains("hide")) {
            scrollToTopBtn.style.right = "-50px"; // возвращаем кнопку вправо
        }
    });
});
