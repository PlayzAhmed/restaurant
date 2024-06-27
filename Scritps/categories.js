document.addEventListener("DOMContentLoaded", async () => {
  const categories = document.querySelector(".categories");
  const allItems = categories.querySelectorAll("p");
  const all = document.getElementById("all");
  const pizza = document.getElementById("pizza");
  const burger = document.getElementById("burger");
  const wrap = document.getElementById("wrap");
  const junior = document.getElementById("junior");
  const snacks = document.getElementById("snacks");
  const fries = document.getElementById("fries");

  const menu = document.getElementById("items");
  const response = await fetch("../Assets/Database/menu.json");
  const data = await response.json();
  const menuData = data.menu;

  function setActive(element) {
    allItems.forEach((item) => {
      item.classList.remove("active");
    });
    element.classList.add("active");
  }

  function createBoxItem(parentElement, data) {
    var boxItem = document.createElement("div");
    boxItem.classList.add("box");

    var image = document.createElement("div");
    var img = document.createElement("img");
    img.src = data.imageUrl;
    image.classList.add("image");
    image.appendChild(img);
    boxItem.appendChild(image);

    var content = document.createElement("div");
    content.classList.add("content");

    var h1 = document.createElement("h1");
    h1.textContent = data.name;
    content.appendChild(h1);

    var descriptionPara = document.createElement("p");
    descriptionPara.classList.add("description");
    descriptionPara.textContent = data.description;
    content.appendChild(descriptionPara);

    var prices = document.createElement("div");
    prices.classList.add("prices");

    data.sizes.forEach((size) => {
      var sizeDiv = document.createElement("div");
      sizeDiv.classList.add("size");

      var sizeP = document.createElement("p");
      sizeP.textContent = size.size;

      var priceP = document.createElement("p");
      priceP.textContent = size.price;

      sizeDiv.appendChild(sizeP);
      sizeDiv.appendChild(priceP);

      prices.appendChild(sizeDiv);
    });

    content.appendChild(prices);

    boxItem.appendChild(content);

    parentElement.appendChild(boxItem);
  }

  menuData.forEach((data) => {
    createBoxItem(menu, data);
  });

  all.addEventListener("click", () => {
    setActive(all);
    menu.innerHTML = '';
    menuData.forEach((data) => {
      createBoxItem(menu, data);
    });
  });
  pizza.addEventListener("click", () => {
    setActive(pizza);
    menu.innerHTML = '';
    menuData.forEach((data) => {
      if (data.category === "pizza") {
        createBoxItem(menu, data);
      }
    });
  });
  burger.addEventListener("click", () => {
    setActive(burger);
    menu.innerHTML = '';
    menuData.forEach((data) => {
      if (data.category === "burger") {
        createBoxItem(menu, data);
      }
    });
  });
  snacks.addEventListener("click", () => {
    setActive(snacks);
    menu.innerHTML = '';
    menuData.forEach((data) => {
      if (data.category === "snacks") {
        createBoxItem(menu, data);
      }
    });
  });
  wrap.addEventListener("click", () => {
    setActive(wrap);
    menu.innerHTML = '';
    menuData.forEach((data) => {
      if (data.category === "wrap") {
        createBoxItem(menu, data);
      }
    });
  });
  fries.addEventListener("click", () => {
    setActive(fries);
    menu.innerHTML = '';
    menuData.forEach((data) => {
      if (data.category === "fries") {
        createBoxItem(menu, data);
      }
    });
  });
  junior.addEventListener("click", () => {
    setActive(junior);
    menu.innerHTML = '';
    menuData.forEach((data) => {
      if (data.category === "junior") {
        createBoxItem(menu, data);
      }
    });
  });
});
