import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { KvcMaterialModule } from './kvc-material/kvc-material.module';
import { AppComponent } from './app.component';
import { MeetingComponent } from './meeting/meeting.component';
import { WebrtcService } from './service/webrtc.service';
import { VideoComponent } from './meeting/video/video.component';

const appRoutes: Routes = [
  { path: '', component: MeetingComponent },
  { path: 'meeting/:channelName',      component: VideoComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MeetingComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    KvcMaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [WebrtcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
