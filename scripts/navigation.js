
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-toggle");
    const navList = document.querySelector("#main-nav ul");

    menuButton.addEventListener("click", function () {
        if (navList.classList.contains("hide-menu")) {
            navList.classList.remove("hide-menu");
            navList.classList.add("show-menu");
            menuButton.textContent = "X";
            }else{
                navList.classList.remove("show-menu");
                navList.classList.add("hide-menu");
                menuButton.textContent = "☰";
            }
    });
});