function processArray(arr) {
    let a =[]

    for (let i=1; i<=arr.length; i++) {
        if (i % 2 == 0) {
            a[a.length] = i * i
        } else {
            a[a.length] = i * 3
        } 
        
    }

    return a
}

console.log(processArray([1,2,3,4,5,6,7,8,9]))



function formatArraystrings(strings,numbers) {
    let string =[]
    for (let index = 0; index < strings.length; index++) {
       let arrayString = strings[index]
       let arrayNumber = numbers[index]

       if (arrayNumber % 2 === 0) {
        string[string.length] = arrayString.toUpperCase()
       } else {
        string[string.length] = arrayString.toLowerCase()
       }
        
    }

    return string
}

