var longestCommonPrefix = function(strs) {
  if(strs.length == []){
    return ""
  }
  // strs.sort((a, b) => a.length - b.length)
  let std = strs[0]
  let pre = ''
  for (let i = 0 ; i < std.length; i ++) {
    if (strs.every(a => a[i] == std[i])) {
      pre += std[i]
    } else {
      break
    }
  }
  return pre
}
console.log(longestCommonPrefix(["abab","aba","abc"]))

// console.log(longestCommonPrefix(["flower","flow","flight"]))