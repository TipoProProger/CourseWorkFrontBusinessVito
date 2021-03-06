import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserBusinessListComponent } from './pages/user-business-list/user-business-list.component';
import { AdvertisementListComponent } from './pages/advertisemenet-list/advertisement-list.component';

import { BusinessEditComponent } from "./pages/business-edit/business-edit.component";
import { BusinessReadComponent } from './pages/business-read/business-read.component';
import { ExpertListComponent } from './pages/expert-list/expert-list.component';
import { BusinessAddComponent } from './pages/business-add/business-add.component';

const routes: Routes = [
    { path: '', redirectTo: '/advertisements', pathMatch: 'full' },    
    { path: 'advertisements', component: AdvertisementListComponent },
    { path: 'user/advertisements', component: UserBusinessListComponent},  
    { path: 'expert/advertisements', component: ExpertListComponent},
    { path: 'admin/advertisements', component: ExpertListComponent},
    { path: 'user/edit/business/:id', component: BusinessEditComponent },
    { path: 'user/add/business', component: BusinessAddComponent },
    { path: 'user/read/business/:id', component: BusinessReadComponent },    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
