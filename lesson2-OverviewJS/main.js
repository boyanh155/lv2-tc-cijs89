const _arr = [12323, 3213, 2132]

// push 
// _arr.push('ds')
// const _newArr = [..._arr]
// const a = _newArr.push('asd')
// pop
// const pop = _newArr.unshift()

// console.log(pop)
// console.log(_newArr)

// console.log(_arr)
// console.log('xxxxxxx')
// const _newArr = _arr.map((a, b, c) => {
//     return a * 2;
// })

// console.log(_newArr)
// mutable, immutable
// console.log(_newArr)

// ex map

const products = [{
    "name": "sp1",
    // active: true,
    // price: 100
}, {
    "name": "sp3",
    //price:300

}, {
    "name": "sp2",
    //price:200

}, {
    "name": "sp1",
}, ]

// const newProduct = products.map((value) => ({...value, active: true }))
const newProduct = products.map((value) => {
        return {
            ...value,
            price: value.name === 'sp1' ? 100 : (value.name === 'sp2' ? 200 : 300),
        }
    })
    // console.log(newProduct)

// filter
// const filterArr = newProduct.filter((value) => {
//     // if()
//     return value.name !== 'sp1';
// })

//some, every
// newProduct.every()
// console.log(filterArr)
// const newValue = newProduct.findIndex(v => v.name === 'sp1')
// console.log(newValue)

// console.log(newProduct)
//reduce
// const

const total = newProduct.reduce((prevValue, value, index) => {
    // console.log('----------')
    // console.log(prevValue)
    // console.log(value)
    return prevValue + value.price
}, 0)

console.log(total)