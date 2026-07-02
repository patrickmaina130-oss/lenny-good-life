"use strict";

/* =========================
   MARKETPLACE DATA
========================= */

const marketplaceData = {
  tours: [
    {
      title: "Maasai Mara Safari",
      location: "Narok, Kenya",
      price: "From $299",
      image: "/assets/images/tour1.jpg"
    }
  ],

  hotels: [
    {
      title: "Nairobi Luxury Hotel",
      location: "Nairobi, Kenya",
      price: "From $120",
      image: "/assets/images/hotel1.jpg"
    }
  ],

  vehicles: [
    {
      title: "Toyota Prado Rental",
      location: "Nairobi, Kenya",
      price: "From $80/day",
      image: "/assets/images/car1.jpg"
    }
  ],

  realestate: [
    {
      title: "Modern Apartment",
      location: "Westlands, Nairobi",
      price: "From $500/month",
      image: "/assets/images/house1.jpg"
    }
  ]
};

/* =========================
   STATE
========================= */

let currentCategory = "tours";

/* =========================
   DOM ELEMENTS
========================= */

const marketplace = document.getElementById("marketplace");
const buttons = document.querySelectorAll(".category-btn");

/* =========================
   RENDER FUNCTION
========================= */

function render(category) {
  marketplace.innerHTML = "";

  marketplaceData[category].forEach(item => {
    marketplace.innerHTML += `
      <div class="card">
        <img src="${item.image}" alt="${item.title}">
        <div class="card-body">
          <h3>${item.title}</h3>
          <p>${item.location}</p>
          <strong>${item.price}</strong>
        </div>
      </div>
    `;
  });
}

/* =========================
   BUTTON EVENTS
========================= */

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    currentCategory = btn.dataset.category;

    render(currentCategory);
  });
});

/* =========================
   INITIAL LOAD
========================= */

render(currentCategory);
