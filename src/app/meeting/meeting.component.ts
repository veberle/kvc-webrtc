import { Component, OnInit, ViewChild } from '@angular/core';
import { WebrtcService } from '../service/webrtc.service';
import { VideoComponent } from './video/video.component';
import { Router } from '@angular/router';

@Component({
  selector: 'meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {
  @ViewChild(VideoComponent) videoComponent;
  channel: String = '';
  meetingVisable = true;

  constructor(private router: Router) { }

  ngOnInit() { }

  joinChannel(): void {
    this.meetingVisable = false;
    this.router.navigate(['meeting', this.channel]);
    this.videoComponent.startCommunication(this.channel);
  }

}
