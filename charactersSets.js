// 1 - Match one character from a bunch of characters 
let str = 'Make the outline for the square gray and the fill for the circle grey.'
let re = /gr[ae]y/g
//console.log(str.match(re)) // [ 'gray', 'grey' ]

// 1.1 - All the vowels 
str = 'Make the outline for the square gray and the fill for the circle grey.'
re = /[aeiou]/g
//console.log(str.match(re)) // ['a', 'e', 'e', 'o', 'u','i', 'e', 'o', 'e', 'u','a',...,'e'] 

// 1.2 Multiples sets
str = 'Make the outline for the square gray and the fill for the circle grey.'
re = /[rh][abcde][ i]/g
//console.log(str.match(re)) // [ 'he ', 'he ', 're ', 'he ', 'he ' ]

// 2 - Range in characters set
str = 'Make the outline for the square gray and the fill for the circle grey.'
re = /[rh][a-e][ i]/g
//console.log(str.match(re)) // [ 'he ', 'he ', 're ', 'he ', 'he ' ]

// 2.1 - Range of numbers
str = 'There have been 4 - 5 times I have tried , but I will try it again'
re = /[1-7]/g
//console.log(str.match(re)) // [ '4', '5' ]

// 2.1 - Range of alphanumeric characters
str = 'There have been 4 - 5 times I have tried , but I will try it again'
re = /[1-7a-zA-Z -,]/g
//console.log(str.match(re)) // Everything

// 3 - Excluding characters set
str = 'Exception 0xF89F'
re = /0x[^0-9A-F][0-9A-F]/g
console.log(str.match(re)) // null


