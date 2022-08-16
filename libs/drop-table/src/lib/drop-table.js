const { resolve } = require('./resolve')

class DropTable {
  constructor(items=[], options={}) {
    this._table = []
    this._totalWeight = 0

    if (!Array.isArray(items)) {
      options = items
      items = []
    }

    this.options = options
    items.forEach(x => this.add(x[0], x[1]))
  }

  add(weight, item) {
    this._table.push({ weight, item })
    this._totalWeight += weight
  }

  drop(options = {}) {
    const c =  (options.count ?? this.options?.count)
    const asList = !!c
    const count = c ?? 1
    const noRepeat = (options.noRepeat ?? this.options?.noRepeat) || false
    const noResolve = (options.noResolve ?? this.options?.noResolve) ?? false

    let table = noRepeat ? Array.from(this._table) : this._table
    let totalWeight = this._totalWeight

    const result = []
    for (let i=0; i<count; i++) {
      const idx = this._pick(table, totalWeight)
      const entry = table[idx]
      
      result.push(noResolve? entry?.item : resolve(entry?.item))

      if (noRepeat) {
        table.splice(idx, 1)
        totalWeight -= entry.weight ?? 0
        if (table.length <= 0) break
      }
    }

    return asList ? result : result[0]
  }

  all() {
    return this._table.map(entry => {
      return resolve(entry.item)
    })
  }

  map(fn) {
    return this._table.map(entry => {
      return fn(entry.item)
    })
  }

  $_drop() {
    return this.drop()
  }

  _pick(table, totalWeight) {
    const ticket = Math.random() * totalWeight;
    
    let sum = 0
    for (let i=0; i<table.length; i++) {
      const entry = table[i]
      sum += entry.weight
      if (ticket < sum) return i
    }
  }
}

module.exports = { DropTable }