import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControlsModule } from './form-controls/form-controls-module/form-controls.module';
import { TestComponent } from './components/test/test.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusinessEditComponent } from './pages/business-edit/business-edit.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { BusinessListComponent } from './pages/business-list/business-list.component';
import { MyBusinessListComponent } from './pages/my-business-list/my-business-list.component';
import { BusinessReadComponent } from './pages/business-read/business-read.component';

@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        BusinessEditComponent,
        BusinessListComponent,
        MyBusinessListComponent,
        BusinessReadComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormControlsModule,
        MatGridListModule,
        MatFormFieldModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
