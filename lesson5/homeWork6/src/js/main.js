let buttonStart = document.getElementById('start'),
    budget = document.getElementsByClassName('budget-value'),
    dayBudget = document.getElementsByClassName('daybudget-value'),
    level = document.getElementsByClassName('level-value'),
    expenses = document.getElementsByClassName('expenses-value'),
    optionalexpenses = document.getElementsByClassName('optionalexpenses-value'),
    income = document.getElementsByClassName('income-value'),
    monthsavings = document.getElementsByClassName('monthsavings-value'),
    yearsavings = document.getElementsByClassName('yearsavings-value'),
    input = document.getElementsByClassName('expenses-item'),
    approve = document.getElementsByTagName('button'),
    calculate = document.getElementsByTagName('button'),
    notImportantExpens = document.querySelectorAll('optionalexpenses-item'),
    perhapsIncome = document.querySelector('choose-income-label'),
    checkSavings = document.querySelector('checksavings'),
    sum = document.querySelector('choose-sum'),
    percent = document.querySelector('choose-percent'),
    year = document.querySelector('year-value'),
    month = document.querySelector('month-value'),
    day = document.querySelector('day-value');
    



    // через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)