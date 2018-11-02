import { Http, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SettingComponent } from './setting/setting.component';
import { SettingService } from './services/setting.service';

@NgModule({
  declarations: [
    AppComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatCardModule,
    MatSelectModule,
    MatSlideToggleModule
  ],
  providers: [
    SettingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
