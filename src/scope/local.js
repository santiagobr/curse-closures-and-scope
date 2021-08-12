const helloWorld = () => {
  const hello = 'Hello World'
  console.log(hello)
}

helloWorld() // --> Hello World
console.log(hello) // --> ReferenceError: hello is not defined

// ANOTHER EXAMPLE

var scope = 'i am global'

const functionScope = () => {
  var scope = 'i am just a local'
  const func = () => {
    return scope // --> 'i am just a local, esto se debe al campo léxico'
  }
  console.log(func())
}

functionScope()