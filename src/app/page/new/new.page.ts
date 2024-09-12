import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {


  mio: string[]= [];
  otro: string[]= [];


  myInput: string = '';
  

  
  enviar(){
    this.mio.push(this.myInput)
    console.log(this.myInput)
    const body = { question_text: this.myInput };
    
    this.http.post('http://127.0.0.1:8000/path/v1/echo/', body).subscribe({
      next: (res: any) => {
        this.otro.push(res.response)  // Asignar la respuesta recibida
        this.myInput = ''
        console.log(this.otro)
      },
      error: (error) => {
        console.error('Error al enviar la pregunta', error);
      }}
    );
    
    
  }

  
  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

}
