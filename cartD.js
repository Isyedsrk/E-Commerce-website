let carts = document.querySelectorAll('.cart')


let products = [{
        name: 'MOONG DAL',
        tag: 'moong',
        price: 100,
        inCart: 0
    },

    {
        name: 'TOOR DAL',
        tag: 'TOOR',
        price: 100,
        inCart: 0
    },

    {
        name: 'URAD DAL',
        tag: 'URAD',
        price: 80,
        inCart: 0
    },

    {
        name: 'CHANNA KABULI DAL',
        tag: 'CHANNA',
        price: 80,
        inCart: 0
    },

    {
        name: 'GREEN MOONG SPLIT/CHILKA',
        tag: 'green moong',
        price: 80,
        inCart: 0
    },

    {
        name: 'BAJRA',
        tag: 'BAJRA',
        price: 90,
        inCart: 0
    },

    {
        name: 'RAGI',
        tag: 'RAGI',
        price: 93,
        inCart: 0
    },

    {
        name: 'RAJMA',
        tag: 'RAJMA',
        price: 90,
        inCart: 0
    },

    {
        name: 'MASOOR',
        tag: 'MASOOR',
        price: 70,
        inCart: 0
    },

    {
        name: 'Safe Harvest Mung Split - Pesticide Free',
        tag: 'mung',
        price: 87,
        inCart: 0
    },

    {
        name: 'Super Saver Kashmiri Rajma',
        tag: 'rajma',
        price: 63,
        inCart: 0
    },

    {
        name: 'ASB Royal Navaratan Dal',
        tag: 'nav',
        price: 109,
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
              <img src ="../images/${item.tag}.jpg">
                   <span>${item.name}</span>

                     </div>
               <div class="price">${item.price}
                   </div>
                   <div class="total">Rs-${item.inCart * item.price},00</div>

                `;
        });
    }

    productContainer.innerHTML += `
             <div class="basketTotalContainer">
           
            <h4 class="basketTotalTitle">Basket Total</h4>
            <hr>
            <h4 class="basketTotal">Rs-${cartCost},00</h4>
            </div>
              `;

}


onLoadCartNumbers();
displayCart();