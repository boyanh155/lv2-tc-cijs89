export const data = [{
        name: 'Item1',
        active: true
    },
    {
        name: 'Item2',
        active: true
    },
    {
        name: 'Item3',
        active: true
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

const newData = data.map((value, index) => {
    const inputIndex = 3
    if (index === inputIndex) {
        // return true;
        value.active = false
        return value
    } else {
        return value
    }

})
console.log(newData)