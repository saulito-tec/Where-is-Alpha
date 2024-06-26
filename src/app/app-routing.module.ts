import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DynamicPage } from './page/dynamic/dynamic.page';
import { HomePage } from './page/home/home.page';
import { CreatePage } from './page/create/create.page';
import { TabsPage } from './page/tabs/tabs.page';

const routes: Routes = [

  {
    path: '',
    component:TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'home/main',
        pathMatch: 'full'
      },
      {
        path: 'home/main',
        loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
      },
      {
        path:'home/create',
        loadChildren: () => import('./page/create/create.module').then( m => m.CreatePageModule)
      },
      {
        path:'home/new',
        loadChildren: () => import('./page/new/new.module').then( m => m.NewPageModule)
      },
    ]
    
  },
  {
    path: 'products/:productId',
    component: DynamicPage
  },
  {
    path: 'dynamic',
    loadChildren: () => import('./page/dynamic/dynamic.module').then( m => m.DynamicPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./page/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./page/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./page/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./page/new/new.module').then( m => m.NewPageModule)
  },
  
];
// redirectTo: 'home',
    // 
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
