const add = (a, b) => a + b;
const generateGretting = (name) => `Hello, ${name}`;


test("should add two numbers", () => {
  const result = add(10, 5);
  expect(result).toBe(15);
});

test("should return Hello", () => {
  const result = generateGretting("Marcos");
  expect(result).toBe("Hello, Marcos");
});