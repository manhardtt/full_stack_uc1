// Importa o prompt-sync
const prompt = require('prompt-sync')();

// ---------------------- FUNÇÕES DE ENTRADA ----------------------

function tratar_entrada_usuario_textual(mensagem) {
    let respostaUsuario = prompt(mensagem);
    if (!respostaUsuario) respostaUsuario = '';
    return respostaUsuario.trim().toLowerCase();
}

function tratarEntradaUsarioNumerica(mensagem) {
    let valor = NaN;

    while (isNaN(valor)) {
        const resposta = prompt(mensagem);
        valor = parseFloat(resposta);

        if (isNaN(valor)) {
            console.log('Por favor, digite um número válido.');
        }
    }

    return valor;
}

// ---------------------- REGRAS DO PEDIDO ------------------------

function verificar_pedido_finalizado() {
    let resposta = '';

    do {
        resposta = tratar_entrada_usuario_textual('Gostaria de finalizar o pedido? (s/n): ');
    } while (resposta !== 's' && resposta !== 'n');

    return resposta === 's';
}

function buscarProduto(produtos, id) {
    for (const item of produtos) {
        if (item['id'] === id) {
            return item;
        }
    }
    return null;
}

function adicionarProdutoPedido(pedido, produtos) {
    let registroProdutoAdicionado = null;
    let idProdutoAdicionado = null;

    // Escolher um produto válido
    do {
        console.log('-------------------- CARDÁPIO --------------------');
        for (const item of produtos) {
            console.log(
                'ID: ' + item.id +
                ' | Produto: ' + item.produto +
                ' | Valor: R$ ' + item.valor
            );
        }
        console.log('--------------------------------------------------');

        idProdutoAdicionado = tratarEntradaUsarioNumerica(
            'Digite o ID do produto a ser adicionado: '
        );

        registroProdutoAdicionado = buscarProduto(produtos, idProdutoAdicionado);

        if (registroProdutoAdicionado == null) {
            console.log('Produto não encontrado. Digite um ID válido.\n');
        }
    } while (registroProdutoAdicionado == null);

    // Quantidade
    const quantidadeProduto = tratarEntradaUsarioNumerica(
        'Digite a quantidade de ' + registroProdutoAdicionado['produto'] + ': '
    );

    const totalItem = quantidadeProduto * registroProdutoAdicionado['valor'];

    pedido.push({
        produto: registroProdutoAdicionado['produto'],
        quantidade: quantidadeProduto,
        valor_unitario: registroProdutoAdicionado['valor'],
        total: totalItem
    });

    console.log('\nProduto adicionado com sucesso!\n');

    return pedido;
}

// ---------------------- LISTAGEM E TOTAL ------------------------

function listarProduto(pedido) {
    console.log('----------------------- PEDIDO ATUAL -----------------------');
    if (pedido.length === 0) {
        console.log('Nenhum item no pedido ainda.');
    } else {
        for (const item of pedido) {
            console.log(
                item['quantidade'] + 'x ' +
                item['produto'] +
                ' - R$ ' + item['total']
            );
        }
    }
    console.log('------------------------------------------------------------');
}

function calcularTotal(pedido) {
    let total = 0;
    for (const item of pedido) {
        total = total + item['total'];
    }
    return total;
}

// ---------------------- PROGRAMA PRINCIPAL ----------------------

let pedido_finalizado = false;
const produtos = [
    { id: 1, produto: 'pizza',        valor: 89 },
    { id: 2, produto: 'refrigerante', valor: 19 }
];
let pedido = [];

do {
    adicionarProdutoPedido(pedido, produtos);
    listarProduto(pedido);

    const totalParcial = calcularTotal(pedido);
    console.log('Total parcial: R$ ' + totalParcial + '\n');

    pedido_finalizado = verificar_pedido_finalizado();
    console.log();
} while (!pedido_finalizado);

const totalFinal = calcularTotal(pedido);
console.log('------------------------------------------------------------');
console.log('Total final do pedido: R$ ' + totalFinal);
console.log('Fim do programa.');