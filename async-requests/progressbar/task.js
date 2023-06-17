
const form = document.getElementById('form');
const progress = document.getElementById('progress');
const file = document.getElementById('file');


const submitForms = (e) => {

    e.preventDefault()

    let xhr = new XMLHttpRequest()

    const subEvent = () => {

        if(xhr.readyState === xhr.DONE) {

        }

    }



  // отслеживаем процесс отправки
  xhr.upload.onprogress = function(event) {
    console.log(`Отправлено ${event.loaded} из ${event.total}`);
    progress.value = event.loaded;
  };

  // Ждём завершения: неважно, успешного или нет
  xhr.onloadend = function() {
    if (xhr.status == 200) {
      console.log("Успех");
    } else {
      console.log("Ошибка " + this.status);
    }
  };
    

    xhr.addEventListener('readystatechange', subEvent)

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')

    const formData = new FormData(form)

    xhr.send(formData)


}

form.addEventListener('submit', submitForms)





