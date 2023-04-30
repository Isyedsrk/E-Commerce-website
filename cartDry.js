let carts = document.querySelectorAll('.cart')


let products = [
    {
        name: 'FabBox Cashews - Pepper Flavoured, 120 g',
        tag: 'kaju',
        price: 381,
        inCart: 0
    },
    {
        name: 'FabBox Cashews - Green Chilli, 140 g',
        tag: 'kaju1',
        price: 400,
        inCart: 0
    },
    {
        name: 'FabBox Morning Mixed Berries - Dried, Cranberries & Blackberries, 70 g',
        tag: 'fab',
        price: 140,
        inCart: 0
    },
    {
        name: 'Himalayan Natives Quinoa, 450 g',
        tag: 'himalyan',
        price: 152,
        inCart: 0
    },
    {
        name: 'Chandan Jamun Vati, 180 g',
        tag: 'jamun1',
        price: 88,
        inCart: 0
    },
    {
        name: 'Well Known Golden Diamond/Zahadi Dry Dates, 500 g Pouch',
        tag: 'dates',
        price: 193,
        inCart: 0
    },
    {
        name: 'Soulfit Black Raisin, 400 g',
        tag: 'rasin',
        price: 339,
        inCart: 0
    },
    {
        name: 'ASB Royal Flavoured Cashews - Creamy Onion, 250 g',
        tag: 'kaju2',
        price: 370,
        inCart: 0
    },
    {
        name: 'Urban Platter California Almonds, 1 kg',
        tag: 'badam1',
        price: 1045,
        inCart: 0
    },
    {
        name: 'Pro Nature Walnuts, 200 g',
        tag: 'akhrot',
        price: 578,
        inCart: 0
    },
    {
        name: 'bb Royal Dried Fruit - Blackcurrant, 250 g',
        tag: 'black1',
        price: 296,
        inCart: 0
    },
     {
        name: 'Organic Origins Mixed Nuts - Mediterranean Rosemary, 145 g',
        tag: 'mixed',
        price: 270,
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