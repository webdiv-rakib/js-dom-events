console.log("This is seperate JS File");
// option 1: directly set on the HTML element

// option 2: onclick make body red
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option 3: onclick make body blue
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option 4: onclick make body purple
const makePurpleButton = document.getElementById("make-purple");
makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}