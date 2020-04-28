// вводим набор констант для управления тегами табло времени
const clock = document.querySelector('.countdown');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const message = document.querySelector('.message');
// вводим набор констант для управления кнопками
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const start = document.querySelector('.start');
// вводим переменные, в которые будем записывать счетчики
let count_Seconds = 0;
let count_Minute = 0;
// -----------------------------------------------------------------
//функция updateText вставляет в соответствующие теги с классом minutes и seconds
// соответствующее число секунд, при этом количество минут и секунд добавляется к 0
//а потом из получившегося числа отрезаются первые 2 символа, начиная с конца
// например, 059 функция обрежет до 59, а 05 оставит как есть.
const updateText = () =>{ 
  minutes.innerHTML = (0 + String(count_Minute)).slice(-2);
  seconds.innerHTML = (0 + String(count_Seconds)).slice(-2);
}
updateText();
// функция countDown складывает в переменную total количество получившихся секунд
//
const countDown = () => { 
  let total = count_Seconds + count_Minute * 60;
  const timeinterval = setTimeout(countDown, 1000);
  if (total <= 0) {
    clearInterval(timeinterval);
    clock.style.display = 'none';
    message.innerHTML = '<p>Отсчет времени завершён...</p>'
  }
  if(count_Seconds > 0) count_Seconds--;
  else{
    count_Seconds = 59;
    count_Minute--;
  } 
  updateText();
}

plus.onclick = () =>{
  if(count_Seconds < 59) ++count_Seconds;
  else{
    count_Seconds = 0;
    ++count_Minute;
  }
  updateText()
}

minus.onclick = () =>{
  if(count_Minute <= 0 && count_Seconds===0){
    count_Seconds = 0;
    count_Minute = 0;
    return;
  }
  if(count_Seconds > 0) --count_Seconds;
  else{
    count_Seconds = 59;
    --count_Minute;
  }
  updateText();
}

start.onclick = () => {
    countDown();  
}