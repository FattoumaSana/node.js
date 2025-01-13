
const generator = require("generate-password");

const password = generator.generate({
  length: 20,
  numbers: true,
  symbols: true,
});

console.log("Generated Password:", password);