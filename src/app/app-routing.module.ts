import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvertisementListComponent } from './pages/advertisemenet-list/advertisement-list.component';

import { BusinessEditComponent } from "./pages/business-edit/business-edit.component";
import { BusinessReadComponent } from './pages/business-read/business-read.component';

const routes: Routes = [
    { path: '', redirectTo: '/advertisements', pathMatch: 'full' },    
    { path: 'advertisements', component: AdvertisementListComponent },    
    { path: 'user/edit/business/:id', component: BusinessEditComponent },
    { path: 'user/read/business/:id', component: BusinessReadComponent },    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
