btn = window.document.querySelector('input#button')
btn.addEventListener('click', verificar)

function verificar(){
    var ano = new Date().getFullYear()
    var nasc = Number(window.document.querySelector('input#txtano').value)
    var res = window.document.querySelector('div#res')

    if (nasc == 0 || nasc > ano){
        window.alert('[ERRO] Verifique os dados!')
    } else{
        var idade = ano - nasc
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'img')

        if (document.getElementById('masc').checked){
            genero = 'Homem'
            
            if (idade >= 1 && idade <= 10){
                img.setAttribute('src', 'img/bebe_h.jpg')
            } else if (idade <= 20){
                img.setAttribute('src', 'img/jovem_h.jpg')
            } else if (idade <= 50){
                img.setAttribute('src', 'img/adulto_h.jpg')
            } else {
                img.setAttribute('src', 'img/idoso.jpg')
            }
        } else if (document.getElementById('fem').checked) {
            genero = 'Mulher'

            if (idade >= 1 && idade <= 10){
                img.setAttribute('src', 'img/bebe_m.jpg')
            } else if (idade <= 20){
                img.setAttribute('src', 'img/jovem_m.jpg')
            } else if (idade <= 50){
                img.setAttribute('src', 'img/adulto_m.jpg')
            } else {
                img.setAttribute('src', 'img/idosa.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
        res.appendChild(img)
    }

}