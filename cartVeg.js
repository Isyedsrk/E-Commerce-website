let carts = document.querySelectorAll('.cart')


let products = [
    //----------------------------------------------------------------------VEGGIES--------------------------------------------------------------//

    {
        name: 'Fresho Onion, 1 kg',
        tag: 'pyaaz',
        price: 137,
        inCart: 0
    },

    {
        name: 'Fresho Potato, 1 kg',
        tag: 'aloo',
        price: 26,
        inCart: 0
    },


    {
        name: 'Fresho Palak, 100 g',
        tag: 'palak',
        price: 9,
        inCart: 0
    },

    {
        name: 'Fresho Mushrooms - Button, 1 pack (Approx .180g - 200 g)',
        tag: 'mushroom',
        price: 44,
        inCart: 0
    },


    {
        name: 'Fresho Tomato - Local, Organically Grown, 500 g',
        tag: 'tamatar',
        price: 32,
        inCart: 0
    },

    {
        name: 'Fresho Sweet Corn, 2 pcs',
        tag: 'bhuta',
        price: 33,
        inCart: 0
    },


    {
        name: 'Fresho Methi/Venthaya Keerai, 100 g',
        tag: 'methi',
        price: 11,
        inCart: 0
    },

    {
        name: 'Fresho Cucumber - English, 500 g',
        tag: 'kheera',
        price: 26,
        inCart: 0
    },


    {
        name: 'Fresho Ladies Finger + Beans French Ring + Carrot Local + Capsicum Green (500 g each), Combo 4 Items',
        tag: 'value2',
        price: 96,
        inCart: 0
    },

    {
        name: 'Fresho Spring Onion, 100 g',
        tag: 'onion',
        price: 14,
        inCart: 0
    },


    {
        name: 'Fresho Drumstick/Moringa, 250 g',
        tag: 'drumsticks',
        price: 49,
        inCart: 0
    },

    {
        name: 'ASB Combo Fresho Palak Without Root 250Gm + Gowardhan Fresh Paneer Classic Block 200Gm, Combo (2 Items)',
        tag: 'PP',
        price: 94,
        inCart: 0
    },



    {
        name: 'Fresho Bottle Gourd - Organically Grown, 1 pc',
        tag: 'ghia',
        price: 26,
        inCart: 0
    },

    {
        name: 'Fresho Amla, 250 g',
        tag: 'amla',
        price: 38,
        inCart: 0
    },



    {
        name: 'Fresho Beans - French, Round, 250 g',
        tag: 'beans',
        price: 23,
        inCart: 0
    },

    {
        name: 'Fresho Baby Potato, 500 g',
        tag: 'aloo1',
        price: 22,
        inCart: 0
    },



    {
        name: 'Fresho Pumpkin - Organically Grown, 1 pc',
        tag: 'sita',
        price: 30,
        inCart: 0
    },

    {
        name: 'Fresho Basale Leaf, 250 g',
        tag: 'leaf1',
        price: 12,
        inCart: 0
    },


    {
        name: 'Fresho Colocasia, 250 g',
        tag: 'arbi',
        price: 15,
        inCart: 0
    },

    {
        name: 'Fresho Papaya - Raw, 1 kg',
        tag: 'papaya1',
        price: 32,
        inCart: 0
    },


    {
        name: 'Fresho Lettuce - Iceberg, 1 pc (Approx. 250g-500g)',
        tag: 'ice',
        price: 32,
        inCart: 0
    },

    {
        name: 'Fresho Pumpkin - Disco, 1 pc',
        tag: 'pump',
        price: 26,
        inCart: 0
    },


    {
        name: 'Fresho Zucchini - Green, 500 g',
        tag: 'green1',
        price: 30,
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