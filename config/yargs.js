let argv = require('yargs')
    .command(
        'listar', 'Imprime en consola la tabla de mult', {
            base: {
                demand: true,
                //alias: 'b'
            },
            limite: {
                //alias: 'l',
                default: 10
            }
        }
    ).command('crear', 'Crea un archivo con la tabla de multiplicar dada una base', {
        base: {
            demand: true
        },
    })
    .help()
    .argv;

module.exports = {
    argv
}