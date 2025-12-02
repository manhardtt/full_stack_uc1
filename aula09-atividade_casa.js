// funcao que remove duplicatas

function removerDuplicados(vetor) {
  let novo = [];

  for (let item of vetor) {
    if (!novo.includes(item)) {
      novo.push(item);
    }
  }

  return novo;
}