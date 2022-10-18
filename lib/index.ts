const APIKEY = '--';
//por nombre
//const url = 'https://api.openweathermap.org/data/2.5/weather?q=Colombia,co&lang=es&units=metric&appid=' + APIKEY;

//por coordenadas
//const url = 'https://api.openweathermap.org/data/2.5/weather?lat=4.5709527&lon=-74.3323527&lang=es&units=metric&appid=' + APIKEY;

//por ZIP - suba
//const url = 'https://api.openweathermap.org/data/2.5/weather?zip=111161,CO&appid=' + APIKEY;


export * from './services/api.service';
export * from './interfaces/api.interface';
export * from './constants/constanst';


