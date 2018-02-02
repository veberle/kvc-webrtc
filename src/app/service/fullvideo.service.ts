import { Injectable } from '@angular/core';

declare var $: any;

@Injectable()
export class FullvideoService {
  constructor() { }

  public fullscreenClickhandler() {
    var video = this;
    clearTimeout((<any>window).fullscreenTimer);
    var canvas = <HTMLCanvasElement>document.getElementById('fullscreenVideo');
    var context = canvas.getContext('2d');

    var aspect = $(video).width() / $(video).height();
    var ch = Math.floor(canvas.clientHeight);
    var cw = ch * aspect;
    canvas.width = cw;
    canvas.height = ch;

    (<any>video).updateFullscreen = function (video, context, width, height) {
      if (video.paused || video.ended) return false;
      context.drawImage(video, 0, 0, width, height);
      (<any>window).fullscreenTimer = setTimeout(video.updateFullscreen, 20, video, context, width, height);
    };
    (<any>video).updateFullscreen(video, context, cw, ch);
  }
}
