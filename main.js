// Your code here.

const getFirstName = {
  user: 'Daisy'
};
console.log(getFirstName);


const getLastName = {
  user: 'Warren'
};
  console.log(getLastName);


const getFullName = {
  user: 'Daisy' + ' ' + 'Warren'
}; 
console.log(getFullName);  

function setFirstName(getFirstName) {
  setFirstName(user);
};
console.log(getFirstName);

const setAge = {
  user: 'Daisy',
  age: 25
};
console.log(setAge);

function getBirthday(setAge) {
  const setAge = setAge + 1'
  for (const age of setAge +1 )  
};
console.log(setAge);

// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
