//Set following to true to generate fake cart for testing
let cartFullTest = false

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

//Form Input Limiters (via Cleave.js)

var cleave = new Cleave('#zip1', {
    delimiters: ["-"],
    blocks: [5, 4],
    numericOnly: true
});

var cleave = new Cleave('#zip2', {
    delimiters: ["-"],
    blocks: [5, 4],
    numericOnly: true
});

var cleave = new Cleave('#cardnumber', {
    creditCard: true,
    onCreditCardTypeChanged: function(type) {
        let cardicon = document.querySelector("#cardicon")
        if (type === "amex") cardicon.innerHTML = `<i class="fa fa-cc-amex"></i>`
        else if (type === "mastercard") cardicon.innerHTML = `<i class="fa fa-cc-mastercard"></i>`
        else if (type === "visa") cardicon.innerHTML = `<i class="fa fa-cc-visa"></i>`
        else if (type === "discover") cardicon.innerHTML = `<i class="fa fa-cc-discover"></i>`
        else cardicon.innerHTML = ""
    }
});

var cleave = new Cleave('#cvc', {
    blocks: [3],
    numericOnly: true
});

//Form Submission and Validation
// let buyButton = document.getElementById("buy")
// buyButton.addEventListener("click", function() {
//     preventDefault()
// })