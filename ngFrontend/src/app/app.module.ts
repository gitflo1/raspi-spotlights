import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { SettingComponent } from './setting/setting.component';
import { SettingService } from './services/setting.service';
import { AppErrorHandler } from './common/app-error-handler';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatSelectModule,
    MatSlideToggleModule,
    FormsModule
  ],
  providers: [
    SettingService,
    // tell Angular to replace its own ErrorHandler with the custom one
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
