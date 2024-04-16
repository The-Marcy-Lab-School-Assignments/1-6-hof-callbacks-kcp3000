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
