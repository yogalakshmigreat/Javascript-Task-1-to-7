// Task 4 — Image Gallery, each <img> built with createElement

const loading = document.querySelector("#loading");
const output = document.querySelector("#output");

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    loading.style.display = "none";

    products.forEach((c) => {
      const img = document.createElement("img"); // required method
      img.src = c.image;
      img.alt = c.title;
      output.append(img);
    });
  })
  .catch((err) => {
    loading.textContent = "Failed to load products.";
    console.error(err);
  });
