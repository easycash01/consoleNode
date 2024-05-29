const files = require('fs');

function cercaCliente(nome){
    //console.log(nome);
    const clientiJSON = files.readFileSync('clienti.json' , 'utf8' );
    //console.log(JSON.parse(clientiJSON));
    const clienti = JSON.parse(clientiJSON) 
    const cliente = clienti.find( clienteItem=> clienteItem.nome === nome)
    //console.log(cliente);

    return cliente;
}

module.exports = {
    cercaCliente
}