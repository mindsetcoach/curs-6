
let n = 20;

for (let i = 0; i < n; i++) {
    console.log('we are now inside the FOR statement');
}

for (let i = 2; i <= n - 15; i = i + 2) {
    console.log('a more weird for statement - first line');
    console.log('a more weird for statement - second line');
    console.log('a more weird for statement - third line');
}


for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        console.log('wow, a nested for');
    }
}

n = 4;

let counter = 0;
for (let i = 0; i < n; i++) {

    for (let j = 0; j < i; j++) {

        for (let k = 0; k < j; k++) {

            console.log('wow, a weird nested for');
            counter++;
        }
    }
}
console.log(counter);



// example of building an object using a for (rarely needed)
let o = {};

for (let i = 0; i < 4; i++) {
    let propertyName = 'prop' + (i + 1);
    o[propertyName]= i; // this is the only time we may want to use the [] notation insead of the dot (.)
}

// example of building an array using a for (very often needed)
let a = [];
for (let i = 0; i < 4; i++) {
    a[i] = i;
}




let secondArray = [
    [2,3, 4],
    34,
    56,
    'text',
    {
        name: 'ana',
        age: 23
    },
    58
];

console.log(
    secondArray[4].age
);

let myStudent = {
    name: 'Ana',
    age: 23,
    height: 171,
    gradesForSecondSemester: [
        10, 9, 9, 4, 10, 8
    ],
    promoted: true
};

// get the second grade for Ana
console.log(
    myStudent.gradesForSecondSemester[1]
);