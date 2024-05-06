// Метод JSON.stringify()  --Приймає значення і перетворює його у JSON

const dog = {
  name: 'Mango',
  age: 3,
  isHappy: true,
};

console.log(dog);

const dogJson = JSON.stringify(dog);
console.log(typeof dogJson);
console.log(dogJson);

// Метод JSON.parse() -  Це операція зворотна перетворенню в рядок

const dogObj = JSON.parse(dogJson);
console.log(dogObj);
console.log(dogJson === dogObj);
