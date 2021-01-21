var findLengthOfLCIS = function (n) {
  if (n.length === 0) return 0
  let array = new Array(n.length).fill(1)
  for (let i = 1; i < n.length; i++ ) {
    for (let j = 0; j < i; j++) {
      if (n[i] > n[j]) {
        array[i] = Math.max(array[i], 1 + array[j])
      }
    }
  }

  console.log(array[i])
}