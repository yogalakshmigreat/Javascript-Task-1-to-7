// Task 5 — Title / Category / Price

const loading = document.querySelector("#loading");
const output = document.querySelector("#output");

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    loading.style.display = "none";

    products.forEach((c) => {
      const item = document.createElement("div");
      item.className = "text-item";
      item.innerHTML = `Title: ${c.title}\nCategory: ${c.category}\nPrice: $${c.price}`;
      output.append(item);
    });
  })
  .catch((err) => {
    loading.textContent = "Failed to load products.";
    console.error(err);
  });
