const express = require("express");
const cors = require("cors");


let app  = express();
app.use(cors());

app.get("/indianCricketPlayers",(req,res)=>{
     let indianCricketPlayersArr =   [{ name:"Virat Kohli", Image:"https://documents.iplt20.com/ipl/IPLHeadshot2024/2.png"},
     {name:"Rohit Sharma",Image:"https://documents.iplt20.com/ipl/IPLHeadshot2024/6.png"},
     {name:"Shubman Gill",Image:"https://documents.iplt20.com/ipl/IPLHeadshot2024/62.png"},{name:"KL Rahul",Image:"https://documents.iplt20.com/ipl/IPLHeadshot2023/19.png"},{name:"Hardik Pandya",Image:"https://documents.iplt20.com/ipl/IPLHeadshot2024/54.png"},{name:"Rishabh Pant",Image:"https://documents.iplt20.com/ipl/IPLHeadshot2024/18.png"},{name:"Jasprit Bumrah",Image:"https://documents.iplt20.com/ipl/IPLHeadshot2024/9.png"},{name:"Mohammad Shami",Image:"https://documents.iplt20.com/ipl/IPLHeadshot2023/47.png"},{name:"Ravindra Jadeja",Image:"https://documents.iplt20.com/ipl/IPLHeadshot2024/46.png"},{name:"Nithish kumar",Image:"https://documents.iplt20.com/ipl/IPLHeadshot2024/1944.png"},{name:"Tilak varma",Image:"https://documents.iplt20.com/ipl/IPLHeadshot2024/993.png"},{name:"Suryakumar Yadav",Image:"https://documents.iplt20.com/ipl/IPLHeadshot2024/174.png"},
 ];

 res.json(indianCricketPlayersArr);
 
});

app.listen(3456,()=>{
     console.log("wellcome to express")
});