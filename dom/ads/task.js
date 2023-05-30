const rotator = document.querySelectorAll('.rotator__case')


let schet = 0;


const qwe = () => {

  if (rotator[schet].className === 'rotator__case rotator__case_active') {
  rotator[schet].classList.remove('rotator__case_active')
  }

  schet++;

  if (schet === (rotator.length)) {

    schet = 0;
    }

  rotator[schet].classList.add('rotator__case_active')

}

setInterval(qwe, 1000)



