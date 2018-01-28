import { Injectable } from '@angular/core';

declare let SimpleWebRTC: any;

@Injectable()
export class WebrtcService {
  public client;

  constructor() { }

  public ready(): void {
    this.client = new SimpleWebRTC({
      // the id/element dom element that will hold "our" video
      localVideoEl: 'localVideo',
      // the id/element dom element that will hold remote videos
      remoteVideosEl: '',
      // immediately ask for camera access
      autoRequestMedia: true,
      url: 'https://kvc-webrtc.herokuapp.com'
    });
  }

  public joinRoom(roomName: String): void {
    this.client.joinRoom(roomName);
  }


}
