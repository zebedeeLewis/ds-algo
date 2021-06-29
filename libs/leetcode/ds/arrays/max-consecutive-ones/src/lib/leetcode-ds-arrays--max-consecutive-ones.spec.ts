import * as S from './leetcode-ds-arrays--max-consecutive-ones'

describe('maxConsecutiveOnes()', () => {
  it( 'produces the maximum number of consecutive ones in the given number '
    + 'array', () => {
      // Arrange
      const expected = [3, 2]

      // Act
      const actual = [
        S.maxConsecutiveOnes([1,1,0,1,1,1]),
        S.maxConsecutiveOnes([1,0,1,1,0,1]),
      ]

      // Assert
      expect(actual).toEqual(expected)
    }
  )
})

describe('isOne()', () => {
  it('produces true if the given binary digit is a 1.', () => {
    // Arrange
    const expected = [
      true,
      false,
    ]

    // Act
    const actual = [
      S.isOne(1),
      S.isOne(0),
    ]
    // Assert
    expect(actual).toEqual(expected)
  })
})

describe('incAndSetLargest()', () => {
  it( 'increment the consecutive attirbute of the given ConsecutiveCounter '
    + 'by 1.'
    , () => {
      // Arrange
      const consecutive = 3
      const expected = consecutive + 1

      // Act
      const actual = S.incAndSetLargest({
        consecutive,
        maxConsecutive: 6,
      }).consecutive

      // Assert
      expect(actual).toEqual(expected)
    }
  )

  it( 'sets "maxConsecutive" to the value of "consecutive" if "consecutive" '
    + 'is larger.'
    , () => {
      // Arrange
      const consecutive = 8
      const expected = consecutive+1

      // Act
      const actual = S.incAndSetLargest({
        consecutive,
        maxConsecutive: 6,
      }).maxConsecutive

      // Assert
      expect(actual).toEqual(expected)
    }
  )

  it( 'leaves "maxConsecutive" as is if value of "consecutive" is smaller '
    + 'or equal.'
    , () => {
      // Arrange
      const consecutive = 3
      const maxConsecutive = 5
      const expected = [
        5,
        8,
      ]

      // Act
      const actual = [
        S.incAndSetLargest({
          consecutive: 3,
          maxConsecutive: 5,
        }).maxConsecutive,
        S.incAndSetLargest({
          consecutive: 7,
          maxConsecutive: 7,
        }).maxConsecutive,
      ]

      // Assert
      expect(actual).toEqual(expected)
    }
  )
})

describe('setLargestAndReset()', () => {
  it('it resets the "consecutive" attribute of the given  '
    + 'ConsecutiveCounter to 0.'
    , () => {
      // Arrange
      const expected = 0

      // Act
      const actual = S.setLargestAndReset({
				consecutive: 8,
				maxConsecutive: 3,
			}).consecutive

      // Assert
      expect(actual).toEqual(expected)
    }
  )

  it( 'sets "maxConsecutive" to the value of "consecutive" if "consecutive" '
    + 'is larger.'
    , () => {
      // Arrange
      const consecutive = 8
      const expected = consecutive

      // Act
      const actual = S.setLargestAndReset({
        consecutive,
        maxConsecutive: 6,
      }).maxConsecutive

      // Assert
      expect(actual).toEqual(expected)
    }
  )
})
