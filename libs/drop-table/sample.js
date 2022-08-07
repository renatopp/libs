// import { DropTable } './src/index.js'
const { DropTable } = require('./src')

const weapons = new DropTable()
weapons.add(1, 'sword')
weapons.add(1, 'hammer')
weapons.add(1, 'axe')

console.log(weapons.drop(2))