const basketBonuses = (str, arr) => {
    const num =  arr.reduce((num, current) => num + current);
    const calc = ((num - 10000) / 100) * 5;

    let bonuses;
    if (num > 10000) {
        bonuses = calc.toFixed(0)
    } else {
        bonuses = "отсутствуют"
    }
    return `${str[0]} ${num} ${str[1]} ${bonuses}`;
};

console.log("--- Задание 1");
console.log(basketBonuses`сумма: ${[200, 550, 4000, 23, 58, 5000, 485, 711]} бонусов`);
console.log(basketBonuses`сумма: ${[200, 550, 4000, 23, 58]} бонусы `);

const points = (str, num) => {
    let end;
    if((num % 5) === 0 || (num % 100) === 11){
        end = 'ов'
    }else if((num % 10) === 1 ){
        end = ""
    }else{
        end = 'а'
    }

    return `${str[0]} ${num} ${str[1]}${end}`;
};

console.log("--- Задание 2");
console.log(points`Ваш баланс:${523} балл`);
console.log(points`Ваш баланс:${6000} балл`);
console.log(points`Ваш баланс:${5001} балл`);

function gamePoints(arr, top){
    "use strict";

    arr.sort(function (a, b) {
        return (a < b)? 1 : -1;
    });

    var num = 0;

    for (var i = 0; i < top; i++) {
        num += arr[i];
    }

    return "Самый лучший балл: "+ arr[0] +" \n"
       + "Средний балл игроков из топ-3: "
       + (num / 3).toFixed(0)
}

console.log("--- Задание 3");
console.log(gamePoints([74989, 74990, 84990, 62000, 58480, 61800], 3));


