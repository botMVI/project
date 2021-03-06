window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    let hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
   }; 
   hideTabContent(1);


   let showTabContent = (b) => {
       if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
       }
   };

   info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++){
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
   });



   //Timer
   let deadLine = '2020-05-20';

   function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
            // hours = Math.floor((t / 1000/60/60) % 24);
            // days = Math.floor((t / (1000 * 60 * 60 * 24)));//Дни
        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
   }

   let setClock = (id, endtime) => {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
		let t = getTimeRemaining(endtime);

		function addZero(num) {
			if (num < 10) {
				return '0' + num;
			} else return num;
		}
			hours.textContent = addZero(t.hours);
			minutes.textContent = addZero(t.minutes);
			seconds.textContent = addZero(t.seconds);

			if (t.total <= 0){
				clearInterval(timeInterval);
				hours.textContent = '00';
				minutes.textContent = '00';
				seconds.textContent = '00';
            }
    
}
   };

   setClock('timer', deadLine);


// function startTime() {
// 	var today = new Date();
// 	var h = today.getHours();
// 	var m = today.getMinutes();
// 	var s = today.getSeconds();
// 	// add a zero in front of numbers<10
// 	m = checkTime(m);
// 	s = checkTime(s);
// 	document.getElementById("txt").innerHTML = h+ ":" + m + ":" + s;
// 	t = setTimeout(function(){ startTime() }, 500);
//   }
  
//   function checkTime(i) {
// 	if (i<10) {
// 	  i = "0" + i;
// 	}
// 	return i;
//   } 
//   https://www.w3schools.com/jsref/met_win_clearinterval.asp
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_settimeout_clock



// Modal Window
let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    descriptionBtn = document.querySelector('.description-btn');

more.addEventListener('click', function() {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';//запрет прокрутки страницы при активной форме обратной связи
});

close.addEventListener('click', function() {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';//отмена запрета ^
});

descriptionBtn.addEventListener('click', function() {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
});




});
