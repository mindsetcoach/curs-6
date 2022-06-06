
// function myNiceFunction() {
//     console.log('we are now inside a function');
// }

// myNiceFunction();

let myEvenNicerFunction = function() {
    console.log('we are now inside the even nicer function');
    console.log('we still are...');
    console.log('we still are...');
    console.log('we still are...');
    console.log('we still are...');
    console.log('we still are...');
    console.log('we still are...');
    console.log('we still are...');
};


myEvenNicerFunction();
myEvenNicerFunction();

let evenNicerButWithParameter = function(n, message) {
    console.log('we are now inside the even nicer function');
    for (let i = 0; i < n; i++) {
        console.log('we still are... ' + message);
    }
};

evenNicerButWithParameter(4, 'Ana');
evenNicerButWithParameter(5);
evenNicerButWithParameter(10, 'Mihai');


// let sumAndPowerOfTwo = function(a, b) {
//     console.log((a + b) * (a + b));
// };

let sumAndPowerOfTwo = function(a, b) {
    return (a + b) * (a + b);
};

console.log(sumAndPowerOfTwo(3, 4));

let theFunctionResult = sumAndPowerOfTwo(3, 5);

alert(theFunctionResult);



console.log(typeof myEvenNicerFunction);
