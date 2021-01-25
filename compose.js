function compose(middlewares){
  return function wrap(ctx) {
    let index = -1
    function dispatch(i) {
      index = i
      const fn = middlewares[i]

      if (!fn) {
        return Promise.resolve()
      }

      return Promise.resolve(
        fn(
          ctx, () => dispatch(i + 1)
        )
      )
    }
    return dispatch(0)
  }
}