import axios from "axios";
import { CURRENT, URL_LOCALHOST } from "../constants/constanst";
import { LANGCODES } from '../constants/lang-codes';
import { Coord } from "../interfaces/api.interface";


export class ApiService {
    private APIKEY: string;
    private lang: string | undefined;
    private units: string | undefined;
    constructor(APIKEY: string, lang: string = 'es', units: string = 'metric') {
        this.APIKEY = APIKEY;
        this.configurarIdioma(lang);
        this.configurarUnidades(units);
    }

    /**
     * Configuramos el idioma 
     * @param lang Codigo del idioma
     */
    private configurarIdioma(lang: string) {
        if (LANGCODES.filter(l => l.code === lang).length === 1) {
            this.lang = `&lang=${lang}`;
        } else {
            this.lang = `&lang=es`;
        }
    }
    /**
     * Obtenemos las unidades mediante la configuracion
     * @param unit unidad si es metrico o no
     */
    private configurarUnidades(unit: string) {
        this.units = '';
        if (unit === 'm' || unit === 'metric') {
            this.units = `&units=metric`;
        }
    }

    // https://api.openweathermap.org/data/2.5/weather?q=Colombia,co&lang=es&units=metric&appid=
    //Buscar por nombre
    /**
     * Obtener el tiempo actual buscado por el nombre 
     * @param nombre Nombre del lugar
     * @param codPais Codigo del pais
     */
    buscarPorNombre(nombre: string, codPais: string = '') {
        let parametros = `${this.units}${this.lang}&appid=${this.APIKEY}`;
        let filtro = '';
        if (codPais === '') {
            filtro = `q=${nombre}`;
        } else {
            filtro = `q=${nombre},${codPais}`;
        }

        //LLamada a la api.
        const url = `${URL_LOCALHOST}${CURRENT}${filtro}${parametros}`;


        return axios.get(url).then(e => { return e.data }).catch(error => { return error });
    }
    //Buscar por coordenadas
    /**
     * Obtener el tiempo mediante la localizacion 
     * @param localizacion Coordenadas del lugar que queremos buscar
     */
    buscarPorLocalizacionGeografica(localizacion: Coord) {
        let parametros = `${this.units}${this.lang}&appid=${this.APIKEY}`;
        let filtro = '';
        if (localizacion === undefined || localizacion === null) {
            filtro = `lat=43&lon=1`;
            console.warn('Estas usando una localizacion por defecto');
        } else {
            filtro = `lat=${localizacion.lat}&lon=${localizacion.lon}`;
        }

        //LLamada a la api.
        const url = `${URL_LOCALHOST}${CURRENT}${filtro}${parametros}`;


        return axios.get(url).then(e => { return e.data }).catch(error => { return error });
    }
    //const url = 'https://api.openweathermap.org/data/2.5/weather?zip=111161,CO&appid=' + APIKEY;
    /**
     * Obtenermos mediante el codigo postal del pais
     * @param cp codigo postal del lugar
     * @param codPais codigo del pais del lugar
     * @returns 
     */
    buscarPorZipCodigoPostal(cp: string, codPais: string = '') {
        let parametros = `${this.units}${this.lang}&appid=${this.APIKEY}`;
        let filtro = '';
        if (codPais === '') {
            filtro = `zip=${cp},${codPais}`;
        } else {
            filtro = `zip=${cp},${codPais}`;
        }

        const url = `${URL_LOCALHOST}${CURRENT}${filtro}${parametros}`;


        return axios.get(url).then(e => { return e.data }).catch(error => { return error });
    }
}