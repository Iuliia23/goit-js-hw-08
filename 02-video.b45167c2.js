!function(){var e=document.querySelector("#vimeo-player"),t=new Player(e);t.on("timeupdate",throttle((function(e){localStorage.setItem("videoplayer-current-time",e.seconds)}),1e3));var o=localStorage.getItem("videoplayer-current-time");o?t.setCurrentTime(o):console.log("=)")}();
//# sourceMappingURL=02-video.b45167c2.js.map
