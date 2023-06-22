
const editor = document.getElementById('editor')
const storageName = localStorage.getItem('value')


editor.value = storageName


textSave = () => {
    localStorage.removeItem('value')
    localStorage.setItem('value', editor.value)
}

editor.addEventListener('input', textSave)


