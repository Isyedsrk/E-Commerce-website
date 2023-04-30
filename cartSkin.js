let carts = document.querySelectorAll('.cart')


let products = [
    //----------------------------------------------------------------SKIN CARE-----------------------------------------------//

    {
        name: 'Himalaya Purifying Neem Face Wash, 300 ml',
        tag: 'neem face wash',
        price: 237,
        inCart: 0
    },

    {
        name: 'BIOTIQUE Bio Papaya - Revitalizing Tan Removal Scrub, 75 g',
        tag: 'papaya',
        price: 149,
        inCart: 0
    },


    {
        name: 'Vlcc Gold Facial Kit, 60 g',
        tag: 'vlcc',
        price: 504,
        inCart: 0
    },

    {
        name: 'Himalaya Himalaya Nourishing Skin Cream, 200 ml',
        tag: 'skin',
        price: 165,
        inCart: 0
    },

    {
        name: 'Dabur Gulabari Premium Rose Water - Paraben Free Skin Toner, 250 ml',
        tag: 'rose',
        price: 52,
        inCart: 0
    },


    {
        name: 'Himalaya Rich Cocoa Butter Body Cream, 200 ml',
        tag: 'rich',
        price: 202,
        inCart: 0
    },


    {
        name: 'Soulflower Cold Pressed Virgin Coconut Oil For Hair & Skin Moisturisation, 225 ml',
        tag: 'moisture',
        price: 117,
        inCart: 0
    },

    {
        name: 'Vlcc Cocoa Butter Detan Glow Body Lotion SPF 30 PA+++',
        tag: 'detan',
        price: 359,
        inCart: 0
    },

    {
        name: 'Natures Essence Lacto Tan Clear, 100 g',
        tag: 'tan',
        price: 148,
        inCart: 0
    },

    {
        name: 'Natures Essence Bridal Glow Facial Kit, 5 pcs',
        tag: 'facial kit',
        price: 320,
        inCart: 0
    },

    {
        name: 'Dabur Red Indias No.1 Ayurvedic Fluroide Free Paste, 200 g',
        tag: 'redpaste',
        price: 320,
        inCart: 0
    }

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