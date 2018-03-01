"use strict";
import {
  watchimage,
  watchimage_second,
  hideoneClass,
  play_pause,
  onunmute
} from "./functionsImage.js";

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
  play_pause();
  onunmute();

    function updateProgressBar(e) {
      e.preventDefault();
      var percentage = Math.floor(100 / video.duration * video.currentTime);
      progressBar.value = percentage;
      progressBar.html(percentage + "% played");
    }

  $("form").on("submit", function(e) {
    e.preventDefault();
    const jsmail = $("#Email").val();
    const subject = $("#Fullname").val();
    const message = $("#Text").val();
    $.ajax({
      type: $("form").attr("method"),
      url: "../contact.php",
      dataType: "json",
      data: {
        Email: jsmail,
        Fullname: subject,
        Text: message
      },
      success: function(response) {},
      error: function(xhr) {
        console.log(xhr);
      }
    });
  });
});
