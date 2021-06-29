type ConsecutiveCounter = {
  maxConsecutive: number
  consecutive: number
}


/** produces true if the given binary number is a one. */
type isOne
  =  (n: number)
  => boolean
export const isOne: isOne
  = n => Math.abs(n) > 0


/** increment the current consecutive counter by 1 */
type incAndSetLargest
  =  (cc: ConsecutiveCounter)
  => ConsecutiveCounter
export const incAndSetLargest: incAndSetLargest
  = cc => ({
    maxConsecutive: (
      cc.consecutive+1 > cc.maxConsecutive ? cc.consecutive+1 : cc.maxConsecutive
    ),
    consecutive: cc.consecutive+1,
  })


/** sets the max */
type setLargestAndReset
  =  (cc: ConsecutiveCounter)
  => ConsecutiveCounter
export const setLargestAndReset: setLargestAndReset
  = cc => ({
    maxConsecutive: (
      cc.consecutive > cc.maxConsecutive ? cc.consecutive : cc.maxConsecutive
    ),
    consecutive: 0,
  })


/**
 * given a binary array nums, return the maximum number of consecutive 1's in
 * the array.
 *
 * Constraints:
 *   - 1 <= nums.length <= 105
 *   - nums[i] is either 0 or 1.
 */
type maxConsecutiveOnes
  =  (nn: number[])
  => number
export const maxConsecutiveOnes: maxConsecutiveOnes
  = nn => nn.reduce((cc, n) => (
    isOne(n) ? incAndSetLargest(cc) : setLargestAndReset(cc)
  ), {consecutive: 0, maxConsecutive: 0}).maxConsecutive
