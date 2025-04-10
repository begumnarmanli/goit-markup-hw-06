document.addEventListener("DOMContentLoaded", function () {
    const orderServiceButton = document.querySelector(".order-service-button");
    const modal = document.getElementById("modal");
    const closeModalButton = document.getElementById("closeModal");

    // Modal'ı gizleme (başlangıçta)
    modal.style.display = "none";

    // Modal'ı açma fonksiyonu
    orderServiceButton.addEventListener("click", function () {
        modal.style.display = "flex"; // Butona tıklandığında modal açılır
    });

    // Modal'ı kapama fonksiyonu
    closeModalButton.addEventListener("click", function () {
        modal.style.display = "none"; // Modal kapanır
    });

    // Modal dışına tıklayınca kapama fonksiyonu
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Modal dışına tıklanınca modal kapanır
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menü butonunu ve menüyü seç
    const menuButton = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.menu-container');
    const closeMenuBtn = document.querySelector('.menu-close'); // Kapatma butonunu seç

    // Menü açma/kapama fonksiyonu
    function toggleMenu() {
        const isMenuOpen = mobileMenu.classList.contains('is-open');
        mobileMenu.classList.toggle('is-open');
        menuButton.setAttribute('aria-expanded', !isMenuOpen);
    }

    // Menü butonuna tıklama eventi ekle
    menuButton.addEventListener('click', toggleMenu);

    // Kapatma butonuna tıklama eventi ekle
    closeMenuBtn.addEventListener('click', function () {
        mobileMenu.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', false);
    });

    // Ekran genişliği değiştiğinde menüyü kapat
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            mobileMenu.classList.remove('is-open');
            menuButton.setAttribute('aria-expanded', false);
        }
    });
});