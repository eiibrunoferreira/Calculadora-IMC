const containerName = document.getElementById("containerName");
const containerInputName = document.getElementById("containerInputName");
const labelInputName = document.getElementById("labelInputName");
const inputName = document.getElementById("inputName");
const erroName = document.getElementById("msnErrorName");
const botaoName = document.getElementById("btnName");
const containerAltura = document.getElementById("containerAltura");
const containerInputAltura = document.getElementById("containerInputAltura");
const inputAltura = document.getElementById("inputAltura");
const erroAltura = document.getElementById("msnErrorAltura");
const botaoAltura = document.getElementById("btnAltura");
const containerPeso = document.getElementById("containerPeso");
const containerInputPeso = document.getElementById("containerInputPeso");
const inputPeso = document.getElementById("inputPeso");
const erroPeso = document.getElementById("msnErrorPeso");
const botaoPeso = document.getElementById("btnPeso");
const botaoVoltar = document.getElementById("btnVoltar");
const containerResult = document.getElementById("containerResultado");


function esconderErro() {
  erroName.style.display = "none"
  erroAltura.style.display = "none"
  erroPeso.style.display = "none"
}

inputName.addEventListener("change", esconderErro)
inputName.addEventListener("keydown", esconderErro)
inputAltura.addEventListener("change", esconderErro)
inputAltura.addEventListener("keydown", esconderErro)
inputPeso.addEventListener("change", esconderErro)
inputPeso.addEventListener("keydown", esconderErro)


function imc() {
  const nome = inputName.value
  const altura = inputAltura.value
  const peso = inputPeso.value
  const containerResultado = document.getElementById("containerResultado");

  const valorIMC = (peso / (altura * altura)).toFixed(1);

  let classificacao = "";

  if (valorIMC < 18.5) {
    classificacao = 'ABAIXO DO PESO. &#x1F62C';
  } else if (valorIMC < 25) {
    classificacao = 'COM PESO IDEAL! PARABÉNS &#x1F929!';
  } else if (valorIMC < 30) {
    classificacao = 'LEVEMENTE ACIMA DO PESO. &#x1F440';
  } else if (valorIMC < 35) {
    classificacao = 'COM OBESIDADE GRAU 1. &#x1F633';
  } else if (valorIMC < 40) {
    classificacao = 'COM OBESIDADE GRAU 2. &#x1F630';
  } else {
    classificacao = '&#x1F4A2 COM OBESIDADE GRAU 3 &#x1F4A2. CUIDADO&#x2757';
  }

  containerResult.style.display = "flex"
  containerResultado.innerHTML = `
    <h1 class="text-white font-bold text-center">Oii ${nome.toUpperCase()}, tudo bem? Espero que sim!</h1>
      <p class="text-white text-center">Então... conforme a sua altura de: ${altura}cm e o seu peso de ${peso}Kg, seu índice de massa
        corporal (IMC) está:
      <p class="font-bold text-center text-white">${classificacao}</p>
      <p class= "font-bold text-center text-white">IMC= ${valorIMC}</p>
      </p>
    `

}


botaoName.addEventListener("click", function () {
  if (inputName.value === "") {
    erroName.style.display = "flex";
  } else {
    containerName.style.display = "none"
    esconderErro()
    containerAltura.style.display = "flex"
  }
});

botaoAltura.addEventListener("click", function () {
  if (inputAltura.value === "") {
    erroAltura.style.display = "flex";
  } else {
    containerAltura.style.display = "none"
    esconderErro()
    containerPeso.style.display = "flex"
  }
});

botaoPeso.addEventListener("click", function () {
  if (inputPeso.value === "") {
    erroPeso.style.display = "flex";
  } else {
    containerPeso.style.display = "none"
    esconderErro()
    imc()
    botaoVoltar.style.display = "flex"
  }
})

botaoVoltar.addEventListener("click", function () {
  inputName.value = ""
  inputAltura.value = ""
  inputPeso.value = ""
  containerResult.style.display = "none";
  botaoVoltar.style.display = "none"
  containerName.style.display = "flex";
})




inputName.addEventListener("focus", function () {
  containerInputName.classList.add("scale-110")
});

inputName.addEventListener("blur", function () {
  containerInputName.classList.remove("scale-110")
});

inputAltura.addEventListener("focus", function () {
  containerInputAltura.classList.add("scale-110")
});

inputAltura.addEventListener("blur", function () {
  containerInputAltura.classList.remove("scale-110")
});

inputPeso.addEventListener("focus", function () {
  containerInputPeso.classList.add("scale-110")
});

inputPeso.addEventListener("blur", function () {
  containerInputPeso.classList.remove("scale-110")
});






