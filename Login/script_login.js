const username = document.querySelector('.username')
const password = document.querySelector('.password')

username.addEventListener('click', () => {
    username.classList.add('active')
})
password.addEventListener('hover', () => {
    password.classList.add('hover')
})