// 1 - Wildcard
let str = 'how it that so hot? h@t h   t h t'
let re = /h.t/sg
//console.log(str.match(re)) // [ 'hat', 'hot', 'h@t', 'h t' ]

//2 - Escape
str = 'this could be the final word.'
re = /d./g
//console.log(str.match(re)) // [ 'd ', 'd.' ]

re = /d\./g
//console.log(str.match(re)) // [ 'd.' ]

str = 'this could\ be the final word.'
re = /d\\/g
//console.log(str.match(re)) // this doesn't work and I don't know why

//3 - Control characters
str = 'this could\t be the final word.  '
re = /\t/
//console.log(str.match(re)) // 

//4 Exercise
/*
Using the provided array, create a second array that only includes the numbers with the 801 area code. (The area code is the first 3 numbers.)
*/

let phoneNums = ["801-766-9754", "801-545-5454", "435-666-1212", "801-796-8010", "435-555-9801", "801-009-0909", "435-222-8013", "801-777-6655"];

console.log(phoneNums.filter((phoneNum) => /801-/.test(phoneNum)))

