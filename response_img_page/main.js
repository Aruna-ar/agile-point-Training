const myHeading = document.querySelector('h2');
myHeading.textContent = 'Happy to guide you!!';
let myImage = document.querySelector('img');
debugger;

myImage.onclick = function () {
    debugger;
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/1.webp') {
        myImage.setAttribute('src', 'images/2.webp');
    } else {
        myImage.setAttribute('src', 'images/1.webp');
    }
}
let myButton = document.querySelector('button');
let myHeading1 = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading1.textContent = 'Rumis quotes are optimistic, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Rumis quotes are fabolous, ' + storedName;
}
myButton.onclick = function () {
    setUserName();
}
