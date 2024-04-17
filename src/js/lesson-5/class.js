'use strict';

class Car1 {
  static dealer = 'GM';

  static logInfo(carObj) {
    console.log('🚀 ~ Car1 ~ carOb:', carObj);
  }

  #carID = 'F150haj8695';
  #privatProperties = 'test';

  constructor(config = {}) {
    const { brand, model, price, color, id } = config;
    this.brand = brand;
    this._model = model;
    this.color = color;
    this.price = price;
  }

  changePrise(newPrice) {
    this.price = newPrice;
  }

  get model() {
    return this._model;
  }

  set model(newModel) {
    this._model = newModel;
  }

  get id() {
    return this.#carID;
  }
}

console.dir(Car1);

const carInstant = new Car1({
  brand: 'Ford',
  model: 'F150',
  color: 'black',
  price: 42300,
});
console.log(carInstant.id);
console.log(carInstant.model);
Car1.logInfo(carInstant);
console.log(carInstant);
carInstant.model = 'F150 Raptor';
console.log(carInstant.model);
console.log(carInstant);

//---------------- Наслідування ------------

class Hero {
  constructor({ name = 'hero', xp = 0 } = {}) {
    this.name = name;
    this.xp = xp;
  }
  gainXp(amount) {
    console.log(`${this.name} get ${amount} expiriens`);
    this.xp += amount;
  }
}

class Warrior extends Hero {
  constructor({ weapon, ...restProps } = {}) {
    super({ restProps }); //визов конструктора функції Hero

    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} attack with ${this.weapon}`);
  }
}

class Mage extends Hero {
  constructor({ spells = [], ...restProps } = {}) {
    super({ restProps });
    this.spells = spells;
  }
  cast() {
    console.log(`${this.name} do something there 🥶😱`);
  }
}
const erik = new Warrior({ name: 'Erik', xp: 100, weapon: 'alibarda' });
console.log(erik);
erik.attack();
erik.gainXp(38);
console.log(erik);

const siroja = new Mage({
  name: 'Siroja',
  xp: 200,
  spells: ['fireboll', 'iceboll'],
});

console.log(siroja);
siroja.cast();
siroja.gainXp(876);

class Berserk extends Warrior {
  constructor({ warcry, ...restProps } = {}) {
    super(restProps);
    this.warcry = warcry;
  }
  babyRage() {
    console.log(this.warcry);
  }
}

const matvii = new Berserk({
  name: 'Matvii',
  xp: 900,
  weapon: 'axe',
  warcry: 'waaaaaaaa',
});
matvii.babyRage();
matvii.attack();
matvii.gainXp(1000);
console.log(matvii);

console.log(erik.__proto__ === Warrior.prototype);
console.log(Object.getPrototypeOf(erik) === Warrior.prototype);
console.log('🚀 ~ Warrior.prototype:', Warrior.prototype);
console.log(Warrior.prototype.__proto__ === Hero.prototype);

console.log(Hero.prototype.__proto__ === Object.prototype);
