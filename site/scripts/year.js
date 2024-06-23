const d = new Date().getFullYear();
let span;

if(d <= 2023) {
    span =  d 
}
else {
    span = "2023 - " + d 
}

const icons = [
    "<a href='https://anarkrist.neocities.org'><img src='/88x31/anarkrist.gif'></a>",
    "<a href='https://rb3dx.milohax.org'><img src='/88x31/rb3dx.gif'></a>"
];

const header = [
    '<img src="../img/header.png"><div class="nav"><b><li><a href="../index.html">[home]</a></li><li><a href="../index.html">[about me]</a></li><li><a href="../index.html">[characters]</a></li><li><a href="../index.html">[blog]</a></li><li><a href="../index.html">[downloads]</a></li></b></div>'
];
document.getElementsByClassName("footer")[0].innerHTML ="<p><b>natalietchi</b> " + span + "</p>" + icons;
document.getElementsByClassName("header")[0].innerHTML = header;
