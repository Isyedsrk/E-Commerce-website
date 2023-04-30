let carts = document.querySelectorAll('.cart')


let products = [

    //-----------------------------------------------------------------------MEN`S GROOMING--------------------------------------------------------------//

    {
        name: 'Gillette Gillette Mach 3 Shaving Razor + 1 Shaving Blade/Cartridge, 3 pcs',
        tag: 'mach',
        price: 327,
        inCart: 0
    },

    {
        name: 'Supermax Classic Shaving Foam - Tea Tree Oil Vitamin E Aloe Vera 52, 400 ml',
        tag: 'max',
        price: 87,
        inCart: 0
    },

    {
        name: 'Nivea Men Sensitive After Shave Lotion, 100 ml',
        tag: 'lotion',
        price: 199,
        inCart: 0
    },

    {
        name: 'Nova NHT 1045 Rechargeable Cordless Beard Trimmer for Men - Black, 1 pc',
        tag: 'trimmer',
        price: 348,
        inCart: 0
    },

    {
        name: 'LetsShave Pro 6 Advance Razor Value Kit For Men, 8 pcs (Get Razor Cap + 200 g Shaving Foam Free)',
        tag: 'value',
        price: 944,
        inCart: 0
    },

    {
        name: 'Gillette Guard - Cartridges, 6 pcs Pouch ',
        tag: 'cartridge',
        price: 49,
        inCart: 0
    },

    {
        name: 'BIOTIQUE After Shave Gel - Bio Grass, 120 ml',
        tag: 'grass',
        price: 117,
        inCart: 0
    },

    {
        name: 'LetsShave Imitation Badger Shaving Brush, 1 pc',
        tag: 'brush',
        price: 568,
        inCart: 0
    },

    {
        name: 'Liberty Marine After Shave Spray, 100 ml',
        tag: 'spray',
        price: 1440,
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