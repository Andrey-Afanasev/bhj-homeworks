const login = document.getElementsByName('login')
const password = document.getElementsByName('password')
const btn = document.querySelector('.btn')
const form = document.getElementById('signin__form')


let xhr = new XMLHttpRequest()


/*
const user = {
    id: 1,
    login: 'Demo',
    password: 'Demo',
}

function sevObjeckt(key, object) {
    localStorage.setItem(key, JSON.stringify(object))

}

sevObjeckt('user', user)

function restoreObject(key) {
    return JSON.parse(localStorage.getItem(key))
}

*/




const submitForms = (e) => {

    e.preventDefault()

    const xhr = new XMLHttpRequest()

    const subEvent = () => {

        if(xhr.readyState === xhr.DONE) {

        }

    }



    xhr.addEventListener('readystatechange', subEvent)
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')

    const formData = new FormData(form)
    xhr.send(formData)

    form.reset()

    xhr.responseType = 'json'
    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/auth')
    xhr.send()

    if(xhr.readyState === xhr.DONE) {
        console.log(xhr.respons)
    }

}






form.addEventListener('submit', submitForms)

JSON.stringify
JSON.parse