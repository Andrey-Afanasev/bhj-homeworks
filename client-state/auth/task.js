const btn = document.querySelector('.btn')
const form = document.getElementById('signin__form')

const xhr = new XMLHttpRequest()

const submitForms = (e) => {

    e.preventDefault()
    
    const subEvent = () => {
    
            if (JSON.parse(xhr.response).success === true) {
                document.getElementById('signin').classList.remove('signin_active')
                document.getElementById('welcome').classList.add('welcome_active')
                document.getElementById('user_id').textContent = JSON.parse(xhr.response).user_id
            } else {
                alert('Неверный логин или пароль')
            }
        
    }

    xhr.addEventListener('load', subEvent)

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')
    const formData = new FormData(form)
    xhr.send(formData)

    form.reset()

}

form.addEventListener('submit', submitForms)

