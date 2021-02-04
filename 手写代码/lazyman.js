class LazyMan {
  constructor() {
    this.queue = []
  
    Promise.resolve()
      .then(() => {
        this.run()

      })
  }
  async run () {
    for (let i of this.queue) {
      await i()
    }
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