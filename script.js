// FIRST ARROW
const arrow1 = document.getElementById("q1");
const answer1 = document.querySelector(".hidden1");
const question1 = document.getElementById("question1");
const justArrow = document.getElementById("ar1");
arrow1.addEventListener("click", () => {
  answer1.classList.toggle("hidden1");
  //   question1.style.fontWeight =
  //     question1.style.fontWeight === "bold" ? "normal" : "bold"; типа можно и так если хочеться лол
  justArrow.classList.toggle("rotate180");
  question1.classList.toggle("bold");
});
// SECOND ARROW
const arrow2 = document.getElementById("q2");
const answer2 = document.querySelector(".hidden2");
const question2 = document.getElementById("question2");
const justArrow2 = document.getElementById("ar2");
arrow2.addEventListener("click", () => {
  answer2.classList.toggle("hidden2");
  question2.classList.toggle("bold");
  justArrow2.classList.toggle("rotate180");
});
// THIRD ARROW
const arrow3 = document.getElementById("q3");
const answer3 = document.querySelector(".hidden3");
const question3 = document.getElementById("question3");
const justArrow3 = document.getElementById("ar3");
arrow3.addEventListener("click", () => {
  answer3.classList.toggle("hidden3");
  question3.classList.toggle("bold");
  justArrow3.classList.toggle("rotate180");
});
// FORTH ARROW
const arrow4 = document.getElementById("q4");
const answer4 = document.querySelector(".hidden4");
const question4 = document.getElementById("question4");
const justArrow4 = document.getElementById("ar4");
arrow4.addEventListener("click", () => {
  answer4.classList.toggle("hidden4");
  question4.classList.toggle("bold");
  justArrow4.classList.toggle("rotate180");
});
// FIFTH ARROW
const arrow5 = document.getElementById("q5");
const answer5 = document.querySelector(".hidden5");
const question5 = document.getElementById("question5");
const justArrow5 = document.getElementById("ar4");
arrow5.addEventListener("click", () => {
  answer5.classList.toggle("hidden5");
  question5.classList.toggle("bold");
  justArrow5.classList.toggle("bold");
});
