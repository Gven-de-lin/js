//HW_1* 
// Задания с разным количеством звездочек:)
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

function age(age_1, age_2, age_3){
    if (age_1<age_2 ){
        console.log("You don’t have access cause your age is" + " " + age_1 + " " + "It’s less then"+ " " + age_2)
   } else if (age_1 >=  age_2&age_1 <  age_3){
   console.log("Welcome !!!")
   } else if(age_1  > age_3){
       console.log("Keep calm and look Culture channel")
   } else {
       console.log("Technical work")
   }
}

age(17, 18, 61)


// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

function age2(age_1,age_2,age_3){
    if (typeof age_1 === 'number' && typeof age_2 === 'number' && typeof age_3 === 'number') {
        if (age_1<age_2 ){
            console.log("You don’t have access cause your age is" + " " + age_1 + " " + "It’s less then"+ " " + age_2)
       } else if (age_1 >=  age_2&age_1 <  age_3){
       console.log("Welcome !!!")
       } else if(age_1  > age_3){
           console.log("Keep calm and look Culture channel")
       } else {
           console.log("Technical work")
       }
        
    } else {
        console.log("Но-но-но... А кто вводит всякую фигню вместо циферок")
}
}

// age2(3,2,'2')

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number


function age3(age_1,age_2,age_3){
    console.log(isNan(Number(age_1)));
    if (Number(age_1).isNaN || Number.isNaN(Number(age_2)) || Number.isNaN(Number(age_3)) ) {
        console.log("Но-но-но... А кто вводит всякую фигню вместо циферок") 
        
    } else {
        if (age_1<age_2 ){
            console.log("You don’t have access cause your age is" + " " + age_1 + " " + "It’s less then"+ " " + age_2)
       } else if (age_1 >=  age_2&age_1 <  age_3){
       console.log("Welcome !!!")
       } else if(age_1  > age_3){
           console.log("Keep calm and look Culture channel")
       } else {
           console.log("Technical work")
       }
        
}
}


// a='2'
// b=Number(a)
// console.log(b)
// if (Number.isNaN(b)){
//     console.log( b)
// } else{
//     console.log("какая-то фигня твориться")
// }

age3('gfvkuyfl',8,2)

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

// function age4(age_1,age_2,age_3){
//     if (typeof (Number(age_1)) === 'number' && typeof (Number(age_2)) === 'number' && typeof (Number(age_3)) === 'number') {
//         if (age_1<age_2 ){
//             console.log("You don’t have access cause your age is" + " " + age_1 + " " + "It’s less then"+ " " + age_2)
//        } else if (age_1 >=  age_2&age_1 <  age_3){
//        console.log("Welcome !!!")
//        } else if(age_1  > age_3){
//            console.log("Keep calm and look Culture channel")
//        } else {
//            console.log("Technical work")
//        }
        
//     } else {
//         console.log("Но-но-но... А кто вводит всякую фигню вместо циферок") 
// }
// }

// let age_1= prompt('Укажите свой возраст')
// let age_2= prompt('Укажите возраст друга')
// let age_3= prompt('Укажите возраст подруги')

// age4(age_1,age_2,age_3)
