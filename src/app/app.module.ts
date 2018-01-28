import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { KvcMaterialModule } from './kvc-material/kvc-material.module';
import { AppComponent } from './app.component';
import { MeetingComponent } from './meeting/meeting.component';
import { WebrtcService } from './service/webrtc.service';


@NgModule({
  declarations: [
    AppComponent,
    MeetingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    KvcMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [WebrtcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
