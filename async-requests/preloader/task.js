let xhr = new XMLHttpRequest()
xhr.responseType = 'json'
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.send()


const item = document.querySelector('.item')
const loader = document.getElementById('loader')
const items = document.getElementById('items')


const qwe = () => {

    loader.classList.remove('loader_active')


    Object.entries(xhr.response.response.Valute).forEach((e) => {

       
        const code = document.createElement('div')    
        code.classList.add('item__code')
        code.textContent = e[0]
        item.insertBefore(code, item.fistElementChild)

        const value = document.createElement('div')
        value.classList.add('item__value')
        value.textContent = e[1].Value
        item.insertBefore(value, item.fistElementChild)

        const currency = document.createElement('div')
        currency.classList.add('item__currency')
        currency.textContent = 'руб.'
        item.insertBefore(currency, item.fistElementChild)

       
    })

    
}


xhr.addEventListener('readystatechange', qwe)


/////////// не получается разделить данные по классу итем, они все в одном





