const arr = [
    {
        No: 1,
        odd: true,
        even:false
    },
    {
        No: 2,
        even: true,
        odd:false
    },
    {
        No: 3,
        odd: true,
        even:false
    },
    {
        No: 4,
        even: true,
        odd:false
    },
    {
        No: 5,
        odd: true,
        even:false
    }
]

const arr_ = arr.map( x => {
    if(x.even) x.No = x.No + 1;
    if(x.odd) x.No = x.No + 2;
    x.No = x.No * 2;
})

console.log(arr_);

