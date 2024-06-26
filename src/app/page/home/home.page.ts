import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { config } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  data: any;
  raw: any;
  precio = ''
  nombre = ''
  imagen = ''



  constructor(
    private http : HttpClient, private router : Router
  ) {}

  
  ngOnInit() {
    const url = 'http://127.0.0.1:8000/path/v1/productoDb/'; // Replace with your API endpoin
    this.http.get<any>(url, {
      params: {filter: 'all'},
    }).subscribe(respuesta => {
      this.data = respuesta[0];
      this.raw = respuesta
      console.log(respuesta);

      this.precio = this.data.precio;
      this.nombre = this.data.nombre;
      this.imagen = this.data.imagen;
    });
    
       
  }
  
  variablesCheck(){
    console.log(this.nombre);

  }

  ClickCard(item : any) {
    console.log("gracias Benzema!!!!")
    this.router.navigate(['/products', item.id]);
  }

    }
  


  

