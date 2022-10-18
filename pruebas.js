const m = require('./dist').ApiService;
const api = new m('<APIKEY>', 'es', 'm');

api.buscarPorZipCodigoPostal('111161', 'co').then((resp) => {
    console.log(resp)
});