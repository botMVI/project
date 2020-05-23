
//Интерполяция
let name = 'Vasya',
    age = '26',
    mail = 'ex@gmail.com';

// document.write('Пользователю ' + name + ' ' + age + " лет. " + 'Его почтовый адрес: ' + mail);// old variant 
document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес: ${mail}`);

// let and const
function makeArray() {
    var items = [];

    for (let i = 0; i < 10; i++) {
        var item = function() {
            console.log(i);
        };
        items.push(item);
    }
    return items;
}

//стрелочные функции
var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();

let fun = () => {
    console.log(this);
};

// fun();

let obj = {
    number: 5,
    sayNum: function() {
        let say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNum();

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let show = () => {
        console.log(this);
    };
    show();
});

//Параметры по умолчанию
function caclkOrDouble(number, basis = 2) {
    // basis = basis || 2;// ES5
    console.log(number*basis);
}

caclkOrDouble(6,6);
caclkOrDouble(6);

//Классы
class Rectangle {
    constructor(height, width = 20) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10);

console.log(square.calcArea());


//Spread-операторы
let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'journal', 'bloger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
let numbers = [2, 5, 7];

log(...numbers);