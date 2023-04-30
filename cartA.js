let carts = document.querySelectorAll('.cart')


let products = [{
        name: 'LAILA-WHOLE WEAT ATTA',
        tag: 'laila atta',
        price: 100,
        inCart: 0
    },

    {
        name: 'ASHIRWAD-WHOLE WEAT ATTA',
        tag: 'ashirwad',
        price: 100,
        inCart: 0
    },

    {
        name: 'SRI SRI-WHOLE WEAT ATTA',
        tag: 'sri sri',
        price: 60,
        inCart: 0
    },

    {
        name: 'SOOJI-GOLDEN HARVEST',
        tag: 'sooji',
        price: 100,
        inCart: 0
    },

    {
        name: 'MAIDA-SHAKTI BHOG',
        tag: 'maida1',
        price: 90,
        inCart: 0
    },

    {
        name: 'RICE FLOUR ',
        tag: 'rice1 ',
        price: 80,
        inCart: 0
    },

    {
        name: 'RAJDHANI BESAN',
        tag: 'besan',
        price: 50,
        inCart: 0
    },

    {
        name: 'BROKEN WHEAT DALIYA',
        tag: 'daliya1',
        price: 68,
        inCart: 0
    },

    {
        name: 'PATHIRI PODI ',
        tag: 'pathiri1',
        price: 53,
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