//const pokemon = require('./models/pokemon')
const Pokemon =require('./models/pokemon')
const data =require('./models/temp')
const methodOverride = require('method-override');

const express = require("express");

const app = express();
const mongoose =require('mongoose')
require ('dotenv').config();

const PORT = 5001;

app.set("view engine", "jsx");

app.engine("jsx", require("express-react-views").createEngine());
app.use(methodOverride(`_method`))
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    UseUnifiedTopology: true
})
mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB 🍃")
})

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to pokemon app </h1> <a href='pokemon'> pokemon</a>`)
})

app.get('/pokemon', async (req, res) => {
    const allPokemon= await Pokemon.find({})
    res.render('Index',{pokemon:allPokemon})
})

app.get('/pokemon/:id', async(req,res) => {
    const pokemon = await Pokemon.findById(req.params.id);
    res.render("Show",{pokemon:pokemon});
    
})
// ========NEW POKEMON CREATE ROUTE
app.get("/add", (req,res)=>{
    res.render('Add')

})


app.post("/addsubmit", async (req,res) => {
    await Pokemon.create(req.body);
    res.redirect('/pokemon')

})
app.get("/update/:id", async(req,res)=>{
    const onePokemon= await Pokemon.findById(req.params.id);
    res.render('Update',{pokemon:onePokemon});

})


app.put("/updatesubmit/:id", async (req,res) => {
    await Pokemon.findByIdAndUpdate(req.params.id,req.body)
    res.redirect('/pokemon')

})

app.delete("/delete/:id", async (req,res) => {
    await Pokemon.findByIdAndDelete(req.params.id)
    res.redirect('/pokemon')

})
app.get("/adddata",  (req,res) => {
data.map(async(current)=> {
    await Pokemon.create(current);

})
    
    res.redirect('/pokemon')

})



app.listen(PORT, (req,res) => {
    console.log('Now listening on Port '+PORT)
})
