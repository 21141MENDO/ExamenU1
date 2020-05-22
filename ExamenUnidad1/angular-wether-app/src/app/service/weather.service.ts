import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  ApiKey= 'ac1c7919a452030bc8e5bcd23b2dd667';
  URI: string= " ";
//creamos una instancia usamos un modificador
  constructor(private http:HttpClient) { 
    this.URI=`https://api.openweathermap.org/data/2.5/weather?q=Lima,pe&appid=${this.ApiKey}&q=`
  }

  //creamos un metodo paea tomar los datos donde ponemos 2 parametro Nombre de ciudad y codigo de el pais

  getWeather(NombreCiudad: string, CodigoPais:string){
    return this.http.get(`${this.URI}${NombreCiudad},${CodigoPais}`)

  }
}
