function greet(name) {
  return `Hello ${name}`;
}

const greetArrow = name => {
  return `Welcome ${name}`;
};

const shortGreeting = name => `Hi ${name}`;

console.log(greet('Sean'));
console.log(greetArrow('Alex'));
console.log(shortGreeting('Taylor'));
