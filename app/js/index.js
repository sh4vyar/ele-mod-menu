let items = document.querySelectorAll(".item");
let content = document.querySelector(".content");
const contents = {
  Home: `<div>hi</div>`,
  Idk: `<div>Idk</div>`,
  Stillduno: `<div>stillduno</div>`,
};
if (!content.innerHTML) {
  content.innerHTML = contents.Home;
}

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

home.classList.add("item-active");
let selectedItem = document.querySelector(".item-active");

items.forEach((i) => {
  toggleActive(i);
});

function toggleActive(item) {
  item.addEventListener("click", (e) => {
    if (selectedItem) {
      removeActive(items);
      e.target.classList.add("item-active");
    }
  });

  function removeActive(allItems) {
    allItems.forEach((item) => {
      item.classList.remove("item-active");
    });
  }
}
