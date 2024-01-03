function random (min,max){
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

let min = 1;
let max = 10;
let count = +prompt('Введите количество примеров');

for (let i = 0; i < count; i++){
    let one = random(min,max);
    let two = random(min,max); 
    
    let index = Math.floor(Math.random() * 4); 
    let userResult;
  
    switch (index) {
        case 0:
            userResult = +prompt(one + ' + ' + two + '=');
            result = one + two;
            break;
        case 1:
            userResult = +prompt(one + ' - ' + two + '=');
            result = one - two;
            break;
        case 2:
            userResult = +prompt(one + ' * ' + two + '=');
            result = one * two;
            break;
        case 3:
            userResult = +prompt(one + ' / ' + two + '=');
            result = one / two;
            break;
    }

    if (userResult == result) {
        console.log("Ваш ответ верный.");
    } else {
        console.log("Ваш ответ неверный - " + userResult + "! " + "Правильный ответ - " + result);
    }
}