// Task 6 — Product Details Card, using nested c.rating.rate

const loading = document.querySelector("#loading");
const output = document.querySelector("#output");

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    loading.style.display = "none";

    products.forEach((c) => {
      const card = document.createElement("div");
      card.className = "detail-card";
      card.innerHTML = `
        <div class="title">${c.title}</div>
        <img src="${c.image}" alt="${c.title}">
        <div class="row">Description: ${c.description}</div>
        <div class="row">Category: <b>${c.category}</b></div>
        <div class="price">Price: $${c.price}</div>
        <div class="rating">Rating: ${c.rating.rate}</div>
      `;
      output.append(card);
    });
  })
  .catch((err) => {
    loading.textContent = "Failed to load products.";
    console.error(err);
  });
