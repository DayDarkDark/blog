function to36(num) {
  const pos = 36

  const target = []

  while (num >= 1) {
    let one = parseInt(num % pos) 
    target.unshift(one)
    num = parseInt(num / pos) 
  }

  return target
}