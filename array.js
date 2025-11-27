function apresentarConsole(arr){
   for(item of arr){
        console.log(item);
    } 
    
}

var filaCozinha = [];

apresentarConsole(filaCozinha);

filaCozinha.push({produto: 'pizza', quantidade: '2'})
apresentarConsole(filaCozinha);

filaCozinha.push({produto: 'hamburguer', quantidade: '3'})
apresentarConsole(filaCozinha);

filaCozinha.shift()
apresentarConsole(filaCozinha);