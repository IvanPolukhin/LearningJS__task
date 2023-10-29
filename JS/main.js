// alert("i JS")

// alert(2+2+1)

// let name = 'vlad';
// let admin = name;
// console.log(admin);

// let earth;
// let person;

// const birthday = '18.04.1982';

// const age = someCode(birthday);

// let name = prompt('Enter your name');

// alert(`Hello ${name}`);

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(+a + +b);

// alert("2" > "12")

// let js = prompt('Какое "официальное" название JavaScript?', '');

// if (js == 'ECMAScript') {
//     alert('Right');
// } else {
//     alert('You dont know? "ECMAScript"!');
// }

// let num = prompt('Enter the number');

// if (num > 0) {
//     alert(1);
// } else if (num < 0) {
//     alert(-1);
// } else{
//     alert(0);
// }

// let result = (a + b < 4) ? 'little' : 'much';

// let login = prompt('login?');

// (login == 'Employee') ? alert('hello') :
//     (login == 'Director') ? alert('Hello') :
//         (login == '') ? alert('No login') : alert('');

// let age = prompt('Enter a number');
// if (age < 14 || age > 90) {
//     alert(age + ' подходит');
// } else if (age >= 14 && age <= 90) {
//     alert(age + ' не подходит');
// }

// let log = prompt('Who is there?');

// if (log == "Admin") {
//     let pass = prompt('password?');
//     if (pass == "I'm in charge") {
//         alert('Hello!');
//     } else if (pass == null || pass == '') {
//         alert('Canceled');
//     } else {
//         alert('Wrong password');
//     }
// } else if (log == null || log == '') {
//     alert('Canceled');
// } else {
//     alert("I don't know you");
// }

// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) {
//         alert(i);
//     }
// }

// let i = 0;
// while (i < 3) {
//     alert(`number ${i}!`);
//     i++
// }

// let imput;
// do {
//     imput = prompt('ввести число, большее 100.');
// } while (imput <= 100 && imput);

// let browser = prompt('Fill in the box');

// if (browser == 'Edge') {
//     alert("You've got the Edge!");
// } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
//     alert('Okay we support these browsers too');
// } else {
//     alert('We hope that this page looks ok!');
// }

// const number = +prompt('Введите число между 0 и 3', '');

// switch (number) {
//     case 0:
//         alert('Вы ввели число 0');
//         break;

//     case 1:
//         alert('Вы ввели число 1');
//         break;

//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;
// }

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили ?');
// }
// checkAge();



// function min(a, b) {
//     if (a > b) {
//         return alert(b);
//     } else {
//         return alert(a);
//     }
// }

// function min(a, b) {
//     return alert(a > b ? b : a);
// }

// min(2, 5);
// min(3, -1);
// min(1, 1);

// pow(3, 2);
// pow(3, 3);
// pow(1, 100);

// function pow(x, n) {
//     return alert(x**n);
// }

let ask = (question, yes, no) => {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }

};
    
ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение."));
