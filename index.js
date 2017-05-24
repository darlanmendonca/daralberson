const names = [
  'widarlam',
  'alberson',
  'abdon',
  'jhemerson',
  'rafaelson',
  'joesley',
]

module.exports.random = random()

function random() {
  const randomIndex = parseInt(Math.random() * names.length)
  
  return names[randomIndex]
}
