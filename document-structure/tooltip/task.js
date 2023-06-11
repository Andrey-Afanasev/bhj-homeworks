const has = document.querySelectorAll('.has-tooltip')



const qwe = (e) => {

    e.preventDefault()


    const podskozka = document.createElement('div')
    podskozka.classList.add('tooltip');
    podskozka.classList.add('tooltip_active');
    podskozka.innerHTML = has[0].title

}





has.forEach((e) => e.addEventListener('click', qwe))