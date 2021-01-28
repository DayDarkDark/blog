let start = null 
let requestId = null

requestId = window.requestAnimationFrame(handleTimeout)

function handleTimeout(timestamp) {
  if (!start) start = timestamp
  const progress = timestamp - start
  // 小于指定值
  if (progress < 10000) {
    requestId = window.requestAnimationFrame(handleTimeout)
  } else {
    window.cancelAnimationFrame(requestId)
    start = null
  }
  
}