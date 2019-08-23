import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {DashboardComponent} from './dashboard/dashboard.component';
import  {PriceComponent} from './price/price.component';
import  {GalleryComponent} from './gallery/gallery.component';

const routes: Routes = [
{path : '', component:DashboardComponent },
{path : 'price', component:PriceComponent },
{path : 'gallery', component:GalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
