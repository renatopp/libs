const { resolve } = require('./resolve')

class Repeat {
  constructor(count, item) {
    this.count = count
    this.item = item
  }

  $_drop() {
    const result = []
    for (let i=0; i<this.count; i++) {
      result.push(resolve(this.item))
    }
    return result
  }

  resolve() {
    return this.$_drop()
  }
}

function repeat(count, item) {
  return new Repeat(count, item)
}

module.exports = {
  Repeat,
  repeat
}