
const btn = document.querySelector('.btn')
const form = document.getElementById('signin__form')
const login = document.querySelector('input[type="text"]')
const password = document.querySelector('input[type="password"]')

const dataObj = {
    login: login.value,
    password: password.value
  }

let xhr = new XMLHttpRequest()


const submitForms = (e) => {

    e.preventDefault()

    const xhr = new XMLHttpRequest()

    const subEvent = () => {

        if(xhr.readyState === xhr.DONE) {
            console.log('svd')
        }

    }

    xhr.addEventListener('readystatechange', subEvent)


    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')
    const formData = new FormData(form)
    xhr.send(formData)

    form.reset()


}






form.addEventListener('submit', submitForms)

xhr.parseResponseBody(response)