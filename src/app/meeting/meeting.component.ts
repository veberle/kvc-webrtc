import { Component, OnInit } from '@angular/core';
import { WebrtcService } from '../service/webrtc.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {
  channel: String ='';
  meetingVisable = true;

  constructor(private webrtcService: WebrtcService) { }

  ngOnInit() { }

  joinChannel(): void {
    this.meetingVisable = false;
    this.webrtcService.ready();
    this.webrtcService.client.on('readyToCall', () => {
      this.webrtcService.joinRoom(this.channel);
    });
    this.webrtcService.client.on('videoAdded', function (video, peer) {
      console.log('video added', peer);
      $('#screenShareBtn').prop("disabled", false);
    
      var remotes = document.getElementById('remotes');
      if (remotes) {
        var container = <any> document.createElement('div');
        container.className = 'kvc-video-container';
        container.id = 'container_' + this.webrtcService.client.getDomId(peer);
        container.appendChild(video);
    
        // suppress contextmenu
        video.oncontextmenu = function () {
          return false;
        };
    
        // resize the video on click
        video.onclick = function () {
          if (container.old_width === undefined) {
            container.old_width = container.style.width;
            container.old_height = container.style.height;
            container.style.width = video.videoWidth + 'px';
            container.style.height = video.videoHeight + 'px';
          } else {
            container.style.width = container.old_width
            container.style.height = container.old_height;
            container.old_width = undefined;
            container.old_height = undefined;
          }
        };
    
        // show the ice connection state
        if (peer && peer.pc) {
          var connstate = document.createElement('div');
          connstate.className = 'kvc-connectionstate';
          container.appendChild(connstate);
          peer.pc.on('iceConnectionStateChange', function (event) {
            switch (peer.pc.iceConnectionState) {
              case 'checking':
                connstate.innerText = 'Connecting to peer...';
                break;
              case 'connected':
              case 'completed': // on caller side
                connstate.innerText = '';
                break;
              case 'disconnected':
                connstate.innerText = 'Disconnected.';
                break;
              case 'failed':
                connstate.innerText = 'Connection failed.';
                break;
              case 'closed':
                connstate.innerText = 'Connection closed.';
                break;
            }
          });
        }
        remotes.appendChild(container);
      }
    });
    
    // a peer video was removed
    this.webrtcService.client.on('videoRemoved', function (video, peer) {
      console.log('video removed ', peer);
      var remotes = document.getElementById('remotes');
      var el = document.getElementById(peer ? 'container_' + this.webrtcService.client.getDomId(peer) : 'localScreenContainer');
      if (remotes && el) {
        remotes.removeChild(el);
      }
    });
    
    this.webrtcService.client.on('localScreenAdded', function (video) {
      video.onclick = function () {
        video.style.width = video.videoWidth + 'px';
        video.style.height = video.videoHeight + 'px';
      };
      document.getElementById('localScreenContainer').appendChild(video);
      $('#localScreenContainer').show();
    });
    // local screen removed
    this.webrtcService.client.on('localScreenRemoved', function (video) {
      $('#screenShareBtn').prop("disabled", false);
      document.getElementById('localScreenContainer').removeChild(video);
      $('#localScreenContainer').hide();
    });
  }

}
