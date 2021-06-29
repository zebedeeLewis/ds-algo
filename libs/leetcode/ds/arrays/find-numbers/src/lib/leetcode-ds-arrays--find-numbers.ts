type numberOfDigitsIter
  =  (n: number)
  => number
export const numberOfDigitsIter: numberOfDigitsIter
  = n => {
    let _n = n
    let c = 1
    while(_n/10 >= 1) {
      c = c+1
      _n = _n/10
    }

    return c
  }


type numberOfDigits
  =  (c: number)
  => (n: number)
  => number
export const numberOfDigits: numberOfDigits
  = c => n => (
    n/10 < 1
    ? c
    : numberOfDigits(c+1)(n/10)
  )


type hasEvenDigits
  =  (n: number)
  => boolean
export const hasEvenDigits: hasEvenDigits
  = n => numberOfDigits(1)(n)%2 === 0


/**
 * Given an array nums of integers, return how many of them contain an even
 * number of digits.
 */
type findNumbers
  =  (nn: number[])
  => number
export const findNumbers: findNumbers
  = nn => nn.reduce((a, n) => (
    hasEvenDigits(n) ? a+1 : a
  ), 0)
