require('../src/db/mongoose');
const User = require('../src/models/user');

//6068dfdd3946d538ec85644e

User.findByIdAndUpdate('6068dfdd3946d538ec85644e',{age:1}).then((user)=>{
    console.log(user);
    return User.countDocuments({age:1})
}).then((result)=>{
    console.log(result);
}).catch((e)=>{
    console.log(e);
});

