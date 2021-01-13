import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControlsModule } from './form-controls/form-controls-module/form-controls.module';
import { TestComponent } from './components/test/test.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusinessInfoComponent } from './pages/business-info/business-info.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        BusinessInfoComponent,
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
