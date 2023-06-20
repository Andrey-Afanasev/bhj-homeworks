
const editor = document.getElementById('editor')
const storageName = localStorage.getItem('value')

if (storageName) {
    editor.value = storageName

} else {
    localStorage.setItem('value', editor.value)
}


qwe = () => {
    localStorage.removeItem('value')
    localStorage.setItem('value', editor.value)
}

editor.addEventListener('change', qwe)


