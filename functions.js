const axios = require('axios');

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = {firstName: 'Anh'}
    user['lastName'] = 'Vuong'
    return user;
  },
  underOneHundred: () => 50,
  
  // make request to JSONPlaceholder API
  fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data) // return the res data 
    .catch(err => 'error')

}

module.exports = functions;