import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.page.html',
  styleUrls: ['./dynamic.page.scss'],
})
export class DynamicPage implements OnInit {
  productId: any;
  data: any;
  raw: any;

  constructor(private activatedRoute: ActivatedRoute,private http : HttpClient, private router : Router, private loadingCtrl: LoadingController) { }

    

  ngOnInit() {
    
    this.productId = this.activatedRoute.snapshot.paramMap.get('productId');
    
    const url = 'http://127.0.0.1:8000/path/v1/productoDb/'; // Replace with your API endpoin
    this.http.get<any>(url, {
      params: {filter: 'all'},
    }).subscribe(respuesta => {
      this.data = respuesta;
      this.raw = respuesta[this.productId-1];
      console.log(respuesta);

      


    console.log(this.raw)
    })
  }
}
