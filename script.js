const opFlechita = () => {
    valor1 = document.getElementById('valor1').value;
    valor2 = document.getElementById('valor2').value;
    operacion = document.getElementById('operacion').value;

    if(operacion == 1){
        var resultados = parseInt(valor1) + parseInt(valor2);
    }
    if(operacion == 2){
        var resultados = parseInt(valor1) - parseInt(valor2);
    }
    if(operacion == 3){
        var resultados = parseInt(valor1) * parseInt(valor2);
    }
    if(operacion == 4){
        var resultados = parseInt(valor1) / parseInt(valor2);
    }

    document.getElementById('resultado').innerHTML = resultados;

}