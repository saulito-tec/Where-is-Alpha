import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BarcodeFormat } from '@zxing/library';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { NgxScannerQrcodeComponent, NgxScannerQrcodeService, ScannerQRCodeConfig, ScannerQRCodeResult, ScannerQRCodeSelectedFiles } from 'ngx-scanner-qrcode';
import { Subject, Observable } from 'rxjs';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { HttpClient } from '@angular/common/http';
import { ListComponent } from './list.component';
import { int } from '@zxing/library/esm/customTypings';


@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss']
})
export class CreatePage  {

  constructor(private http: HttpClient) {}

  private trigger: Subject<any> = new Subject();
  webcamImage: any;
  private nextWebcam: Subject<any> = new Subject();

  sysImage = '';
  value : any;
  valor : number = 0;

  price: number[] = [];
  name: string[] = [];
  img: string[] = [];
  total_sum: number = 0;


  ngOnInit() {}

  public getSnapshot(): void {
    this.trigger.next(void 0);
  }



  public dataURLToBlob(dataURL: string): Blob {
    const arr = dataURL.split(',');
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }

  private uploadImage(formData: FormData): void {
    this.http.post('http://127.0.0.1:8000/path/v1/upload/', formData).subscribe(
      (response) => {
        console.log('Image uploaded successfully', response);
        this.value = response
        this.img.push(this.value.imagen)
        this.name.push(this.value.nombre)
        this.price.push(Number(this.value.precio))
        console.log(this.price)
        this.total_sum = 0;
        for ( let x = 0;  x < this.price.length; x++){
          this.total_sum += this.price[x];
        }
    
        

      }
      
    );
  }

  public captureImg(webcamImage: WebcamImage): void {
    const formData = new FormData();
    this.webcamImage = webcamImage;
    this.sysImage = webcamImage!.imageAsDataUrl;
    const imageBlob = this.dataURLToBlob(webcamImage.imageAsDataUrl);
    formData.append('image', imageBlob, 'webcam-image.png');
    console.info('got webcam image', this.sysImage);

    this.uploadImage(formData);
    
  }

  public get invokeObservable(): Observable<any> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<any> {
    return this.nextWebcam.asObservable();
  }

  sendPurchase(): void {
    const reportData = {
      purchaseId: this,
      date: new Date().toISOString(),
      totalPrice: this.total_sum,
      products: this.name

    }
  }


}

















  // Form = new FormGroup({
  //   nombre: new FormControl('',Validators.required),
  //   precio: new FormControl(''),
  //   proveedor: new FormControl(''),
  //   descripcion: new FormControl(''),
  //   fecha_entrega: new FormControl(''),
  //   imagen: new FormControl(''),
    
  // });




