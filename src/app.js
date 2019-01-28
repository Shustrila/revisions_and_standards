const arr = (arr) => {
    let num =  arr.reduce((num, current) => num + current);
    let massege = `сумма: ${num}  бонусы: `;


    if (num > 10000) {
        return massege + ((num / 100) * 5).toFixed(0)
    }

    return massege + "---";
};

console.log("--- Задание 1");
console.log(arr([200, 550, 4000, 23, 58, 5000, 485, 711]));
console.log(arr([200, 550, 4000, 23, 58]));


const points = (num) => {
    let str = "";
    let point = Number(`${num}`.slice(-1));

    if((num % 5) === 0 || point > 5 || (num % 100) === 11){
        str = "ов"
    }else if((num % 10) === 1 ){
        str = ""
    }else{
        str = "а"
    }

    return `Ваш баланс: ${num} балл${str}`;
};

console.log("--- Задание 2");
console.log(points(523));
console.log(points(6000));
console.log(points(5001));

function gamePoints(arr){
    "use strict";
    arr.sort((a, b) => (a < b)? 1 : -1);

    return "Самый лучший балл: "+ arr[0] +" \n"
       + "Средний балл игроков из топ-3: "
       + ((arr[0] +  arr[1]+  arr[2]) / 3).toFixed(0)
}

console.log("--- Задание 3");
console.log(gamePoints([74989, 74990, 84990, 62000, 58480, 61800]));


