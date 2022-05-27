// 1 - \d for numbers [0-9]
let str = 'A string that contains numbers (12345) \n A second line _ (12345)            3 tabs'
let re = /\d/g
//console.log(str.match(re)) // ['1', '2', '3', '4','5', '1', '2', '3','4', '5', '3']

// 2 - \w for words [a-zA-Z0-9_]
str = 'Make the outline for the square gray and the fill for the circle grey.'
re = /\w/g
//console.log(str.match(re)) // ['M', 'a', 'k', 'e', 't', 'h', 'e',...,'r', 'c', 'l', 'e', 'g', 'r', 'e', 'y']

// 3 - \s for spaces [ \t\r\n]
str = 'Make the outline for the square gray and the fill for the circle grey.'
re = /\s/g
//console.log(str.match(re)) // [' ', ' ', ' ', ' ',...,' ']

// 4 - \D for numbers [^0-9]
str = 'A string that contains numbers (12345) \n A second line _ (12345)            3 tabs'
re = /\D/g
//console.log(str.match(re)) // ['A', ' ', 's', 't', 'r', 'i', 'n', 'g',  ' ',...,'b', 's']

// 5 - \W for words [^a-zA-Z0-9_]
str = 'Make the outline for the square gray and the fill for the circle grey.'
re = /\W/g
//console.log(str.match(re)) // [' ', ' ', ' ', ' ',...,' ']

// 6 - \S for spaces [^ \t\r\n]
str = 'Make the outline for the square gray and the fill for the circle grey.'
re = /\S/g
//console.log(str.match(re)) // ['M', 'a', 'k', 'e', 't', 'h', 'e',...,'r', 'c', 'l', 'e', 'g', 'r', 'e', 'y']

// 7 - Exercise
let phoneNums = ["801-766-9754", "801-545-5454", "435-666-1212", "801-796-8010", "435-555-9801", "801-009-0909", "435-222-8013", "801-777-66553", "801-777-665-", "801-77A-6655", "801-778-665"];
let reX = /801-\d\d\d-\d\d\d\d/
console.log(phoneNums.filter((phone) => reX.test(phone))) // ['801-766-9754','801-545-5454','801-796-8010','801-009-0909','801-777-66553']
