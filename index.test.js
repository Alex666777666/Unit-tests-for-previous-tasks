import { reverseArray, withdraw, getAdults } from './calculator'

it(`should return null if it's not array`, () => {
  const result = reverseArray(12)
  expect(result).toEqual(null)
})

it(`should reverse array`, () => {
  const result = reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9])
  expect(result).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1])
})

it(`should return -1 if it's not enough money`, () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)
  expect(result).toEqual(-1)
})

it(`should return the rest if there is enough money`, () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)
  expect(result).toEqual(37)
})

it(`should return all persons who have reached the age of majority and older`, () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 })
})
