let carts = document.querySelectorAll('.cart')


let products = [   

    //-----------------------------------------------------------DETERGENTS----------------------------------------------------------------------//

    {
        name: 'Ariel Detergent Washing Powder - Matic Front Load, 2 kg ',
        tag: 'arial',
        price: 355,
        inCart: 0
    },

    {
        name: 'Surf Excel Matic Front Load Detergent Powder ',
        tag: 'detergent',
        price: 338,
        inCart: 0
    },


    {
        name: 'Tide Ultra Anti-Germ Detergent Washing Powder, 1 kg ',
        tag: 'tide',
        price: 160,
        inCart: 0
    },


    {
        name: 'Wheel Detergent Powder - Lemon & Orange, 1 Kg ',
        tag: 'wheel',
        price: 153,
        inCart: 0
    },


    {
        name: 'Henko Detergent Powder - Stain Care, 3 kg Get 1 kg free ',
        tag: 'henko',
        price: 404,
        inCart: 0
    },


    {
        name: ' Rin Machine Expert Detergent Powder, 3 kg',
        tag: 'rin',
        price: 325,
        inCart: 0
    },


    {
        name: 'Ariel Matic 3-in-1 PODs Detergent Pack ',
        tag: 'liquid',
        price: 410,
        inCart: 0
    },

    {
        name: 'Surf Excel Liquid Detergent - Matic, Front Load, 1 L ',
        tag: 'matic',
        price: 202,
        inCart: 0
    },

    {
        name: 'Ezee Liquid Detergent - Winterwear, Chiffon & Silks, 1 kg ',
        tag: 'eze',
        price: 161,
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