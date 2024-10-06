import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular'; // Import IonicModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from './page/home/home.page';
import { MapPage } from './page/map/map.page';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    MapPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), // Import and initialize IonicModule
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this if needed for custom Ionic components
})
export class AppModule { }
