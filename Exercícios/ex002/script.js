btn = window.document.querySelector('input#button')
btn.addEventListener('click', verificar)

function verificar(){
    var ano = new Date().getFullYear()
    var nasc = Number(window.document.querySelector('input#txtano').value)
    var res = window.document.querySelector('div#res')

    if (nasc == 0 || nasc > ano){
        window.alert('[ERRO] Verifique os dados!')
    } else{
        var sexo = window.document.getElementsByName('txtsex')
        var idade = ano - nasc
        var genero = ''

        if (sexo[0].checked){
            genero = 'Masculino'
        } else {
            genero = 'Feminino'
        }

        console.log(genero)
    }

}