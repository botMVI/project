// let menu = document.querySelector('.menu'),
//     partMenu = document.getElementsByTagName('li'),
//     body = document.getElementById('body'),
//     column = document.querySelectorAll('.column'),
//     adv = document.getElementsByClassName('adv'),
//     title = document.getElementById('title');


// //Menu
// let fifthMenu = document.createElement('li'),
//     thirdMenu = document.createElement('li');

// thirdMenu.classList.add('menu-item');  
// thirdMenu.innerHTML = 'Третий пункт';
// fifthMenu.classList.add('menu-item');
// fifthMenu.innerHTML = 'Пятый пункт';
// menu.replaceChild(partMenu[2], partMenu[1]);

// menu.appendChild(fifthMenu);
// menu.insertBefore(thirdMenu, partMenu[2]);

// //Picture
// body.style.background = 'url(img/apple_true.jpg) center no-repeat';


// //Advertaisment
// // column.removeChild(adv);
// // console.log(adv);

// //Title
// title.innerHTML = 'Мы продаем только подлинную технику Apple';

//Мой вариант выше^

//Вариант учителя

'use strict';

let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"),
    title = document.getElementById("title"),
    adv = document.getElementsByClassName("adv")[0],
    promptforApple = document.querySelector("#prompt"),
    menuItemLi = document.createElement("li");

menu.insertBefore(menuItem[2], menuItem[1]);                    // Поменяли местами два элемента

menuItemLi.classList.add("menu-item");                          // Добавляем новый li, с классом и текстом
menuItemLi.textContent = "Пятый элемент";                       
menu.appendChild(menuItemLi);                                   


document.body.style.backgroundImage = "url('img/apple_true.jpg')";  // Меняем фон


title.textContent = "Мы продаем только подлинную технику Apple"    // Заменить текст

adv.remove();                                                   // Удалить рекламу со страницы

let yourOpinion = prompt("Ваше отношение к технике Apple?");   // Отношение к технике Apple
promptforApple.textContent = yourOpinion;