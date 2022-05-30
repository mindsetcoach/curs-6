
let myObject = {};
console.log(myObject);
// console.log('' + myObject);

myObject = {
    prop1: 3,
    prop2: 5,
    prop3: 2,
    prop4: 7
};
console.log(myObject);
// console.log('' + myObject);

myObject = {
    prop1: '3',
    prop2: 'text',
    prop3: 'abc',
    prop4: 'ana are mere'
};

myObject = {
    noInClass: 4,
    lastName: 'Pop',
    promoted: true,
    girl: {
        age: 8,
        firstName: 'Ana'
    }
};

console.log(myObject);

myObject['promoted'] = false;
myObject.promoted = false;

// myObject.girl.age = myObject.girl.age + 1;
myObject.girl.age++;

console.log(myObject);

