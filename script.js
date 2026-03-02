function enviar(){
    var nome = document.querySelector("input#first")
    var sobre = document.querySelector("input#last")
    var email = document.querySelector("input#email")
    var msg = document.querySelector("textarea#msg")
    var res = document.querySelector("div#res")
    var res1 = document.querySelector("div#res1")
    var res2 = document.querySelector("div#res2")

    


    res.innerHTML = ""
    res.style.color = "red"
    res1.innerHTML = ""
    res1.style.color = "red"
    res2.innerHTML = ""
    res2.style.color = "red"
    res3.innerHTML = ""
    res3.style.color = "red"





    if (nome.value.trim() == "" || sobre.value.trim() == ""){
        res.innerHTML += "Erro tente novamente"
        nome.style.border = "1px solid lightcoral"
        sobre.style.border = "1px solid lightcoral"
        return
    }
    if(nome.value.trim().length >=4){
        res.innerHTML += ""
        nome.style.border = "1px solid lightblue"
         
    } else{
        res.innerHTML += "Nome Esta incorreto"
        nome.style.border = "1px solid lightcoral"

        return
    }
    if(sobre.value.trim().length >=6){
        res.innerHTML += ""
        sobre.style.border = "1px solid lightblue"

        
    } else{
        res.innerHTML += "Sobrenome Esta incorreto"
        sobre.style.border = "1px solid lightcoral"
        return
    }
    if(email.value.length > 22){
        res.innerHTML += ""
        email.style.border = "1px solid lightblue"
    }
    else if(email.value.trim() == ""){
        res1.innerHTML += "Erro o Email esta incorreto"
        email.style.border = "1px solid lightcoral"
        return

    }
    else{
        window.alert("Email incorreto tente novamente.")
        email.style.border = "1px solid lightcoral"
        return
        
    }
    if (msg.value.trim().length >= 6){
        msg.style.border = "1px solid lightblue"
    }
    else if (msg.value.trim() == ""){
        res3.innerHTML += "Mensagem incorreta tente novamente"
        msg.style.border = "1px solid lightcoral"
        return
    }
    else{
        window.alert("Mensagem enviada")
        return
    }
   
}