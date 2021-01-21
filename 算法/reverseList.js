function reverseList(head) {
  if(!head || !head.next) return head

  let pre = null
  let cur = head
  let next
  while (cur) {
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return cur
}