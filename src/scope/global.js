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

// Otra mala práctca: Permite acceder a una variable que está dentro de una función

// const anotherFunction2 = () => {
//   var localVar = globalVar = 'Im global'
// }

// anotherFunction2()
// console.log(globalVar) // --> Im global

// Este ejemplo muestra una variable "localVar" declarada con la palabra reservada "var", pero define otra variable dentro de ella sin ninguna de las palabras reservadas, por lo tanto al ejecutar la funcion anotherFunction2() se puede acceder a la variable "globalVar"

