import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { FormControlsModule } from './form-controls/form-controls-module/form-controls.module';
import { AuthConfigModule } from './config/auth-config/auth-config.module';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { BusinessEditComponent } from './pages/business-edit/business-edit.component';
import { AdvertisementListComponent } from './pages/advertisemenet-list/advertisement-list.component';
import { UserBusinessListComponent } from './pages/user-business-list/user-business-list.component';
import { BusinessReadComponent } from './pages/business-read/business-read.component';
import { HeaderComponent } from './components/header/header.component';
import { AdvertisementPanelComponent } from './components/advertisement-panel/advertisement-panel.component';
import { UserAdvertisementPanelComponent } from './components/user-advertisement-panel/user-advertisement-panel.component';
import { ExpertListComponent } from './pages/expert-list/expert-list.component';
import { BusinessAddComponent } from './pages/business-add/business-add.component';

import { AuthInterceptor } from "./services/auth-interceptor.service";

@NgModule({    
    declarations: [
        AppComponent,
        TestComponent,
        BusinessEditComponent,
        AdvertisementListComponent,
        UserBusinessListComponent,
        BusinessReadComponent,
        HeaderComponent,
        AdvertisementPanelComponent,
        UserAdvertisementPanelComponent,
        ExpertListComponent,
        BusinessAddComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormControlsModule,
        MatGridListModule,
        MatFormFieldModule,
        MatCheckboxModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AuthConfigModule,      
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      }],
    bootstrap: [AppComponent]
})
export class AppModule { }
