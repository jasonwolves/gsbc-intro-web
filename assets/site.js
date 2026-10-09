// Shared navigation behavior for every page.
document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector(".site-header");
    var menuToggle = document.querySelector(".menu-toggle");
    var dropdown = document.querySelector(".dropdown");
    var dropdownToggle = document.querySelector(".dropdown-toggle");

    // ☰ button opens/closes the menu on phones
    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            var open = header.classList.toggle("nav-open");
            menuToggle.setAttribute("aria-expanded", open);
        });
    }

    // "Watch the Cartoon" language menu
    if (dropdownToggle) {
        dropdownToggle.addEventListener("click", function (e) {
            e.stopPropagation();
            var open = dropdown.classList.toggle("open");
            dropdownToggle.setAttribute("aria-expanded", open);
        });
    }

    // Close the language menu when clicking anywhere else or pressing Escape
    document.addEventListener("click", function (e) {
        if (dropdown && !dropdown.contains(e.target)) {
            dropdown.classList.remove("open");
            dropdownToggle.setAttribute("aria-expanded", false);
        }
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && dropdown) {
            dropdown.classList.remove("open");
            dropdownToggle.setAttribute("aria-expanded", false);
        }
    });

    // Keep the footer year current
    var year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }
});
