const files = require('fs');

function cercaCliente(nome){
    //console.log(nome);
    const clientiJSON = files.readFileSync('clienti.json' , 'utf8' ),
    //console.log(JSON.parse(clientiJSON));
    clienti = JSON.parse(clientiJSON), 
    cliente = clienti.find( clienteItem => clienteItem.nome === nome),
    //console.log(cliente);
    ris = {status: false, suggerimenti: '', cliente: null};


    if(!cliente){
        clienti.map(clienteItem =>{
            if (clienteItem.nome[0] === nome[0]){
                //backtick alt + 0096 
                ris.suggerimenti += `${clienteItem.nome} - `
                console.log(ris);
            }
        });
        return ris;
    }
    ris.status = true;
    ris.cliente = cliente;
    //console.log(ris); 
    return ris;
}


function allCliente(){
    //console.log(nome);
    const clientiJSON = files.readFileSync('clienti.json' , 'utf8' ),
    //console.log(JSON.parse(clientiJSON));
    clienti = JSON.parse(clientiJSON); 
    console.log(clientiJSON)
    return clienti;
}


module.exports = {
    cercaCliente,
    allCliente
}