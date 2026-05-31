const products = [
  { id: 1, name: 'Keyboard', price: 120 },
  { id: 2, name: 'Mouse', price: 60 },
  { id: 3, name: 'Monitor', price: 450 }
];

const productNames = products.map(
  product => product.name
);

const expensiveProducts = products.filter(
  product => product.price > 100
);

const total = products.reduce(
  (sum, product) => sum + product.price,
  0
);

console.log(productNames);
console.log(expensiveProducts);
console.log(total);
