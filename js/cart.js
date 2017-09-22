//Shopping Cart holds Cart Items (array of objects)
var shoppingCart = []

//Shopping Cart Items Class
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