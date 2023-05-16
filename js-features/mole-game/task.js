const dead = document.getElementById('dead')
const lost = document.getElementById('lost')

function getHole(index) {
    return document.getElementById(`hole${index}`)
}


function click() {


    for (let index = 1; index <= 9; index++) {

        console.log(getHole(index)) 

        getHole(index).onclick = function () {

            let countsDead = +dead.textContent ;
            let countLost = +lost.textContent ;


            if (getHole(index).className.includes( 'hole_has-mole' )) {
                dead.textContent = countsDead + 1;
               
            } else {
                lost.textContent = countLost + 1;
            }

            if (countsDead === 10) {
                alert('победа!')
                dead.textContent = 0;
                lost.textContent = 0;
            }

            if (countLost === 5) {
                alert('проиграл!')
                dead.textContent = 0;
                lost.textContent = 0;
            }

            
        } 
    
    }

}
    click()







