const menuBtn = document.querySelector(".top-bar-left-menu") as HTMLButtonElement;
const dropdown = document.querySelector(".dropdown") as HTMLDivElement;
const menuBtnIcon = menuBtn.querySelectorAll("svg circle") as any;
menuBtn.addEventListener("click", function () {
    if (getComputedStyle(dropdown).display === "none") {
        dropdown.style.display = "block";
        menuBtnIcon[0].style.fill = "black";
        menuBtnIcon[1].style.fill = "black";
        menuBtnIcon[2].style.fill = "black";
    } else if (dropdown.style.display === "block") {
        dropdown.style.display = "";
        menuBtnIcon[0].style.fill = "none";
        menuBtnIcon[1].style.fill = "none";
        menuBtnIcon[2].style.fill = "none";
    }
});

window.addEventListener("click", function (evt: any) {
    if (!(evt.target.closest(".top-bar-left-menu") || evt.target.closest(".dropdown"))) {
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
            menuBtnIcon[0].style.fill = "none";
            menuBtnIcon[1].style.fill = "none";
            menuBtnIcon[2].style.fill = "none";
        }
    }
});