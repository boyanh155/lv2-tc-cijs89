const data = [{
            name: 'Item1',
            active: false
        },
        {
            name: 'Item2',
            active: false
        },
        {
            name: 'Item3',
            active: false
        },
        {
            name: 'Item4',
            active: true
        },
        {
            name: 'Item5',
            active: true
        },
    ]
    // for (let i = 0; i < data.length; i++) {
    //     console.log(data[i])
    // }

const newData = data.map((value, i) => {
    const newValue = {
        ...value,
        _date: new Date()
    }
    return newValue
})
console.log(data)
console.log(newData)