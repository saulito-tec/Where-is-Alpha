import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {


  mio: string[]= [];


  myInput: string = '';
  

  
  enviar(){
    this.mio.push(this.myInput)
    console.log(this.myInput)
    this.myInput = ''
    
    
  }

  
  constructor() { }

  ngOnInit() {
  }

}
