//Set following to true to generate fake cart for testing
let cartFullTest = true

//Create test shopping cart
if (cartFullTest) {
    let item1 = new cartItem(0, 2)
    let item2 = new cartItem(2, 1)
    shoppingCart = [item1, item2]
}

//Display Cart on Checkout Page
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
            list += `
                <tr class="table-light">
                    <td>
                        ${itemDatabase[shoppingCart[i].prodId].product}
                    </td>
                    <td>
                        ${shoppingCart[i].quantity}
                    </td>
                    <td>
                        $${itemTotal}.00
                    </td>
                </tr>`
        }
        list += `<tr class="table-light">
                    <td>
                    </td>
                    <td>
                        <b>TOTAL</b>
                    </td>
                    <td>
                        $${total}.00
                    </td>
                </tr>
            </tbody>
        </table>`
        cartShown.innerHTML = list 
    } else { //display cart empty message
        cartShown.innerHTML = "<p>Your shopping cart is currently empty. How sad...</p>"
    }
}

displayCart()

//Process Form
// let buyButton = document.getElementById("buy")
// buyButton.addEventListener("click", function() {
//     preventDefault()
// })