let drink = 0;

function shoot(arrow){
    console.log('Вы сделали выстрел...');
    
    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            Math.random() > .5 ? resolve({}) : reject('You miss');
            }, 3000);
    });
    return promise;
   
}

function win() {
    console.log('You win!');
    (drink == 1) ? byBeer() : giveMoney();
}

function byBeer() {
    console.log('They bought beer for you');
}

function giveMoney() {
    console.log('The give money');
}

function loose() {
    console.log('You loose!');
}

shoot({})
        //замена promis'om
        // function(mark){
        //     console.log('You did it');
        //     win(mark, byBeer, giveMoney);
        // },
        // function(miss){
        //     console.error(miss);
        //     loose();
        // }
        .then(mark => console.log('You did it'))
        .then(win)
        .catch(loose)
    