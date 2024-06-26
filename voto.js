let resposta = document.getElementById("resposta")
console.log(resposta)

function verVoto(){
    // entrada de dados
    let nome =  document.getElementById("nome").value
    let idade = Number(document.getElementById("idade").value)

    console.log(nome)
    console.log(idade)

    // processamento das informaçoes

    if((idade >= 0)&&(idade < 16)){
        console.log("Você não tem idade minima para votar")
        console.log("pois a sua idade é "+idade+ ' anos')
        resposta.innerHTML = "Você não tem idade minima para votar <br>"
        resposta.innerHTML += "pois a sua idade é "+idade+ ' anos'
        resposta.style.color = 'rgb(241, 164, 164)'

    }else if((idade >= 16)&&(idade < 18)){
        console.log("Em função da sua idade, o voto é facultativo")
        console.log("pois a sua idade é "+idade+ ' anos')
        resposta.innerHTML = "Em função da sua idade, o voto é facultativo  <br>"
        resposta.innerHTML += "pois a sua idade é "+idade+ ' anos'
        resposta.style.color = 'yellow'



         
    }else if((idade >= 18)&&(idade < 70)){
        console.log("Em função da sua idade, o voto é obrigatorio")
        console.log("pois a sua idade é "+idade+ ' anos')
        resposta.innerHTML = "Em função da sua idade, o voto é facultativo  <br>"
        resposta.innerHTML += "pois a sua idade é "+idade+ ' anos'
        resposta.style.color = 'green'



    }else if(idade >= 70){
        console.log("Em função da sua idade, o voto é facultativo")
        console.log("pois a sua idade é "+idade+ ' anos')
        resposta.innerHTML = "Em função da sua idade, o voto é facultativo  <br>"
        resposta.innerHTML += "pois a sua idade é "+idade+ ' anos'
        resposta.style.color = 'green'


    }else{
        console.log("Você digitou um valor invalido. Digite a idade novamente!")

    }


}