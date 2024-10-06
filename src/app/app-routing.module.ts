import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './page/home/home.page'; // Adjust this path as necessary
import { MapPage } from './page/map/map.page'; // Adjust this path as necessary

const routes: Routes = [
  { path: 'home', component: HomePage }, // Home page route
  { path: 'map', component: MapPage }, // Map page route
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
