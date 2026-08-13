// Task 8 — Title / Description first 20 characters

const loading = document.querySelector("#loading");
const output = document.querySelector("#output");

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    loading.style.display = "none";

    products.forEach((c) => {
      const shortDesc = c.description.slice(0, 20); // first 20 characters

      const item = document.createElement("div");
      item.className = "text-item";
      item.innerHTML = `Title: ${c.title}\nDescription: ${shortDesc}...`;
      output.append(item);
    });
  })
  .catch((err) => {
    loading.textContent = "Failed to load products.";
    console.error(err);
  });
