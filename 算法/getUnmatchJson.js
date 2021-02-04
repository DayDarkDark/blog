let getUnmatchJson = function (s) {
  let map = {
    '{' : '}',
    '(' : ')',
    '[' : ']'
  }
  let stack = []
  let brackets = '{[()]}'
  let result = {}
  for (let i = 0; i< s.length; i++) {
    // 如果不是括号，跳过
    if (brackets.indexOf(s[i]) === -1) continue
    if(map[s[i]]) {
      // 如果是左括号，则进栈
      stack.push({
        char: s[i],
        index: i
      })
    } else {
      // 如果是右括号，则出栈匹配
      if(!stack.length) {
        // 如果栈为null，则表示没有匹配的左括号，则当前有括号直接进结果数组
        result[i] = s[i]
        continue
      }
      // 出栈
      let temp = stack.pop()
      // 括号不匹配
      if (s[i] !== map[temp.char]) {
        result[temp.index] = temp.char
        i --
      }
    }
  }

  // 如果匹配结束，依然有剩余的左括号，则直接进结果数组
  while(stack.length) {
    let temp = stack.pop()
    result[temp.index] = temp.char
  }
  return result
}





let getUnmatchJson = function(s) {
  let map = {
      '{': '}',
      '(': ')',
      '[': ']'
  }
  let stack = [], 
      brackets = '{[()]}', 
      result = {}
  for(let i = 0; i < s.length ; i++) {
      // 如果不是括号，跳过
      if(brackets.indexOf(s[i]) === -1) continue
      // 如果是左括号，则进栈
      if(map[s[i]]) {
          stack.push({
              char: s[i],
              index: i
          })
      } else {
          // 如果是右括号，则出栈匹配
          if(!stack.length) {
              //如果栈为 null ，则表示没有匹配的左括号，则当前有括号直接进结果数组
              result[i] = s[i]
              continue
          }
          // 出栈
          let temp = stack.pop()
          // 括号不匹配
          if (s[i] !== map[temp.char]) {
              // 不匹配左括号进结果数组，并i--，继续匹配当前字符
              result[temp.index] = temp.char
              i --
          }
      }
  }
  // 如果匹配结束，依然有剩余的左括号，则直接进结果数组
  while(stack.length) {
      let temp = stack.pop()
      result[temp.index] = temp.char
  }
  return result
};