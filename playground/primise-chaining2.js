require('../src/db/mongoose')
const Task = require('../src/models/task');

Task.findByIdAndDelete('60664d28895a8825fc8c7fbb').then((task)=>{
    console.log(task);
    return Task.countDocuments({completed:false})
}).then((result)=>{
    console.log(result);
}).catch((e)=>{
    console.log(e);
});