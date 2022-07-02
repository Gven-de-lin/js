// 2я домашка по JS со звездочками:

// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
for (var i=1; i<11; i++) {
    a=Math.pow(2, i)
}
//console.log(a)


// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

function degree(degree_1) {
    a=Math.pow(2,degree_1)
    console.log(a)
}

//degree(5)
// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

a=':)';
for (var i=1; i<6; i++) {
   console.log(a);
   a=a+':)';   
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода
// e.g. function printSmile(stroka, numberOfRows)

function printSmile(stroka, numberOfRows){
    for (var i = 1; i < numberOfRows + 1; i++) {
        formatedString = stroka.repeat(i); 
        console.log(' '+formatedString);
     }
}

//printSmile('ref', 8)


// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли:
// Слово (word) состоит из  (число) гласных и (число) согласных букв
function getWordStructure(word){
    let consonants=0
    let vowel=0
    let symbols=0
    let arrayConsonants = ['q', 'w', 'r', 't', 'j', 'p', 's', 'd', 'f', 'g', 'h', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q',
        'W', 'R', 'T', 'J', 'P', 'S', 'D', 'F', 'G', 'H', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
    let arrayVowel = ['y', 'u', 'i', 'o', 'a', 'e', 'Y', 'U', 'I', 'O', 'E', 'A']
        for (var i = 0; i<word.length; i++){
            for (var j = 0; j < arrayConsonants.length; j++){
                if (word[i] === arrayConsonants[j]){
                    consonants++
                }
            }
           for (var e = 0; e<arrayVowel.length; e++){
                if (word[i] === arrayVowel[e]){
                vowel++
                } else symbols++
           }
        }
        
    console.log(`Слово ${word} состоит из ${vowel} гласных и ${consonants} согласных букв`)
}

getWordStructure('Check-list')


// Проверки: 'case', 'Case', 'Check-list'

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

function isPalindrom(word){
    unPalidrom = 0
    word.toLowerCase(word)
    let lastIndex = word.length-1
    for (var i = 0; i < (word.length / 2); i++){
        if (word[i] !== word[lastIndex - i]){
            unPalidrom++ 
        }              
    }
    if (unPalidrom>0){
        console.log(`${word} - это не палиндром`)
    } else console.log(`${word} - это палиндром`)
    }
// Проверки: 'abba', 'Abba'

isPalindrom('Exabbaxe')

