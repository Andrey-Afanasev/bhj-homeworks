const reveal = document.querySelectorAll('.reveal')


function isVisible(el) {
    const { top, bottom } = el.getBoundingClientRect()

    if (bottom < 0) {
    return false
    }

    if (top > window.innerHeight) {
    return false
    }
    return true
}

function activRevel() {

    reveal.forEach((e) => {

        if (isVisible(e) === true) {
            e.classList.add('reveal_active')
        }
        
        if (isVisible(e) === false) {
            e.classList.remove('reveal_active')
        }
        
    })

}

activRevel()

window.addEventListener('scroll', activRevel)







  

   






