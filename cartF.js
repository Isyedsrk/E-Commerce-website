let carts = document.querySelectorAll('.cart')


let products = [
    {
        name: 'ITC Master Chef Classic Aloo Tikki',
        tag: 'itc',
        price: 68,
        inCart: 0
    },

    {
        name: 'Mothers Recipe Mix - Poha',
        tag: 'poha',
        price: 55,
        inCart: 0
    },

    {
        name: 'ITC Master Chef Crispy French Fries',
        tag: 'french',
        price: 80,
        inCart: 0
    },

    {
        name: 'MTR Ready To Eat - Dal Makhani',
        tag: 'dal',
        price: 93,
        inCart: 0
    },

    {
        name: 'ITC Master Chef Mumbai Vada Pops',
        tag: 'pops',
        price: 123,
        inCart: 0
    },

    {
        name: 'Mothers Recipe Instant Mix - Upma',
        tag: 'upma',
        price: 45,
        inCart: 0
    },

    {
        name: 'Top Ramen Noodles - Curry Veg',
        tag: 'cury',
        price: 60,
        inCart: 0
    },

    {
        name: 'Aashirvaad Instant Mix - Rava Idli',
        tag: 'rava1',
        price: 110,
        inCart: 0
    },

    {
        name: 'Kitchens Of India Ready to Eat - Chicken Chettinad',
        tag: 'chicken1',
        price: 175,
        inCart: 0
    },

    {
        name: 'PRISTINE Beginnings - Organic Corn Flakes',
        tag: 'cornflakes',
        price: 130,
        inCart: 0
    },

    {
        name: 'MTR Breakfast Mix - Dosa',
        tag: 'dosa',
        price: 100,
        inCart: 0
    },

    {
        name: 'Sumeru Masala French Fries - Chilli Garlic',
        tag: 'chilli',
        price: 125,
        inCart: 0
    },

     {
        name: 'Sumeru Masala Chicken Pops - Peri Peri',
        tag: 'piri',
        price: 125,
        inCart: 0
    },

    {
        name: 'Sumeru Veg Baked Paratha Lasagne',
        tag: 'veg',
        price: 149,
        inCart: 0
    },

    {
        name: 'Gits Ready Mix - Gulabjamun',
        tag: 'jamun',
        price: 91,
        inCart: 0
    },

    {
        name: 'MTR Breakfast Mix - Rice Idli',
        tag: 'idli1',
        price: 100,
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