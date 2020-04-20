let money,
    time;

function start() {
    money = prompt("Ваш бюджет на месяц?", "");
    time = prompt('Введите дату в формате YY-MM-DD', '');

    while (isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет на месяц?", "");
    }
}
start();




let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpensies: function(){
        for(let i = 0; i < 2; i++ ){
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
        
                if ( (typeof(a) ) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        
                    console.log('Done!');
                    appData.expenses[a] = b;
                    
                } else{
                    i = i - 1;
                }
        }
    },

    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет " + appData.moneyPerDay);
    },

    detectLevel: function(){
        if (appData.moneyPerDay < 100){
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log('Средний уровень достатка');
        }else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Error');
        }
    },

    checkSavings: function(){
        if (appData.savings == true){
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
                appData.monthIncome = save / 100 / 12 * percent;
                alert("Доход в месяц с вашего дипозита: " + appData.monthIncome);
        }
    },

    chooseOptExpenses: function(){
        for(let i = 1; i < 3; i++){
            let opt = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    },

    chooseIncome: function(){
        

        let items = prompt("Что принесет дополнительный доход?(Перечислите через запятую)", "");


        appData.income = items.split(', ');
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort;
    }
};


// function start() {
//     money = prompt("Ваш бюджет на месяц?", "");
//     time = prompt('Введите дату в формате YY-MM-DD', '');

//     while (isNaN(money) || money == "" || money == null) {
//         money = prompt("Ваш бюджет на месяц?", "");
//     }
// }
// start();

// let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     a2 = prompt("Во сколько обойдется?", ''),
//     a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     a4 = prompt("Во сколько обойдется?", '')

// appData.expenses.a1 = a2;
// appData.expenses.a3 = a4;

///////////////

// for(let i = 0; i < 2; i++ ){
//     let a = +prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//         if ( (typeof(a) ) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {

//             console.log('Done!');
//             appData.expenses[a] = b;
            
//         } else{
//             i = i - 1;
//         }
// }


