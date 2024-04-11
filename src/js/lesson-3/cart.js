const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }
    const newProduct = {
      ...product,
      quantity: 1,
    };
    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;
    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];
      if (name === productName) {
        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
    // const { items } = this;
    // for (let i = 0; i < items.length; i += 1) {
    //   items.splice(0);
    // }
  },
  countTotalPrice() {
    const { items } = this;
    let totalPrise = 0;
    for (const { prise, quantity } of items) {
      totalPrise += prise * quantity;
    }
    return totalPrise;
  },
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

console.log(cart.getItems());

cart.add({ name: 'lemon', prise: 50 });
cart.add({ name: 'apple', prise: 70 });
cart.add({ name: 'apple', prise: 70 });
cart.add({ name: 'grape', prise: 30 });
cart.add({ name: 'berries', prise: 60 });
cart.add({ name: 'berries', prise: 60 });
cart.add({ name: 'berries', prise: 60 });

console.log(cart.getItems());
console.table(cart.getItems());
// console.log('Total:', cart.countTotalPrice());
// cart.remove('grape');
// cart.clear();
console.log('Total:', cart.countTotalPrice());
console.log(cart.items);
