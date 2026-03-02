function enviar(){
    var nome = document.querySelector("input#first")
    var sobre = document.querySelector("input#last")
    var email = document.querySelector("input#email")
    var msg = document.querySelector("textarea#msg")
    if (nome.value.trim() == "" || sobre.value.trim() == ""){
        window.alert("Erro digite algo")
        nome.style.border = "1px solid lightcoral"
        sobre.style.border = "1px solid lightcoral"
        
    }
    if(nome.value.trim().length >=4){
        window.alert("Nome esta correto")
         
    } else{
        window.alert("Erro Nome esta incorreto")
        
    }
    if(sobre.value.trim().length >=6){
        window.alert("Sobrenome esta correto")
        
    } else{
        window.alert("Erro sobrenome esta incorreto")
        
    }
    if(email.value.length > 22){
        window.alert("Email esta correto")
    }
    else if(email.value.trim() == ""){
        window.alert("Erro email esta vazio")
        email.style.border = "1px solid lightcoral"

    }
    else{
        window.alert("Email incorreto tente novamente.")
        email.style.border = "1px solid lightcoral"
        
    }
    if (msg.value.trim().length >= 6){
        window.alert("Mensagem enviada")
    }
    else if (msg.value.trim() == ""){
        window.alert("Mensagem incorreta tente novamente.")
        msg.style.border = "1px solid lightcoral"
        
    }
   
}