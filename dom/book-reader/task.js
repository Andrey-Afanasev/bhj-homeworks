const size = document.querySelectorAll('.font-size')
const book = document.querySelector('.book__content')

const funcSize = () => {

    

    const asd = (event) => {
        event.preventDefault()

        size.forEach((e) => e.classList.remove('font-size_active'))
        book.classList.remove('font-size_small', 'font-size_big')

        event.target.classList.add('font-size_active')
       
        if (size[0].className === 'font-size font-size_small font-size_active') {
            book.classList.add('font-size_small')
        }

        if (size[2].className === 'font-size font-size_big font-size_active') {
            book.classList.add('font-size_big')
        }

    }

    size.forEach((e) => {e.addEventListener('click' , asd)})
   

}


funcSize()