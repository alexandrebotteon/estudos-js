window.document.onload = carregar()

function carregar(){
    var msg = window.document.querySelector('div#msg')
    var foto = window.document.querySelector('img#img')
    var hora = new Date().getHours()

    msg.innerHTML = `Agora são ${hora}h`

    if (hora >= 0 && hora < 12){
        foto.src = 'img/manha.jpg'
        window.document.body.style.backgroundColor = '#e2cd9f'
    } else if(hora >= 12 && hora < 18){
        foto.src = 'img/tarde.jpg'
        window.document.body.style.backgroundColor = '#b9846f'
    } else {
        foto.src = 'img/noite.jpg'
        window.document.body.style.backgroundColor = '#515154'
    }
}