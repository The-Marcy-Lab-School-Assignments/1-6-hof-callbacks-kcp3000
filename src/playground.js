// const myNums = [1, 2, 3];
// const doubledNums = [];
// const addToDoubledNums = (num) => doubledNums.push(num * 2)

const myForEach = (arr, callBack) => {
    //if (!arr?.length) return undefined
    for (let i = 0; i < arr.length; i++) {
        //arr[i]
        callBack(arr[i])
    };
};

//console.log(myForEach(doubledNums, addToDoubledNums(myNums)))

const myMap = (arr, callBack) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callBack(arr[i]))
    }
    return newArr;
};

const myFind = (arr, callBack) => {
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i])) {
            return arr[i]
        }

    };

    // for (const element of arr) {
    //     if (callBack === element) {
    //         return true
    //     } else {
    //         return undefined
    //     }
    // }
    return undefined
};
//myFind(['Hello', 'hi'])


const myFilter = (arr, callBack) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i])) {
            newArr.push(arr[i])
        };
    };
    return newArr;
};

const words2 = ['b', 'd', 'a', 'c'];
console.log(words2)

const sortWords = (arr) => {
    let newArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < i; j++) {
    //         if (arr[i] < arr[j]) {
    //             let x = arr[i]
    //             arr[i] = arr[j]
    //             arr[j] = x
    //             newArr.push(x)
    //         };
    //     };
    // };
    // let sort = arr.sort()
    // newArr.push(sort)
    return newArr

    return [...arr].sort()



};

//console.log(sortWords(words2))


const users = [
    { name: 'Alice', order: 22 },
    { name: 'Charlie', order: 28 },
    { name: 'Diana', order: 40 },
    { name: 'Bob', order: 32 },
];

const sortUsersByOrder = (arr) => {
    let newArr = [...arr]
    console.log(newArr.sort((a, b) => a.order - b.order))
};

//sortUsersByOrder(users)

const sortUsersByName = (arr) => {
    let newArr = [...arr]
    console.log(newArr.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1
        return 0;
    }))

};


sortUsersByName(users)