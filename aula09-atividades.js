// programa de matriz 2x2

let a = [[1,2],[3,4]];

let b = [[5,6],[7,8]];

function somarMatrizes(a,b){
    let resultado = [
        [0, 0], 
        [0, 0]
    ];
}

for (let i = 0; i < 2; i++){
    for (let j = 0; j < 2; j++){
        resultado[i][j] = a[i][j] + b[i][j]
    }

    return resultado;
}



// construindo matriz 3x3

function linhaEscolhida(linha){
    let matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]

    console.log(matriz[linha]);
}



// construindo matriz 4x3

function mostrarMatriz(){
    let matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [10, 11, 12]
    ];

    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 3; j++){
            console.log(matriz[i][j])
        }
    }
}


// construindo matriz 4x4

function somarLinhasEColunas(){
    let matriz = [
        [12, 23, 54, 90]
        [23, 31, 87, 55]
        [19, 43, 76, 88]
        [27, 84, 65, 11]
    ];

    for(let i = 0; i < 4; i++){
        let soma = 0;
        for(let j = 0; j < 4; j++){
            soma += matriz[i][j];
        }

        console.log('linha', i, '=', soma);
    }

    for(let j = 0; j < 4; j++){
        let soma = 0
        for(let i = 0; i < 4; i++){
            soma += matriz[i][j];
        }

        console.log('coluna', j, '=', soma);
    }
}





// atividade extra

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// imprimindo os elementos

function imprimirTudo(matriz){
    for(let i = 0; i < matriz.lenght; i++){
        for(let j = 0; j < matriz.lenght; j++)
            console.log(matriz[i][j]);
    }
}

// somando os quadrados

function somarQuadrados(matriz){
    let soma = 0;

    for(let i = 0; i < matriz.lenght; i++){
        soma += matriz[i][j] * matriz[i][0];
    }

    console.log('soma:', soma);
}

// somando todos elementos da 3a linha

function somarTerceiraLinha(matriz){
    let soma = 0;

    for(let j = 0; j < matriz[2].length; j++){
        soma += matriz[2][j];
    }

    console.log('soma:', soma)
}

// somando elementos da diagonal principal

function somarDiagonal(matriz){
    let soma = 0;

    for(let i = 0; i < matriz.lenght; i++){
        soma += matriz[i][i];
    }

    console.log('soma:', soma);
}


// printando todos 

imprimirTudo(matriz);
somarQuadrados(matriz);
somarTerceiraLinha(matriz);
somarDiagonal(matriz);
