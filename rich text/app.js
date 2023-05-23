var userInput = document.getElementById("user-input");

function color() {

    var color = document.getElementById("color").value;
    userInput.style.color = color;

}


function textSize() {
    var size = document.getElementById('font-size').value;
    userInput.style.fontSize = size + 'px';
}


var background = document.getElementById("backgroundColor");
background.oninput = () => {
    document.body.style.backgroundColor = background.value;
}

function changeBold() {

    if (userInput.style.fontWeight === 'bold') {
        userInput.style.fontWeight = "normal";

    }
    else {
        userInput.style.fontWeight = 'bold';

    }
}

function changeItalic() {
    if (userInput.style.fontStyle === 'italic') {
        userInput.style.fontStyle = "normal"
    }
    else {
        userInput.style.fontStyle = "italic"
    }
}

function alignLeft() {
    document.getElementById("align-left");
    userInput.style.textAlign = "left";

}
function alignRight() {
    document.getElementById("align-right");
    userInput.style.textAlign = "right";

}


function alignCenter() {
    document.getElementById("align-right");
    userInput.style.textAlign = "center";

}

function underline() {
    if (userInput.style.textDecoration === "underline") {
        userInput.style.textDecoration === "None";
    }
    else {
        userInput.style.textDecoration = "underline";

    }
}