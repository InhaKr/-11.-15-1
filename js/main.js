// "use strict";

// g
// 
// 1.Есть 3 input. Выводить в textarea содержимое всех полей ввода через запятую.
//  Использовать setInterval. (При вводе данных в input - они отображаются в textarea)

//  2.Написать скрипт, который можно выполнить на любой странице в консоли. 
//  Скрипт делает следующие действие - убирает значения color, background-color,
//  width, height у всех тэгов на странице, исключая html, head, body. Прочтение
//  ссылок в домашней работе обязательны.




//---------1------------

function s(){
  let x1 = document.querySelector('input.form__area1');
  let x2 = document.querySelector('input.form__area2');
  let x3 = document.querySelector('input.form__area3');

  setInterval(()=>{

    document.querySelector('textarea').innerHTML = x1.value + ',' + x2.value + ',' + x3.value;

  },1000);
};
s();

//-----------------------2-----
//  2.Написать скрипт, который можно выполнить на любой странице в консоли. 
//  Скрипт делает следующие действие - убирает значения color, background-color,
//  width, height у всех тэгов на странице, исключая html, head, body. Прочтение
//  ссылок в домашней работе обязательны.

// debugger
let f = document.getElementsByTagName('*');
for (let i = 0; i < f.length; i++) {

  if (f[i].tagName === 'HTML' ||
      f[i].tagName === 'HEAD' ||
      f[i].tagName === 'BODY') {
         console.log('ddd');
         continue;
  }else {
    f[i].style.color = 'inherit';
    f[i].style.backgroundColor = 'inherit';
    f[i].style.width = 'inherit';
    f[i].style.height = 'inherit';
  };
};

