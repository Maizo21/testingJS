//matchers
test("test obj", () => {
  const data = {
    one: 1,
    two: 2,
  };
  expect(data).toEqual({
    one: 1,
    two: 2,
  });
});

test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("string", () => {
  expect("Christoph").toMatch(/stop/);
});

test("array", () => {
  const shoppingList = ["diapers", "kleenex", "trash bags", "paper towels", "beer"];
  expect(shoppingList).toContain("beer");
});
