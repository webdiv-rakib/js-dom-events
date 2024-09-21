console.log("This is seperate JS File");

//option 2: onclick make body red
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option3: onclick make body blue
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}