document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('submit',function(evento){
        evento.preventDefault();

        document.querySelector('.resultado').style.display="block";
        let numMaximo = document.getElementById('numero-maximo').value;

        let numAleatorio = numMaximo*Math.random();

        numAleatorio = Math.floor(numAleatorio + 1)

        document.getElementById('numero-sorteado').innerText = numAleatorio;
    })
})