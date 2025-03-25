const latestCards = document.querySelector(".latest-products-cards");
const featureCards = document.querySelector(".feature-products-cards");
const popularCards = document.querySelector(".popular-products-cards");


  
const lpCard = [
    {
        img: "https://themewagon.github.io/stylish/images/card-item1.jpg",
        para: "Running shoes for women.",
        price: "$89",
    },
    {
        img: "	https://themewagon.github.io/stylish/images/card-item5.jpg",
        para: "Running shoes for men.",
        price: "$124"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe6GV2PnQ8j-kmBW8h2qJunwcVAUOi2OBYfA&s",
        para: "Running shoes for men.",
        price: "$129",
    },
    {
        img: "	https://themewagon.github.io/stylish/images/card-item2.jpg",
        para: "Running shoes for women.",
        price: "$119",
    },
    {
        img: "	https://themewagon.github.io/stylish/images/card-item9.jpg",
        para: "Running shoes for men.",
        price: "$99",
    },   
   
]
lpCard.forEach((arr)=>{
    let Card = document.createElement("div")
    Card.classList.add("card");

    Card.innerHTML = `
<img src="${arr.img}" alt="">
<i class="fa-solid fa-bag-shopping card-bag"></i>
<i class="fa-solid fa-search card-search"></i>
 <div class="card-lower">
    <p>${arr.para}</p>
    <h4>${arr.price}</h4>
    </div>
    `
    latestCards.appendChild(Card)
})


const fpCard = [
   
    {
        img: "	https://themewagon.github.io/stylish/images/card-item3.jpg",
        para: "Running shoes for men.",
        price: "$109"
    },
    {
        img: "https://themewagon.github.io/stylish/images/card-item8.jpg",

        para: "Running shoes for women.",
        price: "$149"
    },
    {
        img: "	https://themewagon.github.io/stylish/images/card-item7.jpg",
        para: "Running shoes for men.",
        price: "$79"
    },
    {
        img: "https://themewagon.github.io/stylish/images/card-item4.jpg",
        para: "Running shoes for women.",
        price: "$99"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh50TAPkXI7K6tQ1JnPLfp1QpIAqDnMMTg7Q&s",
        para: "Running shoes for women.",
        price: "$119"
    },
   
]
fpCard.forEach((arr)=>{
    let Card = document.createElement("div")
    Card.classList.add("card");

    Card.innerHTML = `
<img src="${arr.img}" alt="">
<i class="fa-solid fa-bag-shopping card-bag"></i>
<i class="fa-solid fa-search card-search"></i>
 <div class="card-lower">
    <p>${arr.para}</p>
    <h4>${arr.price}</h4>
    </div>
    `
    featureCards.appendChild(Card)
})


const ppCard = [
    {
        img: "https://themewagon.github.io/stylish/images/card-image1.jpg",
        para: "Running shoes for men.",
        price: "$119"
    },
    {
        img: "https://themewagon.github.io/stylish/images/card-image3.jpg",
        para: "Running shoes for men.",
        price: "$89",
    },
    {
        img: "	https://themewagon.github.io/stylish/images/card-item6.jpg",
        para: "Running shoes for women.",
        price: "$139",
    },
    {
        img: "https://themewagon.github.io/stylish/images/card-item10.jpg",
        para: "Running shoes for men.",
        price: "$99"
    },
    {
        img: "https://paragonfootwear.com/cdn/shop/products/k1016l_pch_1.jpg?v=1741862818",
        para: "Running shoes for somen.",
        price: "$129"
    },
  
]
ppCard.forEach((arr)=>{
    let Card = document.createElement("div")
    Card.classList.add("card");

    Card.innerHTML = `
<img src="${arr.img}" alt="">
<i class="fa-solid fa-bag-shopping card-bag"></i>
<i class="fa-solid fa-search card-search"></i>
 <div class="card-lower">
    <p>${arr.para}</p>
    <h4>${arr.price}</h4>
    </div>
    `
    popularCards.appendChild(Card)
})




const burgerIcon = document.getElementById("burger-icon");
const burgerMenuContent = document.getElementById("burger-menu-content");
const burgersvg = document.getElementById("burgersvg");
const crossIcon = document.querySelector(".cross-icon");
const mainContainer = document.querySelector(".main-container");
const navbar = document.querySelector(".navbar");

const loginIcon = document.querySelector("#login-icon");
const loginCloseIcon = document.querySelector(".login-close-icon");
const loginParent = document.querySelector(".login-parent");

const searchSection = document.querySelector(".search-section");
const searchIcon = document.querySelector("#search-icon");
const searchclose = document.querySelector("#search-close");

const cartIcon = document.querySelector("#cart-icon");
const cartParent = document.querySelector(".cart-parent");
const cartClose = document.querySelector("#cart-close");

const cardBags = document.querySelectorAll(".card-bag");


const cardSearchIcon = document.querySelectorAll(".card-search");
const cardSearchParent = document.querySelector(".card-search-parent");
const cardSearchClose = document.querySelector("#card-search-close");


let isVisible = false;

window.addEventListener("resize", (e) => {
  if (window.innerWidth > 720) {
    isVisible = false;
    toggleMenu();
  }
});

const toggleMenu = () => {
  if (isVisible) {
    burgerIcon.innerHTML = `
       <img class="cross-icon" src="./pics/crossIcon.svg" alt="">
    `;
    burgerIcon.style.fontSize = "2rem";
    burgerMenuContent.classList.remove("hidden");
    mainContainer.style.filter = "blur(10px)";
} else {
    mainContainer.style.filter = "blur(0px)";
    burgerIcon.innerHTML = "";
    burgerIcon.appendChild(burgersvg);
    burgerMenuContent.classList.add("hidden");
  }
};

burgerIcon.addEventListener("click", () => {
  isVisible = !isVisible;

  toggleMenu();
});


loginIcon.addEventListener("click", () => {
    loginParent.classList.remove("login-parent-hidden");
})
loginCloseIcon.addEventListener("click", () => {
    loginParent.classList.add("login-parent-hidden");
})

searchIcon.addEventListener("click", () => {
    searchSection.classList.toggle("search-section-display-none");
    
})
searchclose.addEventListener("click", () => {
    searchSection.classList.add("search-section-display-none");
})


cartIcon.addEventListener("click", () => {
    cartParent.classList.remove("cart-parent-hidden");
})
cartClose.addEventListener("click", () => {
    cartParent.classList.add("cart-parent-hidden");
})

cardBags.forEach((bag) => {
    bag.addEventListener("click", () => {
        cartParent.classList.remove("cart-parent-hidden");
    })
})



cardSearchIcon.forEach((cardSearch) => {
    cardSearch.addEventListener("click", () => {
       cardSearchParent.classList.remove("card-search-parent-hidden");
    })
})
cardSearchClose.addEventListener("click", () =>{
    cardSearchParent.classList.add("card-search-parent-hidden");

})




/*
`
    <header>
        <img src="${}" alt="">
        <i class="fa-solid fa-xmark" id="card-search-close"></i>
      </header>
      <main>
        <div>  
          <h3>${}</h3>
          <h2>${}</h2>
        </div>
        <p>
          Buy good shoes and a good mattress, because when you're not in one you're in the other. With four pairs of shoes, I can travel the world.
        </p>
      </main>
      <footer>
        <button class="card-search-btn">Add to cart</button>
      </footer>
`
*/
