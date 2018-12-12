const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch( comando ) {
    case 'listar':
        listarArchivo(argv.base,argv.limite)
            .then()
            .catch(e => console.log(e));
    break;
    case 'crear':
            crearArchivo(argv.base,argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.yellow))
            .catch(e => console.log(e));
    break;
    default:
        console.log('Comando no reconocido');
}


// let base = '4';

// console.log(process.argv);

// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(argv.b);
// console.log('Limite: ',argv.l);

