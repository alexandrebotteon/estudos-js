var body = window.document.querySelector('body')
body.addEventListener('load', carregar)

function carregar(){
    var msg = window.document.querySelector('div#msg')
    var foto = window.document.querySelector('img#img')
    var hora = new Date().getHours()

    msg.innerHTML = `Agora são ${hora}h`
}