

// 1 Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.

const numbers = [9, 7, 19];
numbers[1] = 10;
console.log(numbers); 

// 2 Створити масив із трьох рядків. Додати до масиву ще одну рядків.

let line = ["brother", "sister", "mother"];
line[3] = "father";
console.log(line);

// 3 Створити скрипт який поверне суму всіх чисел в масиві.

const numer = [5, 10, 15, 20];
let summ = 0;

for (let i = 0; i < numer.length; i += 1) {
    summ += numer[i]
}

console.log(summ);

// 4 Створити масив з 5-ти чисел. 
// Вивести на екран всі елементи масиву за допомогою циклу for.

let numberss = [5, 10, 15, 20, 25];

for (let i = 0; i < numberss.length; i+= 1) {

  console.log(numberss[i]);
}

// 5 Створити масив із 5-ти рядків. 
// Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.

let best = ["Nazar", "Ivan", "Vadim", "Taras", "friends"];
for (let i = 0; i < best.length; i += 1) {
    if (best[i].length > 5) {

        console.log(best[i]);
    }
}

// 6 Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.

const massive = [1, 5, 3, 12, 9, 15, 6, 20, 8, 4];
let maximum = massive[0];

for (let i = 1; i < massive.length; i += 1) {
    if (massive[i] > maximum) {

        maximum = massive[i];
    }
}

console.log(maximum);

// 7 Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.


const tar = [2, 7, 4, 9, 12, 3, 8, 5, 10, 1];
for (let i = 0; i < tar.length; i += 1) {
    if (tar[i] % 2 === 0) {

        console.log(tar[i]);  
    }
}



