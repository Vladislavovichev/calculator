let display = document.querySelector(".display");               //выбираем дисплей
let buttons = document.querySelector(".buttons");             //выбираем кнопки

buttons.addEventListener("click", (e) => {             //вешаем слушатель через делегирование на buttons
  switch (e.target.innerText) {
    case "AC":                                       //при нажатии на AC очищаем display присваивая 0
      display.innerText = "0";
      break;
    case "=":                                        //при нажатии на = выполняем код и ловим ошибку
      try {
        console.log(typeof(display.innerText));
        display.innerText = eval(display.innerText); 
      } catch (e) {
        display.innerText = "Error!";
      }
      break;
    case "+/-":                                      //при нажатии на +/- очищаем display присваивая -       
      display.innerText = "-";                       
      break;
    case "%":                                        //при нажатии на % делим число на 100
      let passedText = display.innerText + "/100";
      display.innerText = eval(passedText);
      break;
    default:
      if (display.innerText === "0" && e.target.innerText !== ".") {  //если на дисплее 0 и нажали не на точку 
        display.innerText = e.target.innerText;                       //то присвоим display то на что нажали
      } else {                                       //если на дисплее не 0 или нажали на точку
        display.innerText += e.target.innerText;     //добавляем в display то на что нажали
      };
  }
});