// let num = 20;


// function showFirstMessage(text) {
//     alert(text);
//     console.log(num);
// }

// showFirstMessage("Hello World!");
// console.log(num);

// let calc = function (a, b) {
//     return(a + b);
// }


let calc = (a, b) => a + b;

console.log(calc(3,2));

console.log(calc(32,2));

function retVar() {
    let num = 50;
    return num;

}

let anotherNum = retVar();
console.log(anotherNum);


let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());
