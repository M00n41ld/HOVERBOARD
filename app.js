const board = document.querySelector('#board')
const squaresNumber = 660

 const colors = ['#301B28', '#523634', '#B6452C', '#DDC5A2']

for (let i = 0; i < squaresNumber; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))
    board.append(square)
}

function setColor(element) {
    const color = getRandomCollor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 3px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomCollor() {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}
