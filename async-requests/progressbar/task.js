
const form = document.getElementById('form');
const progress = document.getElementById('progress');
const file = document.getElementById('file');


const submitForms = (e) => {

    e.preventDefault()

    let xhr = new XMLHttpRequest()

    const subEvent = () => {

        if(xhr.readyState === xhr.DONE) {

        }

    }

    xhr.addEventListener('readystatechange', subEvent)

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')

    const formData = new FormData(form)

    xhr.send(formData)


}

form.addEventListener('submit', submitForms)





