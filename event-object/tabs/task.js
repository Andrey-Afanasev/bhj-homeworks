

const tabSmoll = document.querySelectorAll('.tab') /**это вкладки */
const tabsCont = document.querySelectorAll('.tab__content') /** дивы с контентами*/



const tabSwitch = () => {

    const asd = (event) => {
        tabSmoll.forEach((elem) => elem.classList.remove("tab_active"));
        tabsCont.forEach((elem) => elem.classList.remove("tab__content_active"));

        event.target.classList.add('tab_active')

          /**тут у меня только на это ума хватило, как короче будет , если скажите тоя буду рад :) */

        if (tabSmoll[0].className === 'tab tab_active') {    
            tabsCont[0].classList.add("tab__content_active")
        }

        if (tabSmoll[1].className === 'tab tab_active') {
            tabsCont[1].classList.add("tab__content_active")
        }

        if (tabSmoll[2].className === 'tab tab_active') {
            tabsCont[2].classList.add("tab__content_active")
        }
        
    
    }

    tabSmoll.forEach((elem) => {

    elem.addEventListener('click', asd)
    
   
});


}

tabSwitch()


/*
function deleteContents() {
    const tabsCont = document.getElementsByClassName('tab__content');
    for (let i = 0; i <= tabsCont.length; i++)
        tabsCont[i].classList.remove("tab__content_active");
}

/*

const deleteTabSmoll = () => {     
    const tabSmoll = document.querySelectorAll('.tab')
    for (let i =0; i <= tabSmoll.length ; i++ )
    tabSmoll[i].classList.remove("tab_active")
}

/*

const deleteTabSmollTest = () => {     

    const tabSmoll = document.querySelectorAll('.tab')
    const tabsCont = document.getElementsByClassName('tab__content')





    for (let i =0; i <= tabSmoll.length ; i++ ) {
    tabSmoll[i].addEventListener('click', function () { 


        if (tabSmoll[i].className.con( 'tab_active' )) {
            tabSmoll[i].classList.add("tab_active")
        }


       

    })
    }
}

deleteTabSmollTest()






tabSmoll[1].classList.add('tab_active') /**рабочий мтод, переключает класс меню */





/**qwe.addEventListener('click', function(elem) => {elem.classList.add('tab_active')})




for (let i = 0; i <= qwe.length; i++) {


    qwe[i].onclick  = qwe[1].classList.toggle('tab_active')
}



function onClick() {

    alert('sdvxd')
}


tabes.addEventListener('click', onClick) **/