const question = document.querySelector("#question");
const answer = document.querySelectorAll("#answer");
const correct = document.querySelector("#correct");
const incorrect = document.querySelector("#incorrect");
const buttons = document.querySelectorAll(".answers button");

let btn = 0;
let result = 0;
let error = 0;

correct.textContent = result;
incorrect.textContent = error;

function render() {
  const trueBtn = Math.round(Math.random());
  const positive = Math.round(Math.random());
  const question1 =
    Math.round(Math.random() * 10) + Math.round(Math.random() * 10) * 10;
  const question2 =
    Math.round(Math.random() * 10) + Math.round(Math.random() * 10) * 10;
  const add = question1 + question2;
  const minus = question1 - question2;

  question.innerHTML = `${question1} ${
    positive ? "+ " + question2 : "- " + question2
  }`;

  if (trueBtn) {
    if (positive) {
      btn = add;
      answer[0].textContent = add;
      answer[1].textContent =
        Math.round(Math.random() * 10) + Math.round(Math.random() * 10) * 10;
    } else {
      btn = minus;
      answer[0].textContent = minus;
      answer[1].textContent =
        minus >= 0
          ? Math.round(Math.random() * 10) + Math.round(Math.random() * 10) * 10
          : Math.round(Math.random() * 10) +
            Math.round(Math.random() * 10) * -10;
    }
  } else {
    if (positive) {
      btn = add;
      answer[1].textContent = add;
      answer[0].textContent =
        Math.round(Math.random() * 10) + Math.round(Math.random() * 10) * 10;
    } else {
      btn = minus;
      answer[1].textContent = minus;
      answer[0].textContent =
        minus >= 0
          ? Math.round(Math.random() * 10) + Math.round(Math.random() * 10) * 10
          : Math.round(Math.random() * 10) +
            Math.round(Math.random() * 10) * -10;
    }
  }
}
render();
function btns(e) {
  if (+e.textContent === btn) {
    result++;
    correct.textContent = result;
  } else {
    error++;
    incorrect.textContent = error;
  }
}

buttons.forEach((e) => {
  e.addEventListener("click", () => {
    btns(e);
    render();
  });
});
