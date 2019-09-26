const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });
  
  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });

  test("returns 118.8 when passed 99", () => {
    expect(utils.addVAT(99)).toBe(118.8);
  });
});

describe("utils.getFullName", () => {
  test("returns Haruki Murakami when passed Haruki and Murakami", () => {
    expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
  });
});

describe("utils.makeHalfPrice", () => {
  test("returns 20 when passed 10", () => {
    expect(utils.makeHalfPrice(20)).toBe(10);
  });
});

describe("utils.countBooks", () => {
  test("returns 3 when passed Harry Potter, Lord of the Rings and Brazil", () => {
    expect(utils.countBooks(["Harry Potter", "Lord of the Rings", "Brazil"])).toBe(3);
  });
});

test("returns true if the book is in stock", () => {
  const book = {
    title: "Lord of the Rings",
    author: "J.R.R. Tokien",
    yearOfPublication: 1954,
    quantity: 3
  };
  expect(utils.isInStock(book)).toBe(true);
});

describe("utils.getTotalOrderPrice", () => {
  test("returns price 10 and quantity 5 when passed 60", () => {
    expect(utils.getTotalOrderPrice(10, 5)).toBe(60);
  });
});