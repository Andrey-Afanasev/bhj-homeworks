
const editor = document.getElementById('editor')
const storageName = localStorage.getItem('value')

if (storageName ) {

    editor.value = storageName

} else {

    localStorage.setItem('value', editor.value)

}


