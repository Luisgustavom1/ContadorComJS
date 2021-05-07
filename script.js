function comecar() {
    var sinicio = window.document.getElementById('numinicio')
    var sfim = window.document.getElementById('numfim')
    var spasso = window.document.getElementById('numpasso')
    var res = window.document.getElementById('res')
    var inicio = Number(sinicio.value)
    var fim = Number(sfim.value)
    var passo = Number(spasso.value)

    if (sinicio.value.length == 0 || sfim.value.length == 0 || spasso.value.length == 0) {
        window.alert('[ERRO] Preencha os dados')
        res.innerHTML = 'IMPOSSIVEL CONTAR'
    } else {
        res.innerText = 'Contando...'
        
        if(passo <= 0){
            window.alert('Impossivel contar considerando PASSO como 1')
            passo = 1
        }

        if (inicio < fim){
            for(var c = inicio; c <= fim; c+=passo){
                res.innerHTML += `${c} \u{1F449} `  
                //ordem crescente  
            }
        } else{
            for(var c = inicio; c >= fim; c-=passo){
                res.innerHTML += `${c} \u{1F449}`
                //ordem decrescente
            }
        } 
        res.innerHTML += `\u{1F468}`
    } 
} 













