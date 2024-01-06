const calcular = document.getElementById('calcular');
const bordaresultado = document.getElementById('bordaresultado');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classficacao = '';

        if (valorIMC < 18.5) {
            classficacao = 'ABAIXO DO PESO.';
            bordaresultado.style.backgroundColor = "#d4c600";
        } else if (valorIMC < 25) {
            classficacao = 'COM PESO IDEAL! PARABÉNS!';
            bordaresultado.style.backgroundColor = "#1b7e02";
        } else if (valorIMC < 30) {
            classficacao = 'LEVEMENTE ACIMA DO PESO.';
            bordaresultado.style.backgroundColor = "#d4c600";
        } else if (valorIMC < 35) {
            classficacao = 'COM OBESIDADE GRAU 1.';
            bordaresultado.style.backgroundColor = "#d49100";
        } else if (valorIMC < 40) {
            classficacao = 'COM OBESIDADE GRAU 2.';
            bordaresultado.style.backgroundColor = "#d44e00";
        } else {
            classficacao = 'COM OBESIDADE GRAU 3. CUIDADO!';
            bordaresultado.style.backgroundColor = "#910000";
        }
        
        resultado.textContent = `${nome.toUpperCase()} SEU IMC É ${valorIMC} E VOCÊ ESTÁ ${classficacao}`

    } else {
        resultado.textContent = 'PREENCHA TODOS OS CAMPOS!';
    }
}

calcular.addEventListener('click', imc);
