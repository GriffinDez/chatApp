# chatApp

1. connectDb, using mongoose
- `mongoose.connect()`
2. serverListen, using http
- `http.listen(port, (req,res)=>{})`
3. storage, using multer
```javascript
const storage = multer.diskStorage({
    destination:function(req,file,cb){error, filePath)},
    filename:function(req,file,cb){}
})
```

- Create Register and Chat model
- UserRegister with Profile Image


