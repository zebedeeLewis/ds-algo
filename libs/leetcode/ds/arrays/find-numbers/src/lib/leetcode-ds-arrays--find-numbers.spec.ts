import * as S from './leetcode-ds-arrays--find-numbers'

describe('findNumbers()', () => {
  it('produces the number of numbers in the given array contain an even '
    + 'an even number of digits.'
    , () => {
      // Arrange
      const expected = [2, 1]

      // Act
      const actual = [
        S.findNumbers([12,345,2,6,7896]),
        S.findNumbers([555,901,482,1771]),
      ]

      // Assert
      expect(actual).toEqual(expected)
    }
  )
})

describe('hasEvenDigits()', () => {
  it( 'produces true if the given number has an even number of digits', () => {
    const expected = [
      true,
      false
    ]

    const actual = [
      S.hasEvenDigits(33),
      S.hasEvenDigits(2222222),
    ]

    expect(actual).toEqual(expected)
  })
})


describe('numberOfDigits()', () => {
  it( 'produces the numbr of digits in the given number.', () => {
    const expected = [
      2,
      7,
      1,
      3,
    ]

    const actual = [
      S.numberOfDigits(1)(33),
      S.numberOfDigits(1)(2222222),
      S.numberOfDigits(1)(4),
      S.numberOfDigits(1)(437),
    ]

    expect(actual).toEqual(expected)
  })
})


describe('numberOfDigitsIter()', () => {
  it( 'produces the numbr of digits in the given number.', () => {
    const expected = [
      2,
      7,
      1,
      3,
    ]

    const actual = [
      S.numberOfDigitsIter(33),
      S.numberOfDigitsIter(2222222),
      S.numberOfDigitsIter(4),
      S.numberOfDigitsIter(437),
    ]

    expect(actual).toEqual(expected)
  })
})
