let cartFullTest = true

//Store items database; item's ID is index in array 
let itemDatabase = [
    {
        product: "Flyweight Jersey",
        price: 125
    },
    {
        product: "Flyweight Rib Shorts",
        price: 235
    },
    {
        product: "Pro Team Lightweight Vest",
        price: 140
    }
]

//Shopping Cart holds Cart Items
var shoppingCart = []

//Cart Items Class
class cartItem {
    constructor(prodId, quantity = 1) {
        this._prodId = prodId
        this._quantity = quantity
    }

    get prodId() {
        return this._prodId
    }

    get quantity() {
        return this._quantity
    }

    setQuantity(newQuantity) {
        this._quantity = newQuantity
    }
}

//Create test shopping cart
if (cartFullTest) {
    let item1 = new cartItem(0, 2)
    let item2 = new cartItem(2, 1)
    shoppingCart = [item1, item2]
}

//Display Cart on Webpage
function displayCart() {
    let cartShown = document.querySelector(".cart")
    if (shoppingCart.length > 0) { //Display full cart
        let total = 0
        let list = `
            <table class="table table-sm">
                <thead>
                    <tr class="table-danger">
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>`
        for (let i = 0; i < shoppingCart.length; i++) {
            let itemTotal = shoppingCart[i].quantity * itemDatabase[shoppingCart[i].prodId].price
            total += itemTotal
            list += `<tr class="table-light"><td>`
            list += itemDatabase[shoppingCart[i].prodId].product
            list += `</td><td>`
            list += shoppingCart[i].quantity
            list += `</td><td>`
            list += `$${itemTotal}`
            list += `</td></tr>`
        }
        list += `<tr class="table-light"><td></td><td><b>TOTAL</b></td><td>`
        list += `$${total}`
        list += `</td></tr></tbody>
        </table>`
        cartShown.innerHTML = list 
    } else { //display empty message
        cartShown.innerHTML = "<p>Your shopping cart is currently empty. How sad...</p>"
    }
}

displayCart()

//Process Form
// let buyButton = document.getElementById("buy")
// buyButton.addEventListener("click", function() {
//     preventDefault()
// })