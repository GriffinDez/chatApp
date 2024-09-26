const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path')
const multer = require('multer')

const userController = require('../controllers/userController')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', './views')
app.use(express.static('public'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) { null, path.join(__dirname, '../public/images') },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name);
    }
})
const upload = multer({storage:storage})

userRoute.get('/register', userController.registerLoad)

userRoute.post('/register', upload.single('image'),userController.register)

module.exports = userRoute;