
let theButton = document.querySelector('#theButton');

let onButtonClick = function() {
    alert('the button was finally pressed');
};

theButton.addEventListener('click', onButtonClick);



let f1 = function() {
    console.log('');
    console.log('');
    console.log('');
    console.log('');
};

// ....

f1();