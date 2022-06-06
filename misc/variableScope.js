
let myVarFromOutsideF1 = 3;
window.myVarFromGlobalScope = 11;

let f1 = function(myVarFromF1Params) {
    let myVarFromF1 = 4;
    console.log(myVarFromF1);
    console.log(myVarFromOutsideF1);
    console.log(myVarFromF1Params);
    console.log(myVarFromGlobalScope);

    console.log(a);
    console.log(b);
};

let a = 6;

f1(a);

let b = 7;

// console.log(myVarFromF1);
console.log(myVarFromOutsideF1);
// console.log(myVarFromF1Params);
console.log(myVarFromGlobalScope);