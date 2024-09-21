console.log("This is seperate JS File");
// option 1: directly set on the HTML element

// option 2: onclick make body red
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option 3.1: onclick make body blue
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option 3.2: onclick make body purple
const makePurpleButton = document.getElementById("make-purple");
makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// option 4:
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// option 4.2:
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})

// option 5: we will most use this one.