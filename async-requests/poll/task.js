
const poolTitle = document.querySelector('.poll__title')
const poolAnswers = document.getElementById('poll__answers')


let xhr = new XMLHttpRequest()
xhr.responseType = 'json'
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.send()


const questionnairesDown= () => {

    if(xhr.readyState === xhr.DONE) {

    const heading = document.createElement('div')
    poolTitle.insertBefore(heading, poolTitle.fistElementChild)
    heading.textContent = xhr.response.data.title

    let answers = xhr.response.data.answers;
    answers.forEach((e) => {

    const btn = document.createElement('button')
    btn.classList.add('poll__answer')
    poolAnswers.insertBefore(btn, poolAnswers.fistElementChild)
    btn.textContent = e

    })

    }

   const popUp = () => {

        alert('Спасибоб ваш голос засчитан!')
        location. reload()
   }

    document.querySelectorAll('.poll__answer').forEach((e) => e.addEventListener('click', popUp))

}

xhr.addEventListener('readystatechange', questionnairesDown)

