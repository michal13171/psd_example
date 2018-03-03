"use strict";
import {
  watchimage,
  watchimage_second,
  hideoneClass,
  play_pause,
  onunmute
} from "./functionsImage.js";
//import {validate_ajax} from "./validate.js";
$(function() {
  $(".three").on("click", watchimage_second);
  $(".two").on("click", watchimage);
  $(".one").on("click", hideoneClass);
  $(".play").on("click", play_pause);
  $(".volume").on("change", onunmute);
  $("#video").on("timeupdate", updateProgressBar);
  const video = document.getElementById("video");
  const progressBar = document.querySelector(".progressBar");
   //$("form").on("submit", validate_ajax,true);


  watchimage();
  watchimage_second();
  hideoneClass();
  play_pause();
  onunmute();
  //validate_ajax();


    function updateProgressBar(e) {
      e.preventDefault();
      var percentage = Math.floor(100 / video.duration * video.currentTime);
      progressBar.value = percentage;
      progressBar.html(percentage + "% played");
    }
        const jsmail = $("#Email").val();
        console.log(jsmail);


});
