const m = require('./dist').ApiService;
const api = new m('---', 'es', 'm');

// api.buscarPorNombre('Colombia', 'CO').then((resp) => {
//     console.log(resp)
// });

// api.buscarPorLocalizacionGeografica({ lat: 4.5709527, lon: -74.3323527 }).then((resp) => {
//     console.log(resp)
// });

api.buscarPorZipCodigoPostal('111161', 'CO').then((resp) => {
    console.log(resp)
});