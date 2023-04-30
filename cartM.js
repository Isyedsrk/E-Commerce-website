let carts = document.querySelectorAll('.cart')


let products = [
    //---------------------------------------------------MAKEUP----------------------------------------------------------------------------//
    {
        name: 'SINDOOR',
        tag: 'sindoor',
        price: 1300,
        inCart: 0
    },

    {
        name: 'KAJAL',
        tag: 'kajal',
        price: 150,
        inCart: 0
    },

    {
        name: 'CC CREAM',
        tag: 'cc cream',
        price: 220,
        inCart: 0
    },

    {
        name: 'NAIL POLISH REMOVER',
        tag: 'remover',
        price: 110,
        inCart: 0
    },

    {
        name: 'BB FAIRNESS CREAM',
        tag: 'bb cream',
        price: 190,
        inCart: 0
    },

    {
        name: 'Bronson Professional Beauty Blender Makeup Sponge-1pc ',
        tag: 'sponge',
        price: 86,
        inCart: 0
    },

    {
        name: 'Blue heaven Matte Effect Compact With Sunscreen - Universal Shade, 16 g',
        tag: 'compact',
        price: 70,
        inCart: 0
    },

    {
        name: 'LA girl Eyeliner Pencil, 1.3 g Black',
        tag: 'pencil',
        price: 68,
        inCart: 0
    },
     {
        name: 'ZUII ORGANIC Flora Duo Eyeshadow Palette, 3.5 g Vibe',
        tag: 'eye',
        price: 368,
        inCart: 0
    }

    //----------------------------------------------------------------SKIN CARE-----------------------------------------------//

   
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