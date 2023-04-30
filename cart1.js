let carts = document.querySelectorAll('.cart')


let products = [
    //----------------------------------------------------FRESHNERS & REPELNENTS------------------------------------------------------------------//

    {
        name: 'Good knight Power Activ+ - Mosquito Repellent Refill, 270 ml (Pack of 6)',
        tag: 'mosquito',
        price: 367,
        inCart: 0
    },

    {
        name: 'Odonil Bathroom Air Freshener Blissful Citrus 10g + Vim Dishwash Gel Lemon 500ml, Combo 2 Items',
        tag: 'odonil',
        price: 147,
        inCart: 0
    },


    {
        name: 'Home Naphthalene Balls, 100 g Pouch',
        tag: 'ball',
        price: 20,
        inCart: 0
    },


    {
        name: 'HIT Cockroach Killer Spray, 700 ml',
        tag: 'hit',
        price: 227,
        inCart: 0
    },


    {
        name: 'Aer Pocket - Bathroom Air Fragrance, 10 g (Assorted Pack of 3)',
        tag: 'air',
        price: 136,
        inCart: 0
    },


    {
        name: 'Bodyguard Herbal Fabric Roll On With Citronella & Lemongrass Oil, 10 ml (Pack of 3)',
        tag: 'roller',
        price: 198,
        inCart: 0
    },


    {
        name: 'Good knight Naturals Fly Spray, 150 ml',
        tag: 'surface',
        price: 299,
        inCart: 0
    },


    {
        name: 'Bodyguard Natural Mosquito Repellent Cream With Aloe Vera & Neem Extracts, 100 g',
        tag: 'cream',
        price: 98,
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