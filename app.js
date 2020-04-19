const { argv } = require('./config/yargs');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

// console.log(argv);
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(error => console.log(error));
        break;
    default:
        console.log('Comando no reconocido');
}