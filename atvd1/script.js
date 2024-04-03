let numeros = [];

function adicionarNumero() {
    const numeroInput = document.getElementById('numero').value;
    const numeroInt = parseInt(numeroInput);
    
    if (!isNaN(numeroInt)) {
        numeros.push(numeroInt);
        document.getElementById('numero').value = '';

        if (numeros.length === 5) {
            encontrarMenores(); 
        }
    } else {
        alert('Por favor, insira um número inteiro válido.');
    }
}

function encontrarMenores() {
    const numerosMenores = numeros.filter(numero => numero < 50);
    let resultado = '';

    if (numerosMenores.length > 0) {
        resultado += '<p>Números menores que 50:</p>';
        numerosMenores.forEach((numero, index) => {
            resultado += `<p>${numero} na posição ${numeros.indexOf(numero)}</p>`;
        });
    } else {
        resultado = '<p>Nenhum número menor que 50 encontrado.</p>';
    }

    document.getElementById('resultado').innerHTML = resultado;
}
