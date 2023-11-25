const express = require('express');
app = express();
const mongoose = require('mongoose');
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");

const JWT_SECRET = 
"uifhff6343432()[{dfdnsfsdfnon?sdfsfnoi4o4n4n4n44ni444i4n4on33324234[]]]}dfsfnosfn"

const mongoUrl = "mongodb+srv://VedaSagar:1234@cluster0.kc9gicn.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(mongoUrl,{
    // useNewUrlParser: true,
})
.then(() => {
    console.log("Connected to database");
    console.log("Mongoose connection state", mongoose.connection.readyState);
})
.catch((e) => {
    console.log('Error connecting to the database',e)
});


require("./userDetails");

const User = mongoose.model("UserInfo");

app.post("/register", async(req,res) =>{
    const {fname, lname, email, password} = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    try {
        const oldUser = await User.findOne({email});

        if (oldUser){
            return res.send({error: "User exists"});
        }
        await User.create({
            fname,
            lname,
            email,
            password: encryptedPassword,
        });
        res.send({status: "ok"});
    } catch (error) {
        res.send({status: "error"})
    }
});

app.post("/loginuser",async (req, res) =>{
    const {email, password} = req.body;

    const ExistingUser = await User.findOne({email});
    if (!ExistingUser) {
        return res.json({ error: "User Not found"});
    }
    if(await bcrypt.compare(password,ExistingUser.password)){
        const token = jwt.sign({}, JWT_SECRET);

        if (res.status(201)){
            return res.json({status: "ok", data: token});
        }else{
            return res.json({error: "error"});
        }
    }
    res.json({status: "error", error: "Invalid Password"})
})

app.listen(5000,() =>{
    console.log("Server Started")
})