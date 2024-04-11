const obj = {};
console.dir(obj);

const objC = {
  z: 5,
};
console.log(objC);

const objB = Object.create(objC);
objB.y = 3;

console.log(objB);

const objA = Object.create(objB);
objA.x = 7;

console.log(objA);
// не можлsво перезаписати властивість в прототипі...
// objA.z = 1000;

console.log(objA);
console.log(objA.hasOwnProperty('x'));
