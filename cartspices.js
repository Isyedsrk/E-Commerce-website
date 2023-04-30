let carts = document.querySelectorAll('.cart')


let products = [{
        name: 'Everest Powder - Turmeric',
        tag: 'haldi',
        price: 54,
        inCart: 0
    },

    {
        name: 'Everest Powder - Tikhalal Chilli',
        tag: 'chilli1',
        price: 86,
        inCart: 0
    },

    {
        name: 'Everest Powder - Kashmirilal',
        tag: 'chilli2',
        price: 135,
        inCart: 0
    },

    {
        name: 'Everest Kasuri Methi',
        tag: 'kasuri',
        price: 350,
        inCart: 0
    },

    {
        name: 'Everest Powder - Cumin',
        tag: 'cumin',
        price: 51,
        inCart: 0
    },

    {
        name: 'Everest Powder - Green Coriander',
        tag: 'cori',
        price: 56,
        inCart: 0
    },

    {
        name: 'Everest Powder - Black Pepper',
        tag: 'black',
        price: 150,
        inCart: 0
    },

    {
        name: 'Everest Powder - Hingraj',
        tag: 'hing',
        price: 160,
        inCart: 0
    },

    {
        name: 'Everest Powder - Jaljira',
        tag: 'jal',
        price: 50,
        inCart: 0
    },

    {
        name: 'Everest Powder - White Pepper',
        tag: 'white',
        price: 105,
        inCart: 0
    },

    {
        name: 'Everest Masala - Garam',
        tag: 'garam',
        price: 148,
        inCart: 0
    },

    {
        name: 'Everest Chhole Masala,',
        tag: 'chhole',
        price: 63,
        inCart: 0
    },

    {
        name: 'Everest Chaat Masala',
        tag: 'chaat',
        price: 62,
        inCart: 0
    },

    {
        name: 'Everest Masala - Chicken',
        tag: 'chicko',
        price: 143,
        inCart: 0
    },

    {
        name: 'Everest Masala - Tandoori',
        tag: 'tandoori',
        price: 143,
        inCart: 0
    },

    {
        name: 'Everest Pav Bhaji Masala',
        tag: 'pav',
        price: 66,
        inCart: 0
    },

    {
        name: 'Everest Masala - Shahi Paneer',
        tag: 'sahi',
        price: 42,
        inCart: 0
    },

    {
        name: 'Everest Masala - Kitchen King',
        tag: 'king',
        price: 300,
        inCart: 0
    },

    {
        name: 'Everest Masala - Tea',
        tag: 'tea1',
        price: 98,
        inCart: 0
    },

    {
        name: 'Everest Pani Puri Masala',
        tag: 'pani',
        price: 31,
        inCart: 0
    },

    {
        name: 'Everest Sabji Masala',
        tag: 'sabji',
        price: 29,
        inCart: 0
    },

    {
        name: 'Everest Masala - Shahi Biryani',
        tag: 'biryani',
        price: 70,
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