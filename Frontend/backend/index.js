const port = 4000;
const express =require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');



app.use(express.json());
app.use(cors());
// Database Connection
mongoose.connect('mongodb+srv://admin:admin@cluster0.wxhfzjs.mongodb.net/e-commerce'),
//API creation
+
app.get('/',(req,res)=>{
    res.send("Express in running")
}) 55

// image storaage enginee

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({storage:storage})
// creating upload endpoint fro images
app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

app.listen(port,(error)=>{
    if(!error){
        console.log("server running on "+port);
    }
    else{
        console.log("Error :"+error);
    }
), 
