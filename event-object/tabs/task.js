
const tabsCont = document.getElementsByClassName('tab__content') /** с этим тоже самое что и с табами */

/***НАХОДИМ ЭЛЕМЕНЬЫ МЕНЮ */

const qwe = document.querySelectorAll('.tab')

qwe[1].classList.add('tab_active') /**рабочий мтод, переключает класс меню */


qwe.onclick = function() {   /**НО при клеке нет никакой реакции */
    alert('ddv')
}

function onClick() {
  alert('sdvd')
}

qwe.addEventListener('click', onClick) /*addEventListener is not a function*/

tabes.addEventListener

/**qwe.addEventListener('click', function(elem) => {elem.classList.add('tab_active')})




for (let i = 0; i <= qwe.length; i++) {


    qwe[i].onclick  = qwe[1].classList.toggle('tab_active')
}



function onClick() {

    alert('sdvxd')
}


tabes.addEventListener('click', onClick) **/