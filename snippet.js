var fullscreenTimer;

function updateFullscreen(v,c,w,h) {
    if(v.paused || v.ended) return false;
    c.drawImage(v,0,0,w,h);
    fullscreenTimer = setTimeout(updateFullscreen,20,v,c,w,h);
}

function stopUpdateFullscreen() {
    clearTimeout(fullscreenTimer);
}

$('video').click(function () {
  stopUpdateFullscreen()
  var video = this;
  var canvas = document.getElementById('fullscreenVideo');
  var context = canvas.getContext('2d');

  var aspect =  $(video).width() / $(video).height();
  var ch = Math.floor(canvas.clientHeight);
  var cw = ch * aspect;
  canvas.width = cw;
  canvas.height = ch;

  updateFullscreen(video,context,cw,ch);
});



