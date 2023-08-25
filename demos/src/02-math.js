function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}

function promedio(a, b) {
  return (a + b) / 2;
}

function resta(a, b) {
  return a - b;
}

function potencia(a, b) {
  return a ** b;
}

function raiz(a) {
  return a ** 0.5;
}

function exponencial(a) {
  return Math.exp(a);
}

module.exports = {
  sum,
  multiply,
  divide,
  promedio,
  resta,
  potencia,
  raiz,
  exponencial,
};
