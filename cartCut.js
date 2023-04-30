let carts = document.querySelectorAll('.cart')


let products = [

    //----------------------------------------------------------------------------CUTS & SPROUTS----------------------------------------------------------------------//

    {
        name: 'Fresho Garlic - Peeled, 3x100 g Multipack',
        tag: 'lasan',
        price: 114,
        inCart: 0
    },
    {
        name: 'Tadaa Sweet Corn Kernels - Naturally Steamed, 350 g',
        tag: 'tadaa',
        price: 80,
        inCart: 0
    },

    {
        name: 'Fresho Baby Corn - Peeled, 250 g',
        tag: 'baby',
        price: 53,
        inCart: 0
    },
    {
        name: 'Fresho Sprouts - Mixed Gram, 200 g',
        tag: 'sprouts',
        price: 24,
        inCart: 0
    },

    {
        name: 'Fresho Yam - Cut, 250 g',
        tag: 'yam',
        price: 24,
        inCart: 0
    },
    {
        name: 'Fresho Pumpkin Green - Cut, 500 g',
        tag: 'pumpkin',
        price: 16,
        inCart: 0
    },

    {
        name: 'Fresho Dry Copra/Coconut, 1 pc Approx. 100-125 gm',
        tag: 'gola',
        price: 105,
        inCart: 0
    },
    {
        name: 'Supa Corn Sweet Corn - Desi Masala, 150 g',
        tag: 'desi',
        price: 59,
        inCart: 0
    },

    {
        name: 'Supa Corn Sweet Corn Kernels - Achari Masti, 150 g',
        tag: 'achari',
        price: 52,
        inCart: 0
    },
    {
        name: 'Fresho Pineapple - Slices, 200 g',
        tag: 'pine',
        price: 31,
        inCart: 0
    },

    {
        name: 'Fresho Sambar Onion - Peeled, 200 g',
        tag: 'pyaaz1',
        price: 48,
        inCart: 0
    },
    {
        name: 'Fresho Broccoli - Florets, 200 g',
        tag: 'brocoli',
        price: 48,
        inCart: 0
    },

    {
        name: 'Fresho Cut Cauliflower, Washed, 300 g',
        tag: 'gobhi',
        price: 21,
        inCart: 0
    },
    {
        name: 'Fresho Sugarcane - Diced, 200 g',
        tag: 'ganna',
        price: 20,
        inCart: 0
    },

    {
        name: 'resho Coriander Leaves - Chopped, 100 g',
        tag: 'dhania',
        price: 17,
        inCart: 0
    },
    {
        name: 'Fresho Pomegranate - Peeled, 200 g',
        tag: 'anar1',
        price: 157,
        inCart: 0
    },

    {
        name: 'Fresho Papaya- Diced, 200 g',
        tag: 'papita1',
        price: 36,
        inCart: 0
    },
    {
        name: 'Fresho Carrots - Grated, 200 g',
        tag: 'gajar',
        price: 14,
        inCart: 0
    },

    {
        name: 'Fresho Muskmelon - Diced, 200 g',
        tag: 'kharbooj1',
        price: 28,
        inCart: 0
    },
    {
        name: 'Fresho Beetroot - Diced, 200 g',
        tag: 'beetroot',
        price: 12,
        inCart: 0
    },

    {
        name: 'Fresho Ladies Finger - Diced, 200 g',
        tag: 'bhindi',
        price: 38,
        inCart: 0
    },
    {
        name: 'Fresho Banana - Raw, Sliced, 200 g',
        tag: 'kela',
        price: 27,
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