// var mongodb = require("mongodb");
// const MongoCleint = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectIDId;
const { MongoClient, ObjectID } = require("mongodb");

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to Database");
    }
    const db = client.db(databaseName);
    // db.collection("users").insertOne({
    //     _id: id,
    //   name: "Hardik",
    //   age: 21,
    // },(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert User');
    //     }

    //     console.log(result.ops);
    // });
    // db.collection('users').insertMany([
    //     {
    //         name:'Randi-Rone',
    //         completed:true
    //     },
    //     {
    //         name:'chudail',
    //         completed:false
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log(error);
    //     }

    //     console.log(result.ops);
    // });

    // db.collection('users').findOne({_id:new ObjectID('60662351afc9582a6c1391e4')},(error,user)=>{
    //     if(error){
    //         return console.log(error);
    //     }

    //     console.log(user);
    // })

    // db.collection('users').find({age:27}).toArray((error,users)=>{
    //     console.log(users);
    // })
    // db.collection('users').find({age:27}).count((error,users)=>{
    //     console.log(users);
    // })
    //  db.collection('users').updateOne({
    //     _id:new ObjectID("60661edc069e73459003363c")
    //   },{
    //     $set:{
    //       name:'Mike'
    //     }
    //   }).then((result)=>{
    //     console.log(result);
    //   }).catch((error)=>{
    //     console.log(error);
    //   })
  }
);
