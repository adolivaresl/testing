const axios = require('axios');
const functions = {
    add: (num1, num2)=> num1 +num2,
    isNull: () => null,
    returnValue: (value) => value,
    returnUser: () => {
        const user = {
            name: "Maria",
            lastname: "Pérez",
        }
        return user;
    },
    post: () => axios
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.data)
    .catch(err => "Error")
}

module.exports = functions;