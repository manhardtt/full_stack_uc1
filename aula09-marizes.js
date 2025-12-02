let funcionarios = ['joao', 'maria', 'miguel'];
let vendas = [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]];
let totalVendas = null;

for ( let i = 0; i < funcionarios.length; i++){
    totalVendas = 0;
    for (venda of vendas[i]){
        totalVendas = totalVendas + venda;
    }
    console.log('o total de vendas de:' + funcionarios[i] + 'foi de' + totalVendas);

}
    