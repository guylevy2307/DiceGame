
var i = Math.floor(Math.random() * 6) + 1;//1-6
var img1 = "images/dice" + i + ".png";
document.getElementById("img1").setAttribute("src", img1);
var j = Math.floor(Math.random() * 6) + 1;
var img2 = "images/dice" + j + ".png";
document.getElementById("img2").setAttribute("src", img2);
if (i > j) {
    document.querySelector("h2").innerHTML = "🚩 Player 1 Wins!"
} else if (j > i) {
    document.querySelector("h2").innerHTML = " Player 2 Wins! 🚩"
} else {
    document.querySelector("h2").innerHTML = "Tie Roll Again"
}
