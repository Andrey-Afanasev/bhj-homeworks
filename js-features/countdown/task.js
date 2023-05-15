const timer = document.getElementById("timer");


const timerok = () => {
    let numberTime = +timer.textContent;
   
    let idInterval = setInterval(func = () => {
        numberTime -= 1
        if (numberTime === 0) {
            clearInterval(idInterval)
            alert('«Вы победили в конкурсе!»')
        }

        timer.textContent = numberTime;
    
    }, 1000)

    
   
}

timerok()



