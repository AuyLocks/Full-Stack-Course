const x = 1
let y = 5
console.log(x,y)
y += 10
console.log(x,y)
y="sometext"
console.log(x,y)
// x = 4
// trying to reassign a new value to x will throw an error since variable was declared using cosnt
// const are not allow to be reassigned.

const t= [1, -1, 3]
t.push(5)

console.log(t.length)
console.log(t[1])

t.forEach(value =>{
  console.log(value) // will print each number in a new line
})

const t2 = t.concat(5) // concat does not add an element into an array, instead it creates a new array

console.log(t2)

const m1 = t.map(value => value*2) // based on the old array, maps creates a new array
console.log(m1)

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)

const t3 = [1,2,3,4,5]
const [first, second, ...rest] = t3
console.log(first, second)