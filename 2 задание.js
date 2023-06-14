const checkProperty = (str, obj) => {
  return obj.hasOwnProperty(str);
}

const person = {
  name: 'Ivan',
  surname: 'Ivanov',
  job: 'developer'
};

console.log(checkProperty('name', person))
console.log(checkProperty('country', person))