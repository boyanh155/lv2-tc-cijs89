// const a = 3;

// const b = 10;

// // const result = a > b ? a : b

// // console.log(result)

// // OR( || ) 
// // (con1 || con2)

// // AND(&&)

// const result = (a && b) || a

// console.log(result)

const a = [2, 941, 722, 900, 323, 867, 919]
    // first iterate
    // value: 1 === 3 (false)
    // index: 0
    // se
    // value: 2 ===3 (false)
    // index: 1
    // third
    // value: 3 ===3 (true)

// const b = a.find((value, index) => {
//     return value === 2 ? false : 'qwe'
// })


// const total = cart.reduce((a, b, c) => {
//     console.log(a)
//     return a + (b.price * b.quantity)
// }, 0)
// console.log('----------')
// console.log(total)

const cart = [{
            name: 'ProductAB',
            quantity: 1,
            price: 130 //per 1
        },
        {
            name: 'ProductA',
            quantity: 1,
            price: 100 //per 1
        },
        {
            name: 'ItemA',
            quantity: 1,
            price: 100 //per 1
        },
        {
            name: 'ProductB',
            quantity: 1,
            price: 400
        }, {
            name: 'ItemC',
            quantity: 1,
            price: 50
        }, {
            name: 'ProductC',
            quantity: 1,
            price: 50
        }
    ]
    // const listC = cart.filter(value => value.name.toLowerCase().includes('C'))


// mutable, immutable
cart.sort((a, b) => {
        // >(+1), <(-1) , =(0)
        return a.price - b.price
    })
    // console.log(incPrice)
console.log(cart)