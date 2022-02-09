let form = document.querySelector(`form`)
let items = document.querySelector('ul')

function handleDragStart(e) {
  this.style.opacity = '0.4'

  dragSrcEl = this

  e.dataTransfer.effectAllowed = 'move'
  e.dataTransfer.setData('text/html', this.innerHTML)
}
function handleDragEnd(e) {
  this.style.opacity = '1'

  items.forEach(function (item) {
    item.classList.remove('over')
  })
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault()
  }

  return false
}

function handleDragEnter(e) {
  this.classList.add('over')
}

function handleDragLeave(e) {
  this.classList.remove('over')
}

function handleDrop(e) {
  e.stopPropagation()

  if (dragSrcEl !== this) {
    dragSrcEl.innerHTML = this.innerHTML
    this.innerHTML = e.dataTransfer.getData('text/html')
  }

  return false
}

form.addEventListener(`submit`, (event) => {
  event.preventDefault()
  console.log(event.target.dragValue.value)
  let li = document.createElement(`li`)
  li.innerText = event.target.dragValue.value
  li.draggable = 'true'

  li.addEventListener('dragstart', handleDragStart)
  li.addEventListener('dragover', handleDragOver)
  li.addEventListener('dragenter', handleDragEnter)
  li.addEventListener('dragleave', handleDragLeave)
  li.addEventListener('dragend', handleDragEnd)
  li.addEventListener('drop', handleDrop)

  items.append(li)
  event.target.dragValue.value = ''
})
