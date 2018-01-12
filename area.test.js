const getArea = require('./area.js');

test('area of 2 x 3 to equal 6', () => {
  a = [2,3]
  expect(getArea(a)).toBe(6);
});

test('area of 2 x -3 to equal -1', () => {
  a = [2,-3]
  expect(getArea(a)).toBe(-1);
});

test('area of 2 x "ciao" to equal -1', () => {
  a = [2,"ciao"]
  expect(getArea(a)).toBe(-1);
});

test('area of 2 to equal -1', () => {
  expect(getArea(2)).toBe(-1);
});

test('area of 0 x 0 to equal 0', () => {
  a = [0,0]
  expect(getArea(a)).toBe(0);
});

test('area of 1 x 1 to equal 1', () => {
  a = [1,1]
  expect(getArea(a)).toBe(1);
});

test('area of -1 x -1 to equal -1', () => {
  a = [-1,-1]
  expect(getArea(a)).toBe(-1);
});