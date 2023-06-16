let xhr = new XMLHttpRequest()
xhr.responseType = 'json'
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.send()


const item = document.querySelectorAll('.item')
const loader = document.getElementById('loader')
const items = document.getElementById('items')


const qwe = () => {

    if(xhr.readyState === xhr.DONE) {

        loader.classList.remove('loader_active')

        Object.entries(xhr.response.response.Valute).forEach((e) => {

        const newItem =document.createElement('div')
        newItem.classList.add('item')
        items.insertBefore(newItem, items.fistElementChild)

       
        const code = document.createElement('div')    
        code.classList.add('item__code')
        code.textContent = e[0]
        newItem.insertBefore(code, newItem.fistElementChild)

        const value = document.createElement('div')
        value.classList.add('item__value')
        value.textContent = e[1].Value
        newItem.insertBefore(value, newItem.fistElementChild)

        const currency = document.createElement('div')
        currency.classList.add('item__currency')
        currency.textContent = 'руб.'
        newItem.insertBefore(currency, newItem.fistElementChild)

       
    })


    }

}


xhr.addEventListener('readystatechange', qwe)


/////////// не получается разделить данные по классу итем, они все в одном





