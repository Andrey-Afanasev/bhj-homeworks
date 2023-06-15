const productadd = document.querySelectorAll('.product__add') //добавить в корзину
const quantity = document.querySelectorAll('.product__quantity-value') // количество
const minus = document.querySelectorAll('.product__quantity-control_dec')
const plus = document.querySelectorAll('.product__quantity-control_inc')
const card = document.querySelector('.cart__products')
const pimage = document.querySelectorAll('.product__image')
let addProducts
const product = document.querySelectorAll('.product')



////////кнопки  плюс и минус

const plusuem = (event) => {

    let index = event.target.closest('.product').getAttribute('data-id');
    quantity[+index - 1].textContent++

}

plus.forEach((e) => e.addEventListener('click', plusuem))

const minusuem = (event) => {

    let index = event.target.closest('.product').getAttribute('data-id');
    
    if (quantity[+index - 1].textContent >= 2) {
        quantity[+index - 1].textContent--;
    }

}

minus.forEach((e) => e.addEventListener('click', minusuem ))



/////////////////////////////////// добавляем в корзину



function addToCart(event) {

   

      let index = event.target.closest('.product').getAttribute('data-id');


        if ([...document.querySelectorAll('.cart__product')].some(e => e.getAttribute('data-id') === index ) === true ) {

        let elementKorzin = [...document.querySelectorAll('.cart__product')].findIndex(e => e.getAttribute('data-id') == index)

        document.querySelectorAll('.cart__product-count')[elementKorzin].textContent = +document.querySelectorAll('.cart__product')[elementKorzin].textContent + +quantity[+index - 1].textContent

        quantity[+index - 1].textContent = 1

    

      } else {


        const pf = document.createElement('div')
        const kol = document.createElement('div')

        const prod = product[+index - 1].cloneNode(false)
        card.insertBefore(prod, card.lasttElementChild)
        prod.classList.remove('product')
        prod.classList.add('cart__product')

    
        const ixmenaQuant = quantity[+index - 1].cloneNode(true)
        ixmenaQuant.classList.remove('product__quantity-value')
        ixmenaQuant.classList.add('cart__product-count')

        pf.innerHTML = pimage[+index - 1].outerHTML
        kol.innerHTML =  ixmenaQuant.outerHTML

        prod.insertBefore(pf, prod.fistElementChild)
        prod.insertBefore(kol, prod.firstElementChild)


        quantity[+index - 1].textContent = 1

      }


    } 

    


productadd.forEach((e) => e.addEventListener('click', addToCart))









