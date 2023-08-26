const Person = require("./06-person");

describe("Person", () => {
  let person;
  beforeEach(() => {
    console.log("Begin");
    person = new Person("John", 65, 1.7);
  });

  test("should return down", () => {
    person.weight = 45;
    expect(person.calcIMC()).toBe("down");
  });

  test("should return normal", () => {
    person.weight = 65;
    expect(person.calcIMC()).toBe("normal");
  });
});
