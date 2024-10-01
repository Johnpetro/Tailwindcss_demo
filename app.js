const express =  require('express');
const expressLayout = require('express-ejs-layouts');

const app =  express();
// engene and static file
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(expressLayout);
app.use(express.urlencoded({extended:true}));
app.set('layout','./layouts/index')

app.get('/',(req,res)=>{
    //res.render('home');/
    res.render('index')
})


app.listen(9000,()=>{
    console.log("application is running at port 9000")
})