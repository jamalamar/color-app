let express = require('express')
let router = express.Router()
let model = require('./model')

// Get all colors
router.get('/', (request, response)=> {
  let colors = model.getColors()
  response.render('colors/colors', { colors })
})

// Get color by ID
router.get('/:id', (request, response)=> {
  let id = request.params.id
  let color = model.getColor(id)
  response.render('colors/color', { color, id })
})

// Create a color
router.post('/add-color/', (request, response)=>{
  let newColor = request.body['new-color']
  let colors = model.addColor(newColor)
  response.render('colors/colors', { colors })
})

// Update a color
router.post('/update-color', (request, response)=> {
  let id = request.body['id']
  let newColor = request.body['new-color']
  let colors = model.updateColor(id, newColor)
  response.render('colors/colors', { colors })
})

// Delete a color
router.post('/remove-color', (request, response)=> {
  let color = request.body['color']
  let colors = model.deleteColor(color)
  response.render('colors/colors', { colors })
})

module.exports = router