
let instance = null;

class Cart {
  constructor() {
    if(!instance){
          instance = this;
    }
    return instance;
  }

  items = [];
  selectedSize = [];
  observers = [];

  addCartItem(item) {
    this.items.push(item);
    this.notifyObeservers();
  }

  getCartItems() {
    return this.items;
  }

  addObserver(funcToCall) {
    this.observers.push(funcToCall);
  }

  notifyObeservers() {
    for(var func of this.observers) {
      func(this.items);
    }
  }
}

module.exports =  Cart;
