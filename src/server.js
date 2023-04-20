const express = require('express')
const path = require('path')

const exphbs =require('express-handlebars')
const morgan = require('morgan')
const multer = require('multer')

const _handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')


const methodOverride = require('method-override')

const flash = require('connect-flash')
const session = require('express-session')

//inizialite
const app = express()





//settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))

//config view engine
app.engine('.hbs', exphbs.engine({
    
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    defaultLayout: 'main',
    extname: '.hbs',
    handlebars: allowInsecurePrototypeAccess(_handlebars) //instalar modulo NECESARIO, para visualizar la database en tablas con handlebars
}));

  app.set("view engine", ".hbs");

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method')) //para usar metodos delete y put instalar modulo metodo override
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
app.use(flash())


const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/uploads'),
    filename: (req, file, cb) =>{
        cb(null, file.originalname) //colocar su nombre origunal
    }
})

//agregacion de imagen con middlewares con el modulo multer

app.use(multer({
    storage: storage,
    dest: path.join(__dirname, 'public/img/uploads'),
    limits: {fileSize: 3000000}, //3mb
    fileFilter: (req, file, cb) =>{
        const fileTypes = /jpeg|jpg|png|gif/ //soportes
        const mimetype = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))
        
        if(mimetype && extname){
            return cb(null, true)
        }
        cb("error:: el archivo debe ser una imagen")
        
    }
}).single('image')) //el image es el name image del input de add.hbs)



//global variables
app.use((req,res,next) =>{
    res.locals.success_msg = req.flash('success_msg')
    next()
})


//routes
app.use(require('./routes/index.routes'))
app.use(require('./routes/trailer.routes'))
app.use(require('./routes/user.routes'))
//static files
app.use(express.static(path.join(__dirname, 'public')))


module.exports = app

