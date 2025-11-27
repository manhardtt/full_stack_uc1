// função recebendo um vetor

function apresentarVetor(){
    console.log(vetor)
    
}

var vetor = [];

vetor.push({numero: '1'})
apresentarVetor(vetor)


// construindo programa 

let vetor = [1,2,3]


function mostrarArray(){
    console.log(vetor);
}

function adicionarArray(valor){
    vetor.push(valor);
}

function removerArray(elemento){
    vetor.pop(elemento, 1);
}

function trocarArray(vetor, novoValor){
    vetor[elemento] = novoValor
}


// construindo programa digitando 10

function analisarNumeros(){
    let soma = 0;
    let menor = numeros[0];
    let maior = numeros[0];

    for(let i = 0; i < numeros.lenght; i++){
        soma += numeros[i];

        if (numeros[i] < menor) menor = numeros[i];
        if (numeros[i] > maior) maior = numeros[i];

    }

    let media = soma / numeros.lenght

    console.log("Soma", soma);
    console.log("Média", media);
    console.log("Menor", menor);
    console.log("Maior", maior);
}



