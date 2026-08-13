// Task 3 — Product List rendered inside <div class="api">

const loading = document.querySelector("#loading");
const output = document.querySelector(".api#output");

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    loading.style.display = "none";

    products.forEach((c) => {
      const item = document.createElement("div"); // each product gets its own div
      item.className = "api-item";
      item.innerHTML = `
        Product: ${c.title}<br>
        Price: $${c.price}<br>
        Category: ${c.category}<br>
        <img src="${c.image}" alt="${c.title}">
      `;
      output.append(item);
    });
  })
  .catch((err) => {
    loading.textContent = "Failed to load products.";
    console.error(err);
  });
