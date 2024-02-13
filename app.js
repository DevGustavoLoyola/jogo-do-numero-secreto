// let titulo = document.querySelector('h1')
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p')
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }
        tentativas++
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite);{
        listaDeNumerosSorteados = []
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

// MÓDULO 2 - EXERCICIOS 1 AO 6

//1.

// function mensagem() {
//     console.log('Olá mundo!');
// }

// mensagem();

//2.

// let nome = prompt('Digite seu nome:');

// function falaTeuNome() {
//     console.log(`Olá, ${nome}!!!`);
// }

// falaTeuNome();

//3.

// function calcularDobro(numero) {
//     return numero * 2;
// }

// let resultadoDobro = calcularDobro(72);
// console.log(resultadoDobro);

//4.

// function calcularMedia(a, b, c) {
//     return (a + b + c)/ 3;
// }

// let resultadoMedia = calcularMedia(2, 3, 4);
// console.log(resultadoMedia)

//5.

// function maiorNumero(a, b) {
//     return a > b ? a : b;
// }

// let resultadoMaior = maiorNumero(10, 20);
// console.log(resultadoMaior)

//6. 

// function quadrado(numero) {
//     return numero * numero;
// }

// resultadoQuadrado = quadrado(20)
// console.log(resultadoQuadrado)

//MÓDULO 2.2 - EXERCÍCIOS 1 AO 6

//1. 

// function calculoIMC (altura, peso){
//     let imc = peso / (alturaMetros * alturaMetros);
// }

//2. 

// function calcularFatorial(numero) {
//     if (numero === 0 || numero === 1) {
//       return 1;
//     }
  
//     let fatorial = 1;
//     for (let i = 2; i <= numero; i++) {
//       fatorial *= i;
//     }
  
//     return fatorial;
//   }
  
//   // Exemplo de uso
//   let numero = 5;
//   let resultado = calcularFatorial(numero);
//   console.log(`O fatorial de ${numero} é ${resultado}`);

//3.

// function converterDolarParaReal (){
//     let cotacaoDolar = 4.80;
//     let valorEmReais = valorEmDolar * cotacaoDolar;
//     return valorEmReai.toFixed(2);
// }

// // Exemplo de uso
// let valorEmDolar = 50;
// let valorEmReais = converterDolarParaReal(valorEmDolar);
// console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);

//4.

// function calcularAreaPerimetroSalaRetangular(altura, largura) {
//     let area = altura * largura;
//     let perimetro = 2 * (altura + largura);
    
//     console.log(`Área da sala: ${area} metros quadrados`);
//     console.log(`Perímetro da sala: ${perimetro} metros`);
//   }
  
//   // Exemplo de uso
//   let altura = 3; // em metros
//   let largura = 5; // em metros
//   calcularAreaPerimetroSalaRetangular(altura, largura);

//5.

// function calcularAreaPerimetroSalaCircular(raio) {
//     let area = Math.PI * raio * raio;
//     let perimetro = 2 * Math.PI * raio;
    
//     console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
//     console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
//   }
  
//   // Exemplo de uso
//   let raio = 4; // em metros
//   calcularAreaPerimetroSalaCircular(raio);

//6. 

// function mostrarTabuada(numero) {
//     for (let i = 1; i <= 10; i++) {
//       let resultado = numero * i;
//       console.log(`${numero} x ${i} = ${resultado}`);
//     }
//   }
  
//   // Exemplo de uso
//   let numero = 7;
//   mostrarTabuada(numero);

//MÓDULO 2.3 - EXERCICIOS 1 AO 6

//1. 

// let listaGenerica = [];

//2.

// let linguagensDeProgramacao = ['Javascript', 'C', 'C++', 'Kotlin', 'Python'];

//3. 

// let linguagensDeProgramacao = ['Javascript', 'C', 'C++', 'Kotlin', 'Python'];
// linguagensDeProgramacao.push('Java', 'GoLang', 'Ruby');

//4. 

// nomes = ['Javascript', 'Python', 'Go']
// console.log(nomes[0]);

//5.

// nomes = ['Javascript', 'Python', 'Go']
// console.log(nomes[1]);

//6. 

// nomes = ['Javascript', 'Python', 'Go']
// console.log(nomes[2]);
