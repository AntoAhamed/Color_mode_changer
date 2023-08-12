const button = document.getElementById("btn");
const body = document.body.style;
const para = document.getElementById("paragraph").style;
const note = document.getElementById("note");

var f = 0;

function change() {
    if (f === 0) {
        body.backgroundColor = "black";
        para.color = "red";
        button.innerHTML = "Light";
        button.style.backgroundColor = "black";
        button.style.color = "white";
        note.innerHTML = "Dark mode is on";
        f = 1;
    }
    else {
        body.backgroundColor = "white";
        para.color = "green";
        button.innerHTML = "Dark";
        button.style.backgroundColor = "white";
        button.style.color = "black";
        note.innerHTML = "Light mode is on";
        f = 0;
    }

}