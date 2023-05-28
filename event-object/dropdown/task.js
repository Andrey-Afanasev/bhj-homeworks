
const dropdownItem = document.querySelectorAll('.dropdown__item')
const button = document.querySelector('.dropdown__value')
const list = document.querySelector('.dropdown__list ')




/**открывает и закрывает окно */

const openList = () => {

    list.classList.toggle('dropdown__list_active')
}

button.addEventListener('click', openList)

qwe = (event) => {

    button.textContent = event.target.textContent;
    openList()
    event.preventDefault()

}

dropdownItem.forEach((elem) => { elem.addEventListener('click', qwe)})





