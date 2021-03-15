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
  getFirstName(user);
};
console.log(getFirstName);

const setAge = {
  user: 'Daisy',
  age: 25
};
console.log(setAge);

function giveBirthday(setAge) {
  if(setAge.age !== undefined) {
    setAge.age++;
  } else {
    setAge.age = 1;
  }
};

console.log(setAge);

function marry (person1, person2) {
  person1.married = true;
  person2.married = true;
  person1.spouseName = getFullName(person2);
  person2.spouseName = getFullName(person1);
};

function divorce(person1, person2) {
  person1.married = false;
  person2.married = false;
  delete person1.spouseName;
  delete person2.spouseName;
};


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
