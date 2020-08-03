const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const SELECTIONS = [
    {
        name: 'rock',
        emoji: '👊',
        beats: 'paper'
    },
    {
        name: 'paper',
        emoji: '🤚',
        beats: 'scissors'
    },
    {
        name: 'scissors',
        emoji: '✌',
        beats: 'paper'
    }
]
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selectionName)
    })
})
function makeSelection(selection){
    const computerSelection = randomSelection()
    console.log(computerSelection)
}
function isWinner(selection, opponentSelection){
    return selection.beats === opponentSelection.name
}
function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}