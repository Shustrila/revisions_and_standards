const arr = (arr) => {
    const num =  arr.reduce((num, current) => num + current);
    const calc = ((num - 10000) / 100) * 5;
    const massege = `сумма: ${num} бонусы:`;

    if (num > 10000) {
        return `${massege} ${calc.toFixed(0)}`
    }
    return `${massege} ---`;
};

console.log("--- Задание 1");
console.log(arr([200, 550, 4000, 23, 58, 5000, 485, 711]));
console.log(arr([200, 550, 4000, 23, 58]));


const points = (blans, num) => {
    let str;
    if((num % 5) === 0 || (num % 100) === 11){
        str = 'баллов'
    }else if((num % 10) === 1 ){
        str = "балл"
    }else{
        str = 'балла'
    }

    return `${blans} ${num} ${str}`;
};

console.log("--- Задание 2");
console.log(points("Ваш баланс:", 523));
console.log(points("Ваш баланс:", 6000));
console.log(points("Ваш баланс:", 5001));

function gamePoints(arr, top){
    "use strict";

    arr.sort(function (a, b) {
        return (a < b)? 1 : -1;
    });

    let num = 0;

    for (var i = 0; i < top; i++) {
        num += arr[i];
    }

    return "Самый лучший балл: "+ arr[0] +" \n"
       + "Средний балл игроков из топ-3: "
       + (num / 3).toFixed(0)
}

console.log("--- Задание 3");
console.log(gamePoints([74989, 74990, 84990, 62000, 58480, 61800], 3));


