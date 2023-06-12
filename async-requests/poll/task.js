
const pt = document.querySelector('.poll__title')
const pa = document.getElementById('poll__answers')
let answer

function newel() { answer = document.querySelectorAll('.poll__answer')}


let xhr = new XMLHttpRequest()
xhr.responseType = 'json'
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.send()


///xhr.response.data.title /// вопрос
////xhr.response.data.answers // массив вариантов

const qwe = () => {

const zagolovok = document.createElement('div')
pt.insertBefore(zagolovok, pt.fistElementChild)
zagolovok.textContent = xhr.response.data.title

let otveti = xhr.response.data.answers;
otveti.forEach((e) => {

    const btn = document.createElement('button')
    btn.classList.add('poll__answer')
    pa.insertBefore(btn, pa.fistElementChild)
    btn.textContent = e
    
    newel()

})

newel()


}


xhr.addEventListener('readystatechange', qwe)
newel()
answer.forEach((e) => e.addEventListener('click', alert('Спасибо, ваш голос засчитан!')))



////* не могу никак навешать работающий обработчик, может из-за ошибки ? ругается на data, хотя в консоле все с ней отображает и находит

 