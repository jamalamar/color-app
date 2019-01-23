let colors = require('./colors.json')

let Color = {
  getColors() {
    return colors
  },
  getColor(id) {
    return colors[id]
  },
  addColor(color) {
    colors.push(color)
    return colors
  },
  deleteColor(color) {
    let index = colors.indexOf(color)
    if(index != -1) {
      colors.splice(index, 1)
    }
    return colors
  },
  updateColor(index, newColor) {
    colors[index] = newColor
    return colors
  }
}

module.exports = Color