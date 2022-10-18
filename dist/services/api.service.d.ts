import { Coord } from "../interfaces/api.interface";
export declare class ApiService {
    private APIKEY;
    private lang;
    private units;
    constructor(APIKEY: string, lang?: string, units?: string);
    /**
     * Configuramos el idioma
     * @param lang Codigo del idioma
     */
    private configurarIdioma;
    /**
     * Obtenemos las unidades mediante la configuracion
     * @param unit unidad si es metrico o no
     */
    private configurarUnidades;
    /**
     * Obtener el tiempo actual buscado por el nombre
     * @param nombre Nombre del lugar
     * @param codPais Codigo del pais
     */
    buscarPorNombre(nombre: string, codPais?: string): Promise<any>;
    /**
     * Obtener el tiempo mediante la localizacion
     * @param localizacion Coordenadas del lugar que queremos buscar
     */
    buscarPorLocalizacionGeografica(localizacion: Coord): Promise<any>;
    /**
     * Obtenermos mediante el codigo postal del pais
     * @param cp codigo postal del lugar
     * @param codPais codigo del pais del lugar
     * @returns
     */
    buscarPorZipCodigoPostal(cp: string, codPais?: string): Promise<any>;
}
