import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { EmploisComponent } from './emplois/emplois.component';
import { Cv_editComponent } from './cv_edit/cv_edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { Temp_1Component } from './templates/temp_1/temp_1.component';
import { Temp_2Component } from './templates/temp_2/temp_2.component';
import { Temp_3Component } from './templates/temp_3/temp_3.component';
import { Temp_4Component } from './templates/temp_4/temp_4.component';
import { Temp_5Component } from './templates/temp_5/temp_5.component';
import { Temp_6Component } from './templates/temp_6/temp_6.component';
import { Temp_7Component } from './templates/temp_7/temp_7.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdsenseModule } from 'ng2-adsense';
import { ChatGptService } from './services/chatGpt.service';
import { AlertifyService } from './services/alertify.service';


@NgModule({
  declarations: [						
    AppComponent,
      NavbarComponent,
      HomeComponent,
      Cv_editComponent,
Temp_1Component,
Temp_2Component,
Temp_3Component,
Temp_4Component,
Temp_5Component,
Temp_6Component,
Temp_7Component,

EmploisComponent,
    
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgScrollbarModule,
    FormsModule,
    RouterModule,
    
    HttpClientModule,
    ReactiveFormsModule,
    FileUploadModule,
    JwtModule,
    BrowserAnimationsModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-9699838283559081'
      
    }),
  ],
  providers: [ 
    ChatGptService,
    AlertifyService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
