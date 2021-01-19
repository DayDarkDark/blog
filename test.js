

const a = {'a': 10, 'b.c.d': 11}

function parsesp(obj) {
  let res = {}
  o.forEach(key => {
    if (key.includes('.')) {
      let temp = key.split('.')
      let key1 = temp.shift()
      console.log(o, r, temp)
      r[key1] = {}
      parse(temp.join('.'), r[key1])
      
    } else {
      r[key] = obj[key]
    }
  })
  parse(Object.keys(obj), res)

  function parse (o, r) {

    o.forEach(key => {

    })
  }
  console.log(res)

}


parsesp(a)