import { ProductProto } from "./Prototype.js";

import data from "../data.js";

const list = document.querySelector(".product-list");

function CardMaker(product) {
  const card = document.createElement("div");
  const img = document.createElement("img");
  const text = document.createElement("p");
  const category = document.createElement("p");

  card.classList.add("item");

  img.src = product.image;
  img.classList.add("item-image");

  text.textContent = product.title;
  text.classList.add("item-label");
  
  category.textContent = product.category;
  category.classList.add("item-label-sm");

  card.appendChild(img);
  card.appendChild(text);
  card.appendChild(category);

  return card;
}

const protos = [];
data.forEach((item) => {
  const productProto = new ProductProto(item);

  protos.push(productProto);
});

protos.forEach((item) => {
  const card = CardMaker(item);
  list.append(card);
});
