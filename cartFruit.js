let carts = document.querySelectorAll('.cart')


let products = [
    //-----------------------------------------------------------------------FRUITS---------------------------------------------------------------------------//

    {
        name: 'Fresho Banganapalli Mango',
        tag: 'mango',
        price: 179,
        inCart: 0
    },
    {
        name: 'Fresho Tomato - Local, Organically Grown',
        tag: 'tomato',
        price: 22,
        inCart: 0
    },
    {
        name: 'Fresho Coconut - Medium',
        tag: 'coconut',
        price: 32,
        inCart: 0
    },
    {
        name: 'Fresho Banana - Yelakki',
        tag: 'banana',
        price: 55,
        inCart: 0
    },
    {
        name: 'Fresho Tender Coconut - Medium',
        tag: 'coconut1',
        price: 32,
        inCart: 0
    },
    {
        name: 'Fresho Pomegranate, 6 pcs (approx. 1.08 - 1.2 kg)',
        tag: 'anar',
        price: 255,
        inCart: 0
    },
    {
        name: 'Fresho Grapes - Sonaka Seedless',
        tag: 'grape',
        price: 211,
        inCart: 0
    },
    {
        name: 'Fresho Watermelon - Small',
        tag: 'tarbooj',
        price: 20,
        inCart: 0
    },
    {
        name: 'Fresho Apple - Red Delicious / Washington, Regular',
        tag: 'apple',
        price: 358,
        inCart: 0
    },
    {
        name: 'Fresho Apple - Shimla',
        tag: 'shimla',
        price: 119,
        inCart: 0
    },
    {
        name: 'Fresho Papaya - Medium',
        tag: 'papita',
        price: 46,
        inCart: 0
    },
    {
        name: 'Fresho Sapota, 500 g',
        tag: 'cheeku',
        price: 30,
        inCart: 0
    },
    {
        name: 'Fresho Pear - Green, Imported, 4 pcs',
        tag: 'pear',
        price: 175,
        inCart: 0
    },
    {
        name: 'Fresho Orange - Imported, 6 pcs',
        tag: 'santra',
        price: 195,
        inCart: 0
    },
    {
        name: 'Fresho Apple Shimla 4 pcs + Banana Robusta 1 kg + Watermelon Small + Papaya Medium 1 pc, Combo 4 Items',
        tag: 'value1',
        price: 205,
        inCart: 0
    },
    {
        name: 'Fresho Kiwi - Green, 3 pcs',
        tag: 'kiwi',
        price: 72,
        inCart: 0
    },
    {
        name: 'Fresho Dragon Fruit, 1 pc 220-350g',
        tag: 'dragon',
        price: 89,
        inCart: 0
    },
    {
        name: 'Fresho Totapuri Mango, 500 gm',
        tag: 'totapari',
        price: 70,
        inCart: 0
    },
    {
        name: 'Fresho Pineapple, 1 pc 750-800',
        tag: 'ananas',
        price: 30,
        inCart: 0
    },
    {
        name: 'Fresho Dates - Kimia, with Seed, 1 pc (Approx. 400g - 500g)',
        tag: 'khajoor',
        price: 219,
        inCart: 0
    },
    {
        name: 'Fresho Muskmelon - Netted Small, 1 pc 550g-900g',
        tag: 'kharbooj',
        price: 38,
        inCart: 0
    },
    {
        name: 'Fresho Coconut - Diced, 150 g',
        tag: 'coconut2',
        price: 44,
        inCart: 0
    },
    {
        name: 'Fresho Sun Melon, 1 pc 700 g - 1.5 kg',
        tag: 'melon',
        price: 43,
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