// =========================
// SANDRA GADGETS
// Version 2
// =========================

// ---------- Dark Mode ----------

const themeToggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
}

if(themeToggle){

themeToggle.onclick=()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
localStorage.setItem("theme","dark");
}else{
localStorage.setItem("theme","light");
}

};

}

// ---------- Load Products ----------

async function loadProducts(){

try{

const response=await fetch("../data/products.json");

const products=await response.json();

displayProducts(products);

}catch(e){

try{

const response=await fetch("data/products.json");

const products=await response.json();

displayProducts(products);

}catch(err){

console.log(err);

}

}

}

function displayProducts(products){

const container=document.getElementById("newArrivals");

if(!container) return;

container.innerHTML="";

products.forEach(product=>{

container.innerHTML+=`

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<div class="product-info">

<span class="badge">${product.status}</span>

<h3>${product.name}</h3>

<p>${product.storage.join(" • ")}</p>

<h2>$${product.price}</h2>

<p class="stock">${product.stock}</p>

<a
class="buy-btn"
href="https://wa.me/12065955459?text=Hello%20I'm%20interested%20in%20${encodeURIComponent(product.name)}"
target="_blank">

Order on WhatsApp

</a>

</div>

</div>

`;

});

}

loadProducts();