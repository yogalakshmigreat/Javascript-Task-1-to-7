// Task 9 — Change Button Content using a template literal

const loading = document.querySelector("#loading");
const output = document.querySelector("#output");

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    loading.style.display = "none";

    products.forEach((c) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${c.image}" alt="${c.title}">
        <h3>${c.title}</h3>
        <button>Buy for $${c.price}</button>
      `;
      output.append(card);
    });
  })
  .catch((err) => {
    loading.textContent = "Failed to load products.";
    console.error(err);
  });
