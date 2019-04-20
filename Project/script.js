let money, time ; 

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {"ответ на первый вопрос" : "ответ на второй вопрос"},
    optionalExpenses: {},
    income: {},
    savings: true

};

function chooseExpenses() {
   
    for ( i = 0; i < 2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдётся?", '');
    
        if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50 ) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            console.log("bad result"),
            i--;
        }
    }
}

chooseExpenses();

function detectByBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);

    alert(" Ежедневный бюджет: " + appData.moneyPerDay);
}

detectByBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if(appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    } 
}
 detectLevel();

function checkSavings(){
    if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под каким процентом?");
        
    appData.month = save/100/12*percent ;
    alert("Доход с вашего депозита за месяц: " + appData.month );    
    }
}

checkSavings();

function chooseOptExpenses() {
    for ( i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Какие необязательные расходы?");
        appData.optionalExpenses[i] =   questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();