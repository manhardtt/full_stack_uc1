// atividade 04 - para casa
// função que remove duplicados

function removerDuplicados(vetor){
    let novo = [];

    for(let item of vetor){
        if (!novo.includes(item)){
            novo.push(item);
        }
    }
    
    return novo;
}