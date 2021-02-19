const a = [['a','b'],['m','n'],['0',"1"]]
// am0 am1 an0 an1 bm0 bm1 bn0 bn1
function allProbably(arr) {
  const result = []
  const _back = (temp, index, currentList) => {
    if (index >= temp.length) {
      result.push([...currentList])
    } else {
      temp[index].forEach(item => {
        currentList.push(item)
        _back(temp, index + 1, currentList)
        currentList.pop()
      })
    }
  }
  _back(arr, 0, [])
  return result
}
console.log(allProbably(a))

const findAll = arr => {
  return arr.reduce((total, current) => {
    if (!total.length) {
      return current
    }
    if (!current.length) {
      return total
    }
    const result = []
    for (let i = 0; i < total.length; i++) {
      for (let j = 0; j < current.length; j++) {
        result.push(`${total[i]}${current[j]}`)
      }
    }
    return result
  }, [])
}


const findAll = arr => {
  const result = []
  const _back = (temp, index, current) => {
    if (index >= temp.length) {
      result.push([...current])
    } else {
      temp.forEach(item => {
        current.push(item)
        _back(temp, index + 1, current)
        current.pop()
      })
    }
  }
}