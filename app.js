const express = require('express')
const port = 3000
const app = express()
const exhbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generateTrashTalk')

// template engine
app.engine('handlebars', exhbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static file
app.use(express.static('public'))

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//localhost:3000
app.get('/', (req, res) => {
  res.render('index')
})


app.post('/', (req, res) => {
  console.log(req.body)
  res.render('index', {
    trashTalk: generateTrashTalk(req.body),
    mark: req.body,
    isEngineer: req.body.job === 'engineer',
    isDesigner: req.body.job === 'designer',
    isEntrepreneur: req.body.job === 'entrepreneur',
    isHR: req.body.job === 'HR'
  })
})


app.listen(port, () => {
  console.log(`This server is running on http://localhost:${port}`)
})