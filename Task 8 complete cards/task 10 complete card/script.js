// ================================================================
// TASK 10 (BONUS) — Complete Product Card
//
// Required conditions — all used, in this exact order:
//   fetch()
//   .then()
//   response.json()
//   .then()
//   forEach()
//   querySelector()
//   createElement()
//   innerHTML
//   append()
//
// Required fields accessed:
//   c.title, c.image, c.description, c.category,
//   c.price, c.rating.rate, c.rating.count
// ================================================================

const loading = document.querySelector("#loading");   // querySelector()
const output = document.querySelector("#output");     // querySelector()

fetch("https://fakestoreapi.com/products")             // fetch()
  .then((response) => response.json())                  // .then()  +  response.json()
  .then((data) => {                                      // .then()
    loading.style.display = "none";

    data.forEach((c) => {                                // forEach()
      const card = document.createElement("div");        // createElement()
      card.className = "detail-card";

      card.innerHTML = `
        <img src="${c.image}" alt="${c.title}">
        <div class="title">Title: ${c.title}</div>
        <div class="row">Category: <b>${c.category}</b></div>
        <div class="row">Description:<br>${c.description}</div>
        <div class="price">Price: $${c.price}</div>
        <div class="rating">Rating: ${c.rating.rate} — Reviews: ${c.rating.count}</div>
        <button onclick="alert('Added: ${c.title.replace(/'/g, "")}')">BUY NOW</button>
      `;                                                   // innerHTML

      output.append(card);                                // append()
    });
  })
  .catch((err) => {
    loading.textContent = "Failed to load products.";
    console.error(err);
  });
