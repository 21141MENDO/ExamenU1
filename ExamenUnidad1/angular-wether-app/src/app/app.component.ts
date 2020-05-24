import { Component, OnInit } from '@angular/core';
//para traer los servicios importamos la clase weather desde service y despues la instanciamos en ngOnInit
import { WeatherService} from './service/weather.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//llamamos al servicio, creamos un componente ngOnInit y se manejan con un subscribe que nos devuelve los datos o un error y tendremos que crear 2 funciones
export class AppComponent implements OnInit {

  //creamos una variable que almacene los valores de forma temporal para mostrar en pantalla, que sera indefinido al inicio

  weather;
  constructor(private weatherService:WeatherService){

  }
  

  ngOnInit(){
    
  }

  //llamando a la funcion getWeather de nuestro srvicio
  getWeather(nc: string, cc:string){
    
    this.weatherService.getWeather(nc,cc)
    .subscribe(
      res => {
        console.log(res);
        this.weather= res},
      err => console.log(err)
    )
  }
  

  //con este metodo ejecutamos el formulario y se realiza comprovacion de valor de datos
  submitLocations(nc: HTMLInputElement, cc: HTMLInputElement){
    if (nc.value && cc.value){
      nc.value='';
      cc.value='';
    } else{
      alert('La consulta que pide no es valida');

    }
   
    nc.focus()

    return false;
  }



}
