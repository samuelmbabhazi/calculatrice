const buttons = document.querySelectorAll(".button");
const resultats = document.querySelector(".input");
const egal = document.querySelector("#egal");
const clean = document.querySelector("#clean");
const deelete = document.querySelector("#delete");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    resultats.value += button.textContent;
  });
});
egal.addEventListener("click", () => {
  resultats.value = eval(resultats.value);
});
clean.addEventListener("click", () => {
  resultats.value = "";
});
deelete.addEventListener("click", () => {
  let del = resultats.value.split("");
  let leng = del.length;
  del.splice(leng - 1, 1);
  resultats.value = del.join("");
});
