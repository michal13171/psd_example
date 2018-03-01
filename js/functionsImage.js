"use strict";
function watchimage(e) {
  e.preventDefault();
  var classTab = ["two-element-image"];
  var container = ["first-element-image"];
  var imageTab = [
    "img/portfoliophoto6.png",
    "img/portfoliophoto3.png",
    "img/portfolio%20photo.png",
    "img/portfoliophoto1.png"
  ];
  var imageTabSecond = [
    "img/portfoliophoto4.png",
    "img/portfoliophoto5.png",
    "img/portfoliophoto7.png",
    "img/portfolio%20photo2.png"
  ];

  $(".elements-image").hide();
  $(".first-element-image")
    .html("")
    .show()
    .css({
      display: "flex",
      "justify-content": "space-between",
      "align-items": "center"
    });
  $(".two-element-image")
    .html("")
    .show()
    .css({
      display: "flex",
      "justify-content": "space-between",
      "align-items": "center"
    });

  jQuery.each(container, function(i, val) {
    $.each(imageTab, function(j, valum) {
      var valueImage = document.createElement("img");
      valueImage.src = valum;
      var cont = $("." + val);
      cont.append(valueImage);
    });
  });

  jQuery.each(classTab, function(i, val) {
    $.each(imageTabSecond, function(j, valum) {
      var valueImage = document.createElement("img");
      valueImage.src = valum;
      var cont = $("." + val);
      cont.append(valueImage);
      console.log(val);
    });
  });
}
function watchimage_second(e) {
  e.preventDefault();
  var container = ["first-element-image"];
  var classTab = ["two-element-image"];
  var imageTab = [
    "img/portfoliophoto6.png",
    "img/portfoliophoto3.png",
    "img/portfolio%20photo.png",
    "img/portfoliophoto1.png"
  ];
  var imageTabSecond = [
    "img/img_one (1).jpeg",
    "img/img_one (1).png",
    "img/img_one (2).jpeg",
    "img/img_one (2).png"
  ];

  $(".elements-image").hide();
  $(".first-element-image")
    .html("")
    .show()
    .css({
      display: "flex",
      "justify-content": "space-between",
      "align-items": "center"
    });
  $(".two-element-image")
    .html("")
    .show()
    .css({
      display: "flex",
      "justify-content": "space-between",
      "align-items": "center"
    });

  jQuery.each(container, function(i, val_one) {
    $.each(imageTab, function(j, value_one) {
      var valueImage_one = document.createElement("img");
      valueImage_one.src = value_one;
      var contain = $("." + val_one);
      contain.append(valueImage_one);
    });
  });

  jQuery.each(classTab, function(i, val) {
    $.each(imageTabSecond, function(j, valum) {
      var valueImage = document.createElement("img");
      valueImage.src = valum;
      var cont = $("." + val);
      cont.append(valueImage);
    });
  });
}
function hideoneClass(e) {
  e.preventDefault();
  $(".elements-image").show();
  var tab = ["first-element-image", "two-element-image"];
  for (let i = 0; i < tab.length; i++) {
    var one = $("." + tab[i]);
    one.hide();
  }
}
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



export {
  watchimage,
  watchimage_second,
  hideoneClass,
  play_pause,
  onunmute
};
