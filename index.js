let express =require('express')
let app = express()

// Set up view engine
app.set('view engine', 'pug')
app.set('views', './views')

// Use static files (for css)
app.use(express.static('static'))

// Use Body Parser so we can use `response.body['property']`
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

// Set up controller for Color
let colorRouter = require('./colors/controller')
app.use('/colors', colorRouter)

app.listen(9000)