//requireds
const color = require('colors');
const fs = require('fs');


let listarTabla = (base, limite) => {
    console.log('======================='.green);
    console.log('Mira la tabla'.green);
    console.log('======================='.green);
    let data = '';
    for (let i = 1; i <= limite; i++)
        console.log(`${base} x ${i} = ${base*i}`);
}

let crearArchivo = (base) => {
    return new Promise(
        (resolve, reject) => {
            if (!Number(base)) {
                reject(`El valor introducido ${base} no es un numero`);
            } else {
                let data = '';
                for (let i = 1; i <= 10; i++)
                    data = data + `${base} x ${i} = ${base*i}\n`;
                fs.writeFile(`tablas/tabla-${base}.txt`, data,
                    (err) => {
                        if (err)
                            reject(err);
                        else
                            resolve(`tabla-${base}.txt`.green);
                    }
                );
            };
        }
    );
}

module.exports = {
    crearArchivo,
    listarTabla
}