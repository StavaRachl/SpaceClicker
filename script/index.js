const plusBtn = document.querySelector("#plus-btn")
const minusBtn = document.querySelector("#minus-btn")
const valueParameter = document.querySelector("#counter")

let counter = 0

plusBtn.addEventListener('click', () => {
    counter++
    valueParameter.textContent = counter
})

minusBtn.addEventListener('click', () => {
    counter--
    valueParameter.textContent = counter
})