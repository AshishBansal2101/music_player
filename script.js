var elem = document.querySelectorAll(".heart_sym");
for (let i = 0; i < elem.length; i++) {
    var res = elem[i].addEventListener("click", function () {
        if (elem[i].innerHTML == "♡") {
            elem[i].innerHTML = "&#9829";
        } else {
            elem[i].innerHTML = "♡";
        }
    });
}
var foot = document.querySelector(".footer");
var music = document.querySelector(".music");
music.addEventListener("click", function () {
    foot.style.display = "flex";
});
