const myForEach = (arr, callBack) => {
  if (!arr?.length) return undefined
  for (let i = 0; i < arr.length; i++) {
    callBack(arr[i])
  };
};

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
    };
  };
  return undefined
};

const myFilter = (arr, callBack) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callBack(arr[i])) {
      newArr.push(arr[i])
    };
  };
  return newArr;
};

const sortWords = (arr) => {

  //let sort = arr.sort()

  return [...arr].sort()
};

const sortNumbers = (arr) => {
  return [...arr].sort((a, b) => a - b)
};

const sortNumbersBetter = (arr, isDescending) => {
  if (isDescending) {
    return [...arr].sort((a, b) => b - a)
  } else {
    return [...arr].sort((a, b) => a - b)
  }
}


const sortUsersByOrder = (arr) => {
  let newArr = [...arr]
  return (newArr.sort((a, b) => a.order - b.order))
};


const sortUsersByName = (arr) => {
  let newArr = [...arr]
  return newArr.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1
    return 0;
  })

};

module.exports = {
  myForEach,
  myMap,
  myFind,
  myFilter,

  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};
