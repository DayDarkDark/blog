function createFlow(iterator = []) {
  return {
    run(cb =() => {}) {
      let stack = Promise.resolve()
      const _n = [...iterator]
      while(_n.length) {
        const current = _n.shift()
        stack = stack.then(
          Array.isArray(current) ?
          createFlow(current).run :
          current.hasOwnProperty('run') ?
            current.run :
            current
        )
      }
      return stack.then(cb)
    }
  }
}