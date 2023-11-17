test("The truth", () => {
  let b = true
  expect(b).toBe(true);
});

test("The lie", () => {
  let b = false
  expect(b).toBe(true);
});