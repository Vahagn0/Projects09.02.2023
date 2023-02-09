import express from "express"
import bcrypt from "bcrypt"
import bodyParser from "body-parser"
import cors from "cors"
import session from 'express-session'


let app = express()
app.use(cors())
app.use(session({
    secret: 'ashajsjajasnasdasjdn1wi132jw2j',
    saveUninitialized: true
  }))

let jsonParser = bodyParser.json()

const users = []


app.post("/",jsonParser ,async(req,res)=>{
    const hashedPassword = await bcrypt.hash(req.body.password,10)
    users.push({
        id : Math.random(),
        username:req.body.username,
        password: hashedPassword
    })
    res.send(users)
})

app.get("/logIn",(req,res)=>{
    if(req.session.authenticate === true){
        res.send({message: "loged in"}) 
      }else{
        res.send({message:'chexav'})
      }
})

app.post("/logIn",jsonParser, (req,res)=>{
        if(req.body.password === "super"){
            req.session.authenticate = true
            res.send({message: "loged in"}) 
          }else{
            req.session.authenticate = false
            res.send({message:'chexav'})
          }
})

app.listen(3001) 

