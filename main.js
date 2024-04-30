const resultEl = document.querySelector(".result");
const form = document.querySelector("form");

let result = 0;
let operator = "";
let isCalculated = false; // 새로운 변수 isCalculated를 추가하여 연산이 완료되면 true로 설정하고, 숫자 입력 시 이전 결과를 초기화할 수 있도록 합니다.

resultEl.innerHTML = result;

function onClickNumber(number) {
  //return은 값을 반환하는 동시에 함수를 끝낸다.
  // 함수블록 안에 return만 있는 경우 {}는 없애도 된다.
  if (resultEl.innerHTML.length > 12) return;

  if (isCalculated || resultEl.innerHTML === "0") {
    resultEl.innerHTML = number;
    isCalculated = false;
  } else {
    resultEl.innerHTML += number;
  }
  // arr.push(num);
  // resultEl.innerHTML = parseInt(arr.join(""));
}

function onClickOperator(oprt) {
  /*
  문자를 숫자로 바꾸는 방법
  1. parseInt(문자)
  2. +문자
  3. Number(문자) 
  */
  result = +resultEl.innerHTML;

  resultEl.innerHTML = 0;

  operator = oprt;
}

function onClickEnter() {
  switch (operator) {
    case "+":
      result += +resultEl.innerHTML;
      break;
    case "-":
      result -= +resultEl.innerHTML;
      break;
    case "*":
      result *= +resultEl.innerHTML;
      break;
    case "/":
      result = parseInt(result / +resultEl.innerHTML, 10);
      break;
  }
  resultEl.innerHTML = result;
  isCalculated = true;
  if (resultEl.innerHTML.length > 13) {
    resultEl.innerHTML = "ERROR";
  }
}

function onClickDelete() {
  resultEl.innerHTML = resultEl.innerHTML.substring(
    0,
    resultEl.innerHTML.length - 1
  );

  if (resultEl.innerHTML.length === 0) {
    resultEl.innerHTML = 0;
  }
}
