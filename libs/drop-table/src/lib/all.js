const { resolve } = require('./resolve')

class All {
  constructor(items) {
    this.items = items
  }

  $_drop() {
    return this.items.map(resolve)
  }

  resolve() {
    return this.$_drop()
  }
}

function all(...items) {
  return new All(items)
}

module.exports = {
  All,
  all
}