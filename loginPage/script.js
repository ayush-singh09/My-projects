const login = document.querySelector('#login-option')
const loginForm = document.querySelector('.log-det')
const regForm = document.querySelector('.reg-det')
const closeIcon1 = document.querySelector('.closeIcon1')
const closeIcon2 = document.querySelector('.closeIcon2')
const regOpt = document.querySelector('.reg-option')
const logOpt = document.querySelector('.log-option')
const intro = document.querySelector('.intro')
const regBtn = document.querySelector('.reg-btn')
const logBtn = document.querySelector('.login-btn')

var flag = 0

login.addEventListener('click',function(){
    if(flag==0)
    {
        clear();
        loginForm.classList.add('active')
        flag = 1
    }    
    intro.classList.remove('active')
})

closeIcon1.addEventListener('click',function(){
    flag = 0
    clear();
    loginForm.classList.remove('active')
    intro.classList.add('active')
})

closeIcon2.addEventListener('click',function(){
    flag = 0
    clear();
    regForm.classList.remove('active')
    intro.classList.add('active')
})

regOpt.addEventListener('click',function(){
    flag = 1
    clear();
    loginForm.classList.remove('active')
    regForm.classList.add('active')
    intro.classList.remove('active')
})

logOpt.addEventListener('click',function(){
    flag = 1
    clear()
    loginForm.classList.add('active')
    regForm.classList.remove('active')
    intro.classList.remove('active')
})

regBtn.addEventListener('click',function(){
    let username = document.querySelector('.reg-user').value
    let email = document.querySelector('.reg-email').value
    let password = document.querySelector('.reg-pass').value

    if(username !== '' && email !== '' && password !== '')
    {
        const existingUser = localStorage.getItem(username)

        if(existingUser !== null)
        {
            alert("Username already exists! Please try another one.")

        }
        else {
            localStorage.setItem(username,password)
            alert("User Registered")
            clear()
        }
    }
    else{
        if(username === '')
        {
            document.querySelector('.reg-user').style.color='red'
        }
        if(email === '')
        {
            document.querySelector('.reg-email').style.color='red'
        }
        if(password === '')
        {
            document.querySelector('.reg-pass').style.color='red'
        }
    }
})

logBtn.addEventListener('click',function(){
    let username = document.querySelector('.log-user').value
    let password = document.querySelector('.log-pass').value

    if(username !== '' && password !== '')
    {
        const storedPassword = localStorage.getItem(username)

        if(storedPassword === password)
        {
            alert("Login Successful!")
            clear();
        }
        else{
            document.querySelector('.log-user').style.color = "red"
            document.querySelector('.log-pass').style.color = "red"
        }
    }
    else {
        if(username === '')
        {
            document.querySelector('.log-user').style.color = "red"
        }
        if(password === '')
        {
            document.querySelector('.log-pass').style.color = "red"
        }
    }
})

function clear()
{
    document.querySelector('.reg-user').value = ''
    document.querySelector('.reg-email').value = ''
    document.querySelector('.reg-pass').value = ''
    document.querySelector('.log-user').value = ''
    document.querySelector('.log-pass').value = ''
    document.querySelector('.log-user').style.color = "white"
    document.querySelector('.log-pass').style.color = "white"
    document.querySelector('.reg-user').style.color='white'
    document.querySelector('.reg-email').style.color='white'
    document.querySelector('.reg-pass').style.color='white'
}
