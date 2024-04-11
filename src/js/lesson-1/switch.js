// Інструкція switch
// Межі застосування switch обмежені задачами з одним загальним запитанням (що порівнювати) і рядом варіантів відповідей (з чим порівнювати).

// Для порівняння використовується оператор строгої рівності ===

let cost;
const subscription = 'premium';

switch (subscription) {
  case 'free':
    cost = 0;
    break;

  case 'pro':
    cost = 500;
    break;

  case 'premium':
    cost = 1000;
    break;

  default:
    console.log('Invalid subscription type');
}

console.log(cost); // 500

// приклад

let person;
let age = 12;

switch (age) {
  case 3:
    person = 'baby';
    break;

  case 12:
    person = 'teenager';
    break;

  case 18:
    person = 'yunger';
    break;

  case 20:
    person = 'adult';
    break;

  default:
    person = 'Invalid subscription type';
}

console.log(person);
