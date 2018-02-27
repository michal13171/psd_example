"use strict";
import { watchimage, watchimage_second, hideoneClass } from "./functionsImage";

$(function() {
  $(".three").on("click", watchimage_second);
  $(".two").on("click", watchimage);
  $(".one").on("click", hideoneClass);
  $(".play").on("click", play_pause);
  $(".volume").on("change", onunmute);
  $("#video").on("timeupdate", updateProgressBar);
  var video = document.getElementById("video");
  var progressBar = document.querySelector(".progressBar");

  watchimage();
  watchimage_second();
  hideoneClass();
  function play_pause(e) {
    e.preventDefault();
    if (video.paused) {
      video.play();
      $(this).html('<i class="fas fa-play"></i>');
    } else {
      video.pause();
      $(this).html('<i class="fas fa-pause"></i>');
    }
  }

  function onunmute(e) {
    e.preventDefault();
    var volume = e.target.value;
    video.volume = parseFloat(volume);
  }

  function updateProgressBar(e) {
    e.preventDefault();
    var percentage = Math.floor(100 / video.duration * video.currentTime);
    progressBar.value = percentage;
    progressBar.html(percentage + "% played");
  }
});
