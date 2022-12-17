let counter = localStorage.getItem('counter') ? localStorage.getItem('counter') : 0
// we are using the ternary operator to check if the counter is already in the local storage
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')
// we are selecting the elements from the DOM

counterDOM.textContent = counter

increaseDOM.addEventListener('click', () => {
    counterDOM.textContent = ++counter
    localStorage.setItem('counter', counter)
})

decreaseDOM.addEventListener('click', () => {
    counterDOM.textContent = --counter
    localStorage.setItem('counter', counter)
})
