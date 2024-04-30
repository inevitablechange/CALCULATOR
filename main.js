const resultEl = document.querySelector(".result");
const form = document.querySelector("form");

let result = 0;
let operator = "";

resultEl.innerHTML = result;

function onClickNumber(number) {
  //return은 값을 반환하는 동시에 함수를 끝낸다.
  // 함수블록 안에 return만 있는 경우 {}는 없애도 된다.
  if (resultEl.innerHTML.length > 12) return;

  if (resultEl.innerHTML === "0") {
    resultEl.innerHTML = number;
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

// // enter를 클릭하면 새로운 입력값 받고
// // 계산하고
// // 결과물 보여줌
// function onClickEnter() {
//   if ()
// }
