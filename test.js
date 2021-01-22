// {a: 1, 'b.c.d':2}

function pparse(target) {
  const result = {}

  traverse(Object.keys(target), result)

  function traverse(arr, temp, value) {
    arr.reduce((obj, key) => {
      if (key.indexOf('.') > - 1) {
        const [first, ...rest] = key.split('.')
        if (!obj[first])obj[first] = {}
        traverse([rest.join('.')], obj[first], value || target[key])
      } else {
        if (value) {
          obj[key] = value
        } else {
          obj[key] = target[key]
        }
        
      }
      return temp
    }, temp)
  }

  return result
}

console.log(pparse({
  a: 1,
  'b.c.d': 2,
  "b.c.e": 6
}))