var findLengthOfLCIS = function (n) {
  if (n.length === 0) return 0

  let d = 0
  let max= 1

  for (let i = 1; i < n.length; i++) {
    if (n[i] > n[i - 1]) {
      max = Math.max(i - d + 1, max)
    } else {
      d = i
    }
  }
  return max
}


findLengthOfLCIS([0, 3, 4, 17, 2, 8, 6, 10])