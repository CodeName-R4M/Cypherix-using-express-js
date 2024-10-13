const express=require("express");
const path=require("path");
const ejsLayout=require("express-ejs-layouts");
const app=express();
const PORT=11524;

app.use(express.static(path.join(__dirname,"Public")));
app.set("view engine","ejs");
app.use(ejsLayout);

app.set("layout","Layout/basic")
app.get("/",(req,res)=>{
res.render("index",{page:'home'});
})
app.get("/Events",(req,res)=>{
    res.render("Events",{page:'events'})
    })
    app.get("/Teams",(req,res)=>{
        res.render("Teams",{page:'teams'})
        })
app.listen(PORT,console.log(`Server is up and running on port ${PORT}`))