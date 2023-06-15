const add = document.querySelector('.tasks__add') ///добавить
const form = document.querySelector('form')
const input =document.getElementById('task__input') // содержимое
const list = document.querySelector('.tasks__list')
let newelem
let dataId = 1



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


    }

    const removfunc = (event) => {
       
    
        let cvb = event.target.closest('.task')

        cvb.remove()
     
        console.log(cvb)
    
    
    }
    
    document.querySelectorAll('.task__remove').forEach((e) => e.addEventListener('click', removfunc))


    form.reset()
}




add.addEventListener('click' , adderor)







