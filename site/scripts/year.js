const d = new Date().getFullYear();
let span;

if(d <= 2023) {
    span =  d 
}
else {
    span = "2023 - " + d 
}

document.getElementsByClassName("footer")[0].innerHTML ="<p><b>natalietchi</b> " + span + "</p>";