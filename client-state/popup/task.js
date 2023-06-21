

const modal = document.getElementById('subscribe-modal')
const modalCook = document.cookie.split(';')

if (!modalCook.includes("popup=modal_no_active")) {
    modal.classList.add('modal_active')

} 

const close = (e) => {
    e.preventDefault()
    modal.classList.remove('modal_active')
    document.cookie = 'popup' + '=' + 'modal_no_active'
}

document.querySelector('.modal__close').addEventListener('click', close)

