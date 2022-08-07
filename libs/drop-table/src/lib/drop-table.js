class DropTable {
  constructor() {
    this._table = []
    this._totalWeight = 0
  }

  add(weight, data) {
    this._table.push({ weight, data })
    this._totalWeight += weight
  }

  drop(count=1, options) {
    if (count > 1) return this.__drop(count)
    return this.__dropOne()
  }

  __drop(count) {
    const result = []
    for (let i=0; i<count; i++) {
      result.push(this.__dropOne())
    }
    return result
  }

  __dropOne(table) {
    const ticket = Math.random() * this._totalWeight;
    let sum = 0
    for (let i=0; i<this._table.length; i++) {
      const element = this._table[i]
      sum += element.weight
      if (ticket < sum) return element.data
    }
  }

  __dropWithReplacement(count) {
    const tempTable = Array.from(this.table)
    tempTable

    const ticket = Math.random() * this._totalWeight;
    let sum = 0
    for (let i=0; i<this._table.length; i++) {
      const element = this._table[i]
      sum += element.weight
      if (ticket < sum) return element.data
    }
  }
}

module.exports = { DropTable }