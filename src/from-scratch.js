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

const myFind = () => {
};

const myFilter = () => {
};

const sortWords = () => {
};

const sortNumbers = () => {
};

const sortNumbersBetter = () => {
};

const sortUsersByOrder = () => {
};

const sortUsersByName = () => {
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
