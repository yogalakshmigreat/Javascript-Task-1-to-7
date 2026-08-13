// Task 1 — Product Cards: title, image, price, category, rating

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
        <div class="price">$${c.price}</div>
        <div class="meta">Category: ${c.category}</div>
        <div class="meta">⭐ Rating: ${c.rating.rate} (${c.rating.count})</div>
      `;
      output.append(card);
    });
  })
  .catch((err) => {
    loading.textContent = "Failed to load products.";
    console.error(err);
  });
