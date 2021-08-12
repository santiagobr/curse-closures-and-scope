var hello = 'Hello'
var hello = 'Hello +'
let world = 'Hello World'
// let world = 'Hello' -- No se puede re-definir una variable con let y const
const helloWorld = 'Hello World!'

const anotherFunction = () => {
  console.log(hello)
  console.log(world)
  console.log(helloWorld)
}

anotherFunction()

// Mala práctica: Permite acceder a una variable que esta dentro de una función

// const helloWorld = () => {
//   globalVar = 'Im global'
// }

// helloWorld()
// console.log(globalVar)

// En este caso al llamar a la función helloWorld() la variable que está dentro de esta puede ser llamada porque no se definio con ninguna palabra clave como var, let ó const.

const anotherFunction2 = () => {
  var localVar = globalVar = 'Im global'
}

anotherFunction2()
console.log(globalVar)