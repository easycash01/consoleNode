const chalk = require('chalk');

const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const { cercaCliente } = require('./app-fn')


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
       const cliente = cercaCliente(argv.nome);
       console.log(cliente);
    }
});

yargs.parse();