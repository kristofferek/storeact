
let instance = null;

class Cart {
  cart = [];
  observers = [];

  constructor() {
    if(!instance){
          instance = this;
          this.cart = {itemData: [], itemSizes: [], size: 0};
    }
    return instance;
  }

  addCartItem(item, size) {
    if (!this.cart.itemSizes[item._id]) {
      this.cart.itemData.push(item)
      this.cart.itemSizes[item._id] = []
    }
    this.cart.itemSizes[item._id].push(size)
    this.cart.size++;
    this.notifyObeservers();
  }

  getCartItems() {
    return this.cart;
  }

  addObserver(funcToCall) {
    this.observers.push(funcToCall);
  }

  notifyObeservers() {
    for(var func of this.observers) {
      func(this.cart);
    }
  }
}

module.exports =  Cart;
