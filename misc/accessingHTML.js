
// let h1Element = document.getElementById('theHeader');
let h1Element = document.querySelector('h1#theHeader');

console.log(h1Element);
console.log(h1Element.innerHTML);

h1Element.innerHTML = 'Hello World! (edited by JS)';
h1Element.style.color = 'red';


let supraTitleElement = document.createElement('h4');
supraTitleElement.innerHTML = 'this is a supra-title :)';

h1Element.parentNode.insertBefore(supraTitleElement, h1Element);
