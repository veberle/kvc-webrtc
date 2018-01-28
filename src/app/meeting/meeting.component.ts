import { Component, OnInit, ViewChild } from '@angular/core';
import { WebrtcService } from '../service/webrtc.service';
import { VideoComponent } from './video/video.component';

@Component({
  selector: 'meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {
  @ViewChild(VideoComponent) videoComponent;
  channel: String = '';
  meetingVisable = true;

  constructor() { }

  ngOnInit() { }

  joinChannel(): void {
    this.meetingVisable = false;
    this.videoComponent.startCommunication(this.channel);
  }

}
