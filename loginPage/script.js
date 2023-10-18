const login = document.querySelector('#login-option')
const loginForm = document.querySelector('.log-det')
const regForm = document.querySelector('.reg-det')
const closeIcon1 = document.querySelector('.closeIcon1')
const closeIcon2 = document.querySelector('.closeIcon2')
const regOpt = document.querySelector('.reg-option')
const logOpt = document.querySelector('.log-option')
const intro = document.querySelector('.intro')

login.addEventListener('click',function(){
    loginForm.classList.add('active')
    intro.classList.remove('active')
})

closeIcon1.addEventListener('click',function(){
    loginForm.classList.remove('active')
    intro.classList.add('active')
})

closeIcon2.addEventListener('click',function(){
    regForm.classList.remove('active')
    intro.classList.add('active')
})

regOpt.addEventListener('click',function(){
    loginForm.classList.remove('active')
    regForm.classList.add('active')
    intro.classList.remove('active')
})

logOpt.addEventListener('click',function(){
    loginForm.classList.add('active')
    regForm.classList.remove('active')
    intro.classList.remove('active')
})