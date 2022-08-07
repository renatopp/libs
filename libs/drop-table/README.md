# Drop Tables

A simple drop table:

```javascript
const weapons = new DropTable()
weapons.add(1, 'sword')
weapons.add(1, 'hammer')
weapons.add(1, 'axe')

weapons.drop() // ex: axe
weapons.drop(2) // ex: [sword, hammer] -- may repeat values
weapons.drop(2, { noRepeat: true }) // ex: [sword, hammer] -- cannot repeat
```

Chain:

```javascript
const treasures = new DropTable()
treasures.add(3, weapons)
treasures.add(1, exoticWeapons)
treasures.add(2, armors)
treasures.add(1, potions)
treasures.add(1, scrolls)

treasures.drop() // ex: scroll of protection
treasures.drop(2) // ex: [healing potion, strength potion] -- may repeat the category
treasures.drop(2, { noRepeat: true }) // ex: [healing potion, sword] -- cannot repeat the same category
```

Picking multiple items from same category:

```javascript
treasures
  .drop({ raw: true })
  .drop(2, { noRepeat: true })
```

Extending:
```javascript
class BagPouch {
  constructor(min=0, max=100) {
    this._min = min
    this._max = max
  }

  $_drop() {
    return `Gold x${random(0, 100)}`
  }
}

const goldLoot = new DropTable()
goldLoot.add(1, new BagPouch(0, 10))

goldLoot.drop(5) //ex: [4, 8, 10, 2, 2]
```

Creation shortcuts
```javascript
const goblinLoot = new DropTable([
  [1, new DropTable([
    [1, 'sword'],
    [1, 'axe'],
    [1, 'hammer'],
    [5, null]
  ])],
  [1, new GoldPouch(0, 10)]
])

goldLoot.dropAll() // [null, 3]
goldLoot.dropAll() // [sword, 10]
```



DropTables > Random infinite source of elements
Deck > Random finite set of elements

