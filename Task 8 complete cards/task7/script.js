// Task 7 — Rating Details: c.rating.rate and c.rating.count

const loading = document.querySelector("#loading");
const output = document.querySelector("#output");

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    loading.style.display = "none";

    products.forEach((c) => {
      const item = document.createElement("div");
      item.className = "text-item";
      item.innerHTML = `Product: ${c.title}\nRating: ${c.rating.rate}\nReviews: ${c.rating.count}`;
      output.append(item);
    });
  })
  .catch((err) => {
    loading.textContent = "Failed to load products.";
    console.error(err);
  });
