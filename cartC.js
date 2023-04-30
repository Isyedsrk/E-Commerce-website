let carts = document.querySelectorAll('.cart')


let products = [
 {
        name: 'Bru Instant Coffee',
        tag: 'bru',
        price: 254,
        inCart: 0
    },

    {
        name: 'Tata Coffee Grand Filter Coffee',
        tag: 'tata',
        price: 161,
        inCart: 0
    },

    {
        name: 'ID Traditional Filter Coffee Decoction',
        tag: 'id',
        price: 80,
        inCart: 0
    },

    {
        name: 'Bru Filter Coffee - Green Label',
        tag: 'bru2',
        price: 138,
        inCart: 0
    },

    {
        name: 'Tata Coffee Grand Coffee',
        tag: 'tata2',
        price: 88,
        inCart: 0
    },

    {
        name: 'Cothas Coffee',
        tag: 'coffee',
        price: 216,
        inCart: 0
    },

    {
        name: 'Levista Premium Coffee',
        tag: 'coffee2',
        price: 170,
        inCart: 0
    },

    {
        name: 'Nescafe Classic Coffee',
        tag: 'nescafe',
        price: 255,
        inCart: 0
    },

    {
        name: 'Nescafe Gold Blend Instant Coffee Powder - Rich & Smooth',
        tag: 'gold2',
        price: 855,
        inCart: 0
    },

    {
        name: 'Davidoff Coffee - Fine Aroma',
        tag: 'fine',
        price: 550,
        inCart: 0
    },

    {
        name: 'Davidoff Coffee - Rich Aroma',
        tag: 'fine2',
        price: 480,
        inCart: 0
    },

    {
        name: 'Cothas Coffee Coffee - Powder, Extra Strong',
        tag: 'cothas',
        price: 185,
        inCart: 0
    },

    {
        name: 'Cothas Coffee Coffee - Powder, Premium Special',
        tag: 'cothas2',
        price: 210,
        inCart: 0
    },

    {
        name: 'Nescafe Sunrise Instant Coffee - Chicory Mixture',
        tag: 'nescafe2',
        price: 59,
        inCart: 0
    },

    {
        name: 'Continental Malgudi Filter Coffee Pouch - 80:20',
        tag: 'fresh',
        price: 95,
        inCart: 0
    },

    {
        name: 'Bayars Coffee - Eighty Degree',
        tag: 'coffee3',
        price: 84,
        inCart: 0
    },

    {
        name: 'Continental Xtra Coffee Pouch',
        tag: 'coffee4',
        price: 115,
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