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
// var print = (arrayList) => {

//   var [left, right, ...restArrayList] = arrayList

//   function zip(leftArray, rightArray) {
//       var res = []
//       for (var leftLetter of leftArray) {
//           for (var rightLetter of rightArray) {
//               res.push(leftLetter + rightLetter)
//           }
//       }
//       return res
//   }

//   if (restArrayList.length === 0) {
//       return zip(left, right)
//   } else {
//       const newLeftArray = zip(left, right)
//       return print([newLeftArray, ...restArrayList])
//   }
// }
