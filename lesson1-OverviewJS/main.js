// const sum1 = (a, b) => a + b

// const sum = function(a, b) {
//     return a + b
// }

// console.log(sum(1, 5))


// const protocol = 'https://'

// const domainName = 'google.com'
//     //
// lan : vi
// user : student
// const query = {
//     lan: 'vi',
//     user: 'student',

// }
// const path = 'youtube'
// const url = `https://google.com/youtube?lan=vi&user=student`
// const keyArr = Object.keys(query)
//     // console.log(keyArr)
// let solution1 = `${protocol}${domainName}${path}?`
// for (let keyName of keyArr) {
//     // console.log(keyName)
//     const queryItem = keyName + '=' + query[keyName] + '&'
//     solution1 = solution1 + queryItem
// }

// console.log(solution1.slice(0, solution1.length - 1))
// const a = `This is a string`
// console.log(a)
// const fn1 = (a, b) => {
//     console.log(a)
//     console.log(b)
// }

// const world = 'World'

// fn1 `
// Hello${world},
// Hello${world},
// Hello${world},
// Hello${world},
// `

// const coinList = [0, 0, 0, 0, 0, 0, 0, 0, 1]
// matrix, vector
// 0 0 0
// 0 0 0
// 0 0 1

// const coinMatrix = [
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 1]
// ]

// // [0, 0, 0]
// const sum0 = coinMatrix[0].reduce((prevValue, current, index) => {
//     return current + prevValue
// }, 0)
// const sum1 = coinMatrix[1].reduce((prevValue, current, index) => {
//     return current + prevValue
// }, 0)
// const sum2 = coinMatrix[2].reduce((prevValue, current, index) => {
//     return current + prevValue
// }, 0)

// const cart = [
//     { name: 'p1', price: 10, quantity: 2, category: 'A' },
//     { name: 'p2', price: 30, quantity: 1, category: 'B' },
//     { name: 'p3', price: 15, quantity: 4, category: 'A' },
// ]

// Ex1:
// 1. Total price
// 2. Total quantity
// 3. Total price of product with category A
// 4. Total category types
// 5. Add one more boolean field isVoucher that have true for category A and false for category B

// var v = 1
// var f1 = function() {
//     let v = 3;
//     console.log(v)
// }
// var f2 = function() {
//     let v = 2;
//     console.log(v)
//     f1()
// }

// f2()

// const a = [1, 2, 3]
// console.log(a)
// console.log(a.length)
// a[100] = 5
// console.log(a)
// console.log(a.length)

// const calculate = function(a) {
//     return function(b) {
//         return a * b
//     }
// }
// console.log(calculate(10)(20))