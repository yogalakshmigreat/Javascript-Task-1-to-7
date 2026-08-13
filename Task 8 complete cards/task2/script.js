// Task 2 — Title / Description (first 50 chars via slice) / Price

const loading = document.querySelector("#loading");
const output = document.querySelector("#output");

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    loading.style.display = "none";

    products.forEach((c) => {
      const shortDesc = c.description.slice(0, 50); // first 50 characters

      const item = document.createElement("div");
      item.className = "text-item";
      item.innerHTML = `Title: ${c.title}\nDescription: ${shortDesc}...\nPrice: $${c.price}`;
      output.append(item);
    });
  })
  .catch((err) => {
    loading.textContent = "Failed to load products.";
    console.error(err);
  });
