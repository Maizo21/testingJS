const { sum, multiply, divide, raiz, resta, exponencial, potencia, promedio } = require("./02-math");

test("adds 1 + 2 to equal 3", () => {
  const rta = sum(1, 2);
  expect(rta).toBe(3);
});

test("multiply 2 * 3 to equal 6", () => {
  const rta = multiply(2, 3);
  expect(rta).toBe(6);
});

test("divide 6 / 3 to equal 2", () => {
  const rta = divide(6, 3);
  expect(rta).toBe(2);
  const rta2 = divide(6, 0);
  expect(rta2).toBe(null);
});

test("raiz 4 to equal 2", () => {
  const rta = raiz(4);
  expect(rta).toBe(2);

  const rta2 = raiz(9);
  expect(rta2).toBe(3);
});

test("resta 4 - 2 to equal 2", () => {
  const rta = resta(4, 2);
  expect(rta).toBe(2);

  const rtaNegativa = resta(2, 4);
  expect(rtaNegativa).toBe(-2);
});

test("exponencial 2 to equal 7.38905609893065", () => {
  const rta = exponencial(2);
  expect(rta).toBe(7.38905609893065);
});

test("potencia 2 to equal 4", () => {
  const rta = potencia(2, 2);
  expect(rta).toBe(4);
});

test("promedio 2 to equal 4", () => {
  const rta = promedio(2, 2);
  expect(rta).toBe(2);
});
