let carts = document.querySelectorAll('.cart')


let products = [{
        name: 'Bournvita Pro-Health Chocolate Drink ',
        tag: 'vita',
        price: 392,
        inCart: 0
    },

    {
        name: 'Horlicks Health & Nutrition Drink - Classic Malt ',
        tag: 'horlicks',
        price: 385,
        inCart: 0
    },



    {
        name: ' Pediasure Nutritional Powder - Complete & Balanced, Premium Chocolate',
        tag: 'pedia',
        price: 975,
        inCart: 0
    },


    {
        name: 'Boost Nutrition Drink - Health, Energy & Sports',
        tag: 'boost',
        price: 301,
        inCart: 0
    },


    {
        name: 'Cadbury Powder Mix - Hot Chocolate Drink ',
        tag: 'hot',
        price: 129,
        inCart: 0
    },


    {
        name: ' Ensure Nutritional Powder - Vanilla Flavour',
        tag: 'ensure',
        price: 565,
        inCart: 0
    },


    {
        name: ' Horlicks Health & Nutrition Drink - Chocolate Flavour',
        tag: 'delight',
        price: 211,
        inCart: 0
    },



    {
        name: 'MTR Drink Mix - Badam ',
        tag: 'mtr',
        price: 450,
        inCart: 0
    },



    {
        name: ' Protinex Nutritional Supplement - Original',
        tag: 'x',
        price: 915,
        inCart: 0
    },



    {
        name: 'PureFoods 100% Pure Tender Coconut Water ',
        tag: 'water',
        price: 75,
        inCart: 0
    },



    {
        name: ' Enfagrow A+ Nutritional Milk Powder Health Drink for Children (3+ years), Vanilla',
        tag: 'A+',
        price: 70,
        inCart: 0
    },



    {
        name: ' Kapiva Ayurveda Probiotics Gummies With Amla - Improves Gut Health, 10 Pcs',
        tag: 'gut',
        price: 160,
        inCart: 0
    },


    {
        name: 'NUTRIWISH Ashwagandha Powder ',
        tag: 'powder',
        price: 600,
        inCart: 0
    },


    {
        name: 'Nescafe Sunrise Instant Coffee - Chicory Mixture ',
        tag: 'nescafe2',
        price: 60,
        inCart: 0
    },


    {
        name: 'Pediasure 7+ Specialised Nutrition Drink Powder For Growing Children - Vanilla Flavour ',
        tag: 'pedia1',
        price: 335,
        inCart: 0
    },


    {
        name: 'Amul Pro Whey Protein - Malt Beverage health drink with DHA - Chocolate ',
        tag: 'pro',
        price: 140,
        inCart: 0
    },

    {
        name: 'Saffola Immuniveda Golden Turmeric Milk Mix - Immunity Booster ',
        tag: 'imm',
        price: 339,
        inCart: 0
    },
];



for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
        console.log("added to cart");
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.side-menu span').textContent = productNumbers;
    }
}


function cartNumbers(product) {
    console.log("the products is", product);
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.side-menu span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.side-menu span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);


    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }

        }
        // console.log(cartItems[product.tag]);
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
        console.log("my cartItems are", cartItems);

    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    console.log("the product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');

    console.log("My cartCost is", cartCost);
    localStorage.setItem("totalCost", product.price);
    console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems);
    if (cartItems && productContainer) {

        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
                <div class="products">
              <img class="imgs" src ="../images/${item.tag}.jpg">
                   <span style="font-size:30px; font-weight:bolder; color:black;">&nbsp;&nbsp;${item.name}</span>

                     </div>
               <div class="price" style="color:black;"><b>Product Price:- </b>&nbsp;&nbsp; Rs ${item.price}.00
                   </div>
                   <div class="total" style="color:black;"> <b>Quantity:- </b> &nbsp;&nbsp;${item.inCart}</div>
                   <div class="total" style="color:black;"> <b>Total Price:- </b> &nbsp;&nbsp;Rs ${item.inCart * item.price}.00</div><br><br>

                `;
        });
    }

    productContainer.innerHTML += `
             <div class="basketTotalContainer">
           
            <h2 class="basketTotalTitle"><b>Basket Total</b></h4>
            <hr>
            <h3 class="basketTotal"> Rs-${cartCost}.00</h4>
            </div>
              `;

}


onLoadCartNumbers();
displayCart();