const mongo=require("mongodb").MongoClient;
let cors = require('cors');
let parser = require('body-parser');

var db;
const app = require("express")();
app.use(parser.json());
app.use(parser.urlencoded({
  extended: false
}));
app.use(cors());

mongo.connect("mongodb://localhost:27017",{useNewUrlParser : true},(err,client)=>{
  if(err) console.log(err)
  else{
    db=client.db("mytest");
    app.listen("3002",()=>{
      console.log("Start listening");
    })
  }
})
// Get Single 
app.post('/login',(req, res) => {
    db.collection('Administrateur').findOne({email: req.body.email, password: req.body.password}).toArray((err, data)=>{
      if (data==null) {
        res.send({success:false})
        console.log(data)
        console.log("incorrect")
      } else {
       res.send({success:true})
       console.log("correct")
       console.log(data)
      }
    })  
})
// app.post('/login',(req, res) => {
// db.collection('Administrateur').findOne( 

//   { $and: [ 
//     { email: req.body.email }, 
//     { password: req.body.password } 
//   ] }, 

//  (err, result) => {

//   if(err) {
//     res.status(500).send(err);
//     return;
//   }

//   if(!result) {
//       data = {
//           "meta": {
//               "status": "fail",
//               "message": "Login Failure: Invalid username or password"
//           }
//       };
//       res.status(401).send(data);
//       console.log("incorrect")
//   } else {
//       data = {
//           "meta": {
//               "status": "success",
//               "message": "Login success"
//           }
//       };
//       res.json(data);
//       console.log("correct")
//   }
// })
// });