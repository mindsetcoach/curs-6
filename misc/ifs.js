
console.log('before the if');

if (!true) { // condition, an expression that evaluates to a boolean
    console.log('we are now inside the if statement');
    console.log('we are now inside the if statement');
    console.log('we are now inside the if statement');
} else {
    console.log('ELSE');
}

console.log('after the if');


if (5 === 5) {
    console.log('second if');
}

if (4 > 6 || 6 < 12) {
    console.log('third if');
}


let n = prompt('provide the n number');
n = parseInt(n);

if (n < 10) {
    alert('our number has 1 digit');
} else {
    if (n < 100) {
        alert('our number has 2 digits');
    } else {
        alert('our number has 3 or more digits');
    }
}