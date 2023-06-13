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

        if (document.getElementById('masc').checked){
            genero = 'Masculino'
        } else if (document.getElementById('fem').checked) {
            genero = 'Feminino'
        }
    }

}