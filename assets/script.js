function calcular() {

    let PecasA = document.getElementById("a").value
    let PecasA2 = document.getElementById("a2").value
    let PecasC = document.getElementById("c").value
    let PecasC2 = document.getElementById("c2").value
    let divisor = document.getElementById("d").value
    let result = document.getElementById('res')
    let botao = document.getElementById('button')





    if (PecasA < 0 || PecasC < 0 || divisor <= 0) {
        window.alert("Por favor, verifique seus dados e tente novamente!")
        result.innerHTML = ""

    } else {

        let metrosQuadradosA = PecasA / divisor
        let metrosQuadradosA2 = PecasA2 / divisor
        let metrosQuadradosC = PecasC / divisor
        let metrosQuadradosC2 = PecasC2 / divisor
        let totalMetrosQuadrados = metrosQuadradosA + metrosQuadradosC + metrosQuadradosA2 + metrosQuadradosC2
        let totalMetrosA = metrosQuadradosA + metrosQuadradosA2
        let totalMetrosC = metrosQuadradosC + metrosQuadradosC2
        let qualidade = (totalMetrosA / totalMetrosQuadrados) * 100
        let porcentagemDefeitos = 100 - qualidade


        result.innerHTML = `TOTAL m²: ${totalMetrosQuadrados.toFixed(2)}m <br>m² A: ${totalMetrosA.toFixed(2)}m  <br>m² C: ${totalMetrosC.toFixed(2)}m <br> <span style = "color: green"<br> Qualidade: ${qualidade.toFixed(2)}% </span> <br> <span style = "color: red" <br> Defeitos: ${porcentagemDefeitos.toFixed(2)}% </span>`


        document.getElementById("clear").style.display = "block";


    }



}

function limpar() {
    location.reload();
}

//////////// Criado por Cleilton Vieira de Oliveira (Tom Vieira): cleilton7700@gmail.com / setembro de 2023. ////