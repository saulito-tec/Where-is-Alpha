import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports:  [IonicModule],
  standalone: true
})
export class ListComponent {

 resta : number = 0;



  public delete(id: number){
    this.resta = 0;
    this.resta += Number(this.price[id]);
    this.total_sum -= this.resta;
    this.price.splice(id,1);
    this.img.splice(id,1);
    this.name.splice(id,1);
    
    
  }


  constructor() { }

  @Input() name : any;
  @Input() price : any;
  @Input() img : any;
  @Input() total_sum : any;

  
}