let carts = document.querySelectorAll('.cart')


let products = [{
        name: 'Sunfeast Dark Fantasy Biscuits - Cookies - Choco Fills',
        tag: 'dark',
        price: 82,
        inCart: 0
    },

    {
        name: 'Britannia Bourbon Chocolate Cream Biscuits',
        tag: 'burbon',
        price: 25,
        inCart: 0
    },

    {
        name: 'Open Secret Choco Almond Nutty Cookies - Box of 2 Cookies',
        tag: 'secret',
        price: 35,
        inCart: 0
    },

    {
        name: 'Cadbury Oreo Dipped Cookie',
        tag: 'oreo',
        price: 58,
        inCart: 0
    },

    {
        name: 'Sunfeast Farmlite Digestive High Fibre Biscuits',
        tag: 'sunfeast',
        price: 138,
        inCart: 0
    },

    {
        name: 'Sunfeast Mom',
        tag: 'mom',
        price: 84,
        inCart: 0
    },

    {
        name: 'Dukes Waffy Choco Roll',
        tag: 'waffy',
        price: 75,
        inCart: 0
    },

    {
        name: 'RiteBite Max Protein 7 Grain Breakfast Cookie - Oats & Raisins, Soft & Chewy',
        tag: 'max1',
        price: 38,
        inCart: 0
    },

    {
        name: 'RiteBite Max Protein 7 Grain Breakfast Cookie - Choco Chips, Soft & Chewy',
        tag: 'max2',
        price: 408,
        inCart: 0
    },

    {
        name: 'Sunfeast Dark Fantasy - Luxuria Choco Fills Biscuits - Cookies',
        tag: 'dark1',
        price: 60,
        inCart: 0
    },

    {
        name: 'PARLE-G',
        tag: 'parle',
        price: 62,
        inCart: 0
    },

    {
        name: 'Cadbury Oreo Creme Biscuit - Vanilla, Original',
        tag: 'oreo1',
        price: 28,
        inCart: 0
    },

    {
        name: 'Parle Hide & Seek - Chocolate',
        tag: 'hide',
        price: 60,
        inCart: 0
    },

    {
        name: 'Sunfeast Marie Light Biscuits-Rich Taste',
        tag: 'marie',
        price: 20,
        inCart: 0
    },

    {
        name: 'Dukes Biscuits - Salted',
        tag: 'nibble',
        price: 41,
        inCart: 0
    },

     {
        name: 'Sunfeast Dark Fantasy Biscuits - Cookies - Choco Fills, 300 g',
        tag: 'burbon',
        price: 41,
        inCart: 0
    },

    {
        name: 'Open Secret Choco Almond Nutty Cookies - Box of 2 Cookies, 25 g',
        tag: 'secret',
        price: 41,
        inCart: 0
    },

     {
        name: 'Cadbury Oreo Dipped Cookie, 150 g',
        tag: 'oreo',
        price: 41,
        inCart: 0
    },

     {
        name: 'Sunfeast Farmlite Digestive High Fibre Biscuits, 1 Kg',
        tag: 'sunfeast',
        price: 41,
        inCart: 0
    },

    {
        name: 'Sunfeast Mom Magic Cookies - Cashew & Almond, 600 g Pouch',
        tag: 'mom',
        price: 41,
        inCart: 0
    },

    {
        name: 'Dukes Waffy Choco Roll',
        tag: 'waffy',
        price: 41,
        inCart: 0
    },

    {
        name: 'RiteBite Max Protein 7 Grain Breakfast Cookie - Oats & Raisins, Soft & Chewy',
        tag: 'max1',
        price: 41,
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