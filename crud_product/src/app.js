const path=require('path');
const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
const app=express();



//connecting to db
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db=>console.log('Db connected'))
    .catch(err=>console.log(err));

//imprting routes
const indexRouter=require('./routes/index');

//setting    
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//router 
app.use('/', indexRouter);

app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
})