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

var cardDigits = 16 //need to keep cleave card size global for form validation

var cleave = new Cleave('#cardnumber', {
    creditCard: true,
    onCreditCardTypeChanged: function(type) {
        let cardicon = document.querySelector("#cardicon")
        if (type === "amex") {
            cardicon.innerHTML = `<i class="fa fa-cc-amex"></i>`
            cardDigits = 15
        } else if (type === "mastercard") {
            cardicon.innerHTML = `<i class="fa fa-cc-mastercard"></i>`
            cardDigits = 16
        } else if (type === "visa") {
            cardicon.innerHTML = `<i class="fa fa-cc-visa"></i>`
            cardDigits = 16
        } else if (type === "discover") {
            cardicon.innerHTML = `<i class="fa fa-cc-discover"></i>`
            cardDigits = 16
        } else cardicon.innerHTML = ""
    }
});

var cleave = new Cleave('#cvc', {
    blocks: [3],
    numericOnly: true
});

//Copy Shipping to Billing
let copyCheckbox = document.getElementById("copy")
copyCheckbox.addEventListener("change", function(event) {
    let firstname1 = document.querySelector("#shipping-billing #firstname1")
    let lastname1 = document.querySelector("#shipping-billing #lastname1")
    let company1 = document.querySelector("#shipping-billing #company1")
    let address1 = document.querySelector("#shipping-billing #address1")
    let address2 = document.querySelector("#shipping-billing #address2")
    let city1 = document.querySelector("#shipping-billing #city1")
    let state1 = document.querySelector("#shipping-billing #state1")
    let zip1 = document.querySelector("#shipping-billing #zip1")
    let firstname2 = document.querySelector("#shipping-billing #firstname2")
    let lastname2 = document.querySelector("#shipping-billing #lastname2")
    let company2 = document.querySelector("#shipping-billing #company2")
    let address3 = document.querySelector("#shipping-billing #address3")
    let address4 = document.querySelector("#shipping-billing #address4")
    let city2 = document.querySelector("#shipping-billing #city2")
    let state2 = document.querySelector("#shipping-billing #state2")
    let zip2 = document.querySelector("#shipping-billing #zip2")
    if (event.target.checked) { //copy shipping to billing
        firstname2.value = firstname1.value
        lastname2.value = lastname1.value
        company2.value = company1.value
        address3.value = address1.value
        address4.value = address2.value
        city2.value = city1.value
        state2.value = state1.value
        zip2.value = zip1.value
    } else if (!event.target.checked) { //reset billing
        firstname2.value = ""
        lastname2.value = ""
        company2.value = ""
        address3.value = ""
        address4.value = ""
        city2.value = ""
        state2.value = ""
        zip2.value = ""        
    }
})

//Form Submission and Validation
let form = document.getElementById("shipping-billing")
let message = document.getElementById("message")
form.addEventListener("submit", function() {
    event.preventDefault()
    if(form.checkValidity() == false) {
        event.stopPropagation()
        //Display error message
        message.innerHTML = "<b>Some information is missing. Please review items highlighted in red.</b>"
        message.classList = "fail"
        //Display invalid fields
        form.classList.add("was-validated")
    } else {
        //Display success message
        message.innerHTML = "<b>Your order has been successfully completed!</b>"
        message.classList = "pass"
        //Remove Purchase button
        let button = document.querySelector("#buy")
        button.parentNode.removeChild(button)
        //Hide errors and reset form
        form.classList.remove("was-validated")
        form.reset()
    }
}, false)
