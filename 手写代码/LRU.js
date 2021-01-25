class LRU {
  constructor(max) {
    this.max = max
    this.cache = new Map()
  }
  get(key) {
    const { cache } = this
    const value = cache.get(key)
    if (!value) return -1
    cache.delete(key)
    cache.set(key, value)
    return value
  }
  set(key, value) {
    const { cache, max } = this
    if (cache.has(key)) {
      cache.delete(key)
    }
    if (cache.size == max) {
      cache.delete(cache.keys().next().value())
    }
    cache.set(key, value)
  }
}