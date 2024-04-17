const myEvery = (arr, callback) => {
  for (const value of arr) {
    if (!callback(value)) return false;
  }
  return true;
};

const sortUsersBy = (users) => {
  return [...users].sort((a, b) => b.height - a.height);
};

//const names = ['Alice', 'Bob', 'Charlie', 'Diana'];

const logEachName = (names) => {
  return names.forEach((element, index, arr) => {
    console.log(element, index, arr)
  });
};
//logEachName(names)

const users = [
  { name: 'Alice', bio: 'Alice is a software engineer' },
  { name: 'Bob', bio: 'Bob is a teacher' },
  { name: 'Charlie', bio: 'Charlie is a student' },
  { name: 'Diana', bio: 'Diana is a doctor' },
];

const logEachUserBio = (users) => {
  return users.forEach((element) => console.log(element.bio));
};

console.log(logEachUserBio(users))

module.exports = {
  myEvery,
  sortUsersBy,
  logEachName,
  logEachUserBio,
};
