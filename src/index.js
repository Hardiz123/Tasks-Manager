var express = require("express");
require("./db/mongoose");
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


app.listen(port, () => {
  console.log("Server is up on Port " + port);
});

// const Task = require('./models/task');
// const User = require('./models/user');
// const main = async () =>{
//   // const task = await Task.findById('606bae47d18da35154245509');
//   // await task.populate('owner').execPopulate();
//   // console.log(task.owner);
//   const user = await User.findById('606bad5b73c9b83a0c9d2c77')
//   await user.populate('tasks').execPopulate();
//   console.log(user.tasks);
// }

// main()

// const jwt = require('jsonwebtoken');
// const e = require("express");

// const myFuction = async () =>{
//   const token = jwt.sign({ _id:'qbc123' },'tgisitismybew0o',{expiresIn:'7 days'})
//   console.log(token);

//   console.log(jwt.verify(token, 'tgisitismybew0o'));
// }

// myFuction();
