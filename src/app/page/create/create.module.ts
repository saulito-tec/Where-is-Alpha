import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePageRoutingModule } from './create-routing.module';

import { CreatePage } from './create.page';
import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { WebcamModule } from 'ngx-webcam';
import { ListComponent } from './list.component';









@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePageRoutingModule,
    ReactiveFormsModule,
    NgxScannerQrcodeModule,
    WebcamModule,
    ListComponent
  ],
  declarations: [CreatePage],
  bootstrap:    [ CreatePage ],
})
export class CreatePageModule {}
