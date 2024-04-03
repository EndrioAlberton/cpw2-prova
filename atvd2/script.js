function calcularPreco() {
    const quilometros = parseFloat(document.getElementById('quilometros').value);
    const dias = parseInt(document.getElementById('dias').value);
    
    const precoPorDia = 90;
    const precoPorQuilometro = 0.20;

    if (isNaN(quilometros) || isNaN(dias)){
        document.getElementById('error').innerText = 'Por favor, insira valores numéricos válidos.';
        return;
    }
    if ( dias < 0 || quilometros < 0){
        document.getElementById('error').innerText = 'Por favor, insira valores numéricos postivos.';
        return;
    }

    const precoAluguel = (precoPorDia * dias) + (precoPorQuilometro * quilometros);
    
    document.getElementById('resultado').innerText = `O preço total do aluguel é R$ ${precoAluguel.toFixed(2)}`;
}
