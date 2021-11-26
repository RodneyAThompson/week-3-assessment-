const favoriteColorButton = document.getElementById('color')
const showColor = event => {
    event.preventDefault()
    alert('Purple is my favorite color')
} 

favoriteColorButton.addEventListener('click', showColor)

const favoritePlaceButton = document.getElementById('place')
const favPlace = event => {
    event.preventDefault()
    alert('The rift is my favorite place')
} 

favoritePlaceButton.addEventListener('click', favPlace)

const favoriteRitualButton = document.getElementById('ritual')
const favRit = event => {
    event.preventDefault()
    alert('Prasing the illuminati')
} 

favoriteRitualButton.addEventListener('click', favRit)