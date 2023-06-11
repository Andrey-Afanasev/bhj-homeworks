const add = document.querySelector('.tasks__add') ///добавить
const form = document.querySelector('form')
const input =document.getElementById('task__input') // содержимое
const list = document.querySelector('.tasks__list')
let newelem
let dataId = 1

function newnew() {
    newelem = document.querySelectorAll('.task__remove')
}

const adderor = (e) => {
    e.preventDefault()

    if (input.value) {

        

        const divtask = document.createElement('div')
        divtask.classList.add('task')
        divtask.dataset.id = dataId
        dataId++
    
        list.insertBefore(divtask, list.fistElementChild)
    
        const tasktitle = document.createElement('div')
        tasktitle.classList.add('task__title')
        divtask.insertBefore(tasktitle, divtask.fistElementChild)
        tasktitle.textContent = input.value;
    
        const taskremove = document.createElement('a')
        taskremove.classList.add('task__remove')
        divtask.insertBefore(taskremove, divtask.fistElementChild)
        taskremove.textContent = 'удалить'

        newnew()

    }



    const removfunc = (event) => {

        let cvb = document.querySelectorAll('.task')[0]
        cvb.remove()

        ////newelem[0].closest('.task').getAttribute('data-id')
    
        console.log(event.target.closest('.task').getAttribute('data-id'))

    
    }
    
    newelem.forEach((e) => e.addEventListener('click', removfunc))
    
    

    form.reset()
}


add.addEventListener('click' , adderor)




