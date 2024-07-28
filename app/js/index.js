let items = document.querySelectorAll(".item");
let content = document.querySelector(".content");
let inputNumber = document.querySelector('.cheat-item > input[type="number"]');
let inputRange = document.querySelector('.cheat-item > input[type="range"]');

inputNumber.value = 30;

inputNumber.addEventListener("input", () => {
  inputRange.value = inputNumber.value;
});
inputRange.addEventListener("input", () => {
  inputNumber.value = inputRange.value;
});

// const contents = {
//   Home: `<div>hi</div>`,
//   Idk: `<div>Idk</div>`,
//   Stillduno: `<div>stillduno</div>`,
// };
// if (!content.innerHTML) {
//   content.innerHTML = contents.Home;
// }

const home = document.getElementById("0");
const idk = document.getElementById("1");
const stillduno = document.getElementById("2");

home.addEventListener("click", () => {
  content.innerHTML = contents.Home;
});

idk.addEventListener("click", () => {
  content.innerHTML = contents.Idk;
});

stillduno.addEventListener("click", () => {
  content.innerHTML = contents.Stillduno;
});

home.classList.add("active");
let selectedItem = document.querySelector(".active");

items.forEach((i) => {
  toggleActive(i);
});

function toggleActive(item) {
  item.addEventListener("click", (e) => {
    if (selectedItem) {
      removeActive(items);
      e.target.classList.add("active");
    }
  });

  function removeActive(allItems) {
    allItems.forEach((item) => {
      item.classList.remove("active");
    });
  }
}
