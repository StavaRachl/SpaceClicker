const plusBtn = document.querySelector("#plus-btn")
const minusBtn = document.querySelector("#minus-btn")
const valueParameter = document.querySelector("#counter")
const resetBtn = document.querySelector("#reset-btn")

let counter = 0

plusBtn.addEventListener('click', () => {
    counter++
    valueParameter.textContent = counter
})

minusBtn.addEventListener('click', () => {
    if (counter === 0) {
        alert("Нельзя отнимать меньше нуля")
    } else {
        counter--
        valueParameter.textContent = counter
    }
})

resetBtn.addEventListener('click', () => {
    counter = 0
    valueParameter.textContent = counter
})