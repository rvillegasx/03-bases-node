const fs = require('fs');
const colors = require('colors');

crearArchivo = (base, limite) => {
    return new Promise((resolve,reject) => {
        if(!Number(base)){
            reject(`El valor introducido: '${base}' no es un numero`);
            return;
        }
        let data = '';
        for(let i = 1; i <= limite; i++) {
            data+=`${ base } * ${ i } = ${ base * i }\n`;
        }
        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
        if (err)
                reject(err);
        else
            resolve(`tabla-${ base }.txt`);
        });
    });
};

listarArchivo = (base, limite) => {
    console.log('=================='.blue);
    console.log(`===Tabla de ${base}====`.blue);
    console.log('=================='.blue);
    return new Promise((resolve,reject) => {
        if(!Number(base)){
            reject(`El valor introducido: '${base}' no es un numero`);
            return;
        }
        let data = '';
        for(let i = 1; i <= limite; i++) {
            data+=`${ base } * ${ i } = ${ base * i }\n`;
        }
        console.log(data.white);
    });
};

module.exports = {
    crearArchivo,
    listarArchivo
};