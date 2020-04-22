// touchStart
// touchMove
// touchEnd
// touchEnter
// touchLeave
// touchCancel

window.addEventListener('DOMContentLoaded', function() {
    let box = document.querySelector('.box');

    box.addEventListener('touchstart', function(e) {
        e.preventDefault();
        console.log('Red box: touchstart');
        console.log(e.target);
        console.log(e.touches);
        console.log(e.changeTouches);
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', function(e) {
        e.preventDefault();
        console.log("Red box: " + e.touches[0].pageX);
    });

//     box.addEventListener('touchmove', function(e) {
//         e.preventDefault();
//         console.log('Red box: touchmove');
//     });

//     box.addEventListener('touchend', function(e) {
//         e.preventDefault();
//         console.log('Red box: touchend');
//     });

    // new RegExp('pattern', 'flags');
    // /pattern/

    let ans = prompt('Write your name');

    let reg = /n/;

    console.log(ans.search(reg));
});