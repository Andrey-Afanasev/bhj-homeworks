const productadd = document.querySelectorAll('.product__add') //добавить в корзину
const quantity = document.querySelectorAll('.product__quantity-value') // количество
const minus = document.querySelectorAll('.product__quantity-control_dec')
const plus = document.querySelectorAll('.product__quantity-control_inc')
const card = document.querySelector('.cart__products')
const pimage = document.querySelectorAll('.product__image')
const addProducts = document.querySelectorAll('.cart__product')
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



///////////////////////////////////






/////////////////////////////////// добавляем в корзину



function qwe(event) {

    let index = event.target.closest('.product').getAttribute('data-id');

    const prodCount = document.querySelectorAll('.cart__product-count')
   

    prodCount.forEach((e) => {

        if (e.closest('.cart__product').getAttribute('data-id') !== index) {

            console.log('xvxd')
            return

        }

       })
        
    
   
        

    
   /* if (document.querySelectorAll('.cart__product-count')){

        if(document.querySelectorAll('.cart__products')[0].getAttribute('data-id') !== (+index - 1)){

            console.log(document.querySelectorAll('.cart__product-count')[0].closest(".cart__product").getAttribute('data-id'))
            quantity[+index - 1].textContent = 1
            return

        }
        
    }*/


    


    const pf = document.createElement('div')
    const kol = document.createElement('div')


    const prod = product[+index - 1].cloneNode(false)
    card.insertBefore(prod, card.firstElementChild)
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


productadd.forEach((e) => e.addEventListener('click', qwe))


////////////////////////////////////


////////////+document.querySelectorAll('.cart__product')[0].getAttribute('data-id')



///document.querySelectorAll('.cart__product-count')[+index - 1].textContent =  +document.querySelectorALL('.cart__product-count')[+index - 1].textContent + +quantity[+index - 1].textContent