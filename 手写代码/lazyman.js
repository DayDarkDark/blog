class LazyMan {
  
  constructor() {
    this.queue = []
    Promise.resolve()
      .then(() => {
        let temp = Promise.resolve()
        this.queue.forEach(item => {
          temp = temp.then(item)
        })
      })
  }

  eat(meal) {
    this.queue.push(() => {
      console.log(`eat ${meal}`)
    })
    return this
  }

  sleep(time) {
    this.queue.push(() => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, time * 1000);
      })
    })
    return this
  }
}
const u = new LazyMan()

u.eat('dinner').sleep(3).eat('breakfast')