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
        img.setAttribute('id', 'foto')

        if (document.getElementById('masc').checked){
            genero = 'Homem'
            
            if (idade >= 1 && idade <= 10){
                
            } else if (idade <= 20){

            } else if (idade <= 50){

            } else {

            }
        } else if (document.getElementById('fem').checked) {
            genero = 'Mulher'

            if (idade >= 1 && idade <= 10){

            } else if (idade <= 20){

            } else if (idade <= 50){

            } else {
                
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
    }

}