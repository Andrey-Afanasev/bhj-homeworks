const has = document.querySelectorAll('.has-tooltip')



const popupHint = (event) => {

    event.preventDefault()

    console.log(event.target.getBoundingClientRect())

    if (document.querySelector('.tooltip_active')) {
        document.querySelector('.tooltip_active').remove()
    }

    const hinter = document.createElement('div')
    hinter.classList.add('tooltip');
    hinter.classList.add('tooltip_active');
    hinter.textContent = event.target.title
    hinter.style.left = event.target.getBoundingClientRect().left;
    hinter.style.top = event.target.getBoundingClientRect().top;
    
    event.target.insertBefore(hinter, event.target.firstElementChild)

}



has.forEach((e) => e.addEventListener('click', popupHint))
