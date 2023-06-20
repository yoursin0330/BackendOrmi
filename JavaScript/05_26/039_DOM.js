const element1 = document.querySelector("#one");
element1.addEventListener("click", () => {
  element1.classList.add("test");
});
const btnRed = document.querySelector("button");
const title = document.querySelector("#one");

btnRed.addEventListener("click", () => {
  title.classList.toggle("red");
});

const sectionTitle = document.createElement("h2");
sectionTitle.innerText = "hello";

document.querySelector("body").appendChild(sectionTitle);
