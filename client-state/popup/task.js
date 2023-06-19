

const modal = document.getElementById('subscribe-modal')


if (document.cookie) {


} else {
    modal.classList.add('modal_active')
}


const qwe = (e) => {
    e.preventDefault()
    modal.classList.remove('modal_active')
    document.cookie = 'modal_active'
}

document.querySelector('.modal__close').addEventListener('click', qwe)