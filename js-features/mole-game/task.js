const dead = document.getElementById('dead')
const lost = document.getElementById('lost')

function getHole(index) {
    return document.getElementById(`hole${index}`)
}

/**это ченовые ноброски*/ 

function qwe() {

    let holeIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    for (let index = 0; index <= holeIndex.length; index++) {

        console.log(getHole(index)) /**тут я использую цикл для перебопа каждой лунки как написано в советах по заданию. он рабоатет */

        getHole(index).onclick = function () {
            alert('hallo')
        } /**потом по моей логике, нужна функция которая котая при каждом клике на каждую лунку будет проверять, но тут выдает ошибку,
         что я упускаю? или другой подход нужно использовать
         */

    
}

}

/**это тоже черновой код */


let countsDead = +dead.textContent ;
let countLost = +lost.textContent ;

if (getHole(index).className.includes( 'hole_has-mole' )) { /* на сколько верен такой подход? */
    dead.textContent = countsDead + 1;
} else {
    lost.textContent = countLost + 1;

}






