module.exports = {
  resolve(item) {
    return item?.$_drop? item.$_drop() : item
  }
}