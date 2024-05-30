const chalk = require('chalk');

const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const { cercaCliente, allCliente, addCliente } = require('./app-fn')


/* process.versions */

/* process.argv */
//console.log(argv);

/* command : node app.js get--nome="Luca" */
/*node app.js cerca --nome="Luca" */

/* console.log(process.argv); */

//console.log(chalk.blue(argv.nome));
//console.log(chalk.red.inverse(argv.distance)); 

yargs.command({
    command: 'cerca',
    describe: 'Ricerca cliente in base al suo nome',
    builder: {
        nome:{
            describe: 'Nome del cliente',
            demandOption: true,
            typeo: 'string'
        }
    },
    handler(argv){
        //console.log(argv)
       const ris = cercaCliente(argv.nome);
       if(ris.status){
        console.log(chalk.green.bold('cliente trovato !!'));
        console.log(ris.cliente);
       } else {
        console.log(chalk.red.bold('cliente non esiste'));
        console.log('forse cercavi -> ' + ris.suggerimenti)
       }
    }
});


//node app.js tutti  mostra tutti gli utenti
yargs.command({
    command: 'tutti',
    describe: 'Ricerca cliente in base al suo nome',
    handler(argv){
        //console.log(argv)
     const ris = allCliente();
        console.log(ris)
       }
    }
);


yargs.command({
    command: 'aggiungi',
    describe: 'Aggiunto un nuovo cliente',
    builder: {
        nome:{
            describe: 'Nome del cliente da aggiungere',
            demandOption: true,
            typeo: 'string'
        },
        email:{
            describe: 'Email del cliente da aggiungere',
            demandOption: true,
            typeo: 'string'
        },
        telefono:{
            describe: 'Telefono del cliente da aggiungere',
            demandOption: true,
            typeo: 'number'
        }
    },
    handler(argv){
        addCliente(argv)
        console.log('prova aggiungi')
    }    
})

yargs.parse();