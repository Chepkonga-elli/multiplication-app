const firstMultiplier = Math.floor(Math.random() * 9) + 1
const secondMultiplier = Math.floor(Math.random() * 9) + 1
const quest = document.getElementById('question')
quest.innerText = `What is ${firstMultiplier} multiplied by ${secondMultiplier}?`
let inputEl = document.getElementById('input')
const formEl = document.getElementById('form')
const scoreEl = document.getElementById('score')

let score = JSON.parse(localStorage.getItem("score"))

if (!score) {
    score = 0
}

const ans = firstMultiplier * secondMultiplier

formEl.addEventListener("submit", () => {
    
    const userAns = +inputEl.value
    
    if (userAns == ans) {
        score++
    
        updateLocalStorage()
    } else {
        score--
        updateLocalStorage()
        

    }
})

function updateLocalStorage () {
    localStorage.setItem("score", JSON.stringify(score))
}
scoreEl.innerText = `score: ${score}`





