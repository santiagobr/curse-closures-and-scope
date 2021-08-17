// const moneyBox = (coins) => {
//   var saveCoins = 0
//   saveCoins += coins
//   console.log(`MoneyBox: $${saveCoins}`)
// }

// moneyBox(5)
// moneyBox(10) // --> No guarda los elementos que se le asignaron anteriormente.


const moneyBox = () => {
  var saveCoins = 0
  const countCoins = (coins) => {
    saveCoins += coins
    console.log(`MoneyBox: $${saveCoins}`)
  }
  return countCoins
}

let myMoneyBox = moneyBox()

myMoneyBox(4) // --> MoneyBox: 4
myMoneyBox(6) // --> MoneyBox: 10
myMoneyBox(10) // --> MoneyBox: 20