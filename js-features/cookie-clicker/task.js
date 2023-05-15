const cookie = document.getElementById('cookie');
const clicker = document.getElementById('clicker__counter');



cookie.onclick = () => {

    clicker.textContent = +clicker.textContent + 1;

    if (cookie.width === 200) {
        cookie.width = 250;
    } else {
        cookie.width = 200;
    }
    
    
} 