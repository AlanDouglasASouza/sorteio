let nomes = []

function adicionar(){

    let sel = document.getElementById('list')
    let adc = document.getElementById('cnome').value
     if (adc.length == 0) {
        alert('Por favor insira um nome na lista.')    
    } else {
        nomes.push(adc)
       
        let item = document.createElement('option')
        item.text = `${adc}`
        sel.appendChild(item)
    
        document.getElementById('cnome').value = ""
        document.getElementById('cnome').focus()
         }        
    }    
   

    function sortear() {
    if (nomes.length == 0) {
        alert('Por favor cadastre nomes na lista antes de sortear.')
    } else {
       let ind = Number(nomes.length)
        let resu = parseInt(Math.random() * ind)   
        let fim = document.getElementById('res')
            
        fim.innerHTML = `Parabéns!! O ganhador foi: </br><strong>${nomes[resu]}</strong>`
    }
    }
/*
    function naLista(n, l) {
        if (l.indexOf(n) == -1) {
            return true
        } else {
            return false
        }
    }*/