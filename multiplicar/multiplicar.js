//requireds
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {
    console.log(`Tabla del ${base} hasta el ${limite}`.green);
    for (let i = 1; i <= limite; i++) {
        console.log(base + '*'.red + i + '='.red + base * i + '\n');
    }
}

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} NO es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= 10; i++) {
            data += base + '*' + i + '=' + base * i + '\n';
        }
        fs.writeFile(`tablas/tabla-${base}`, data, (err) => {
            if (err)
                reject(err.red);
            else
                resolve(`El archivo tabla-${base} fue creado`.green);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}