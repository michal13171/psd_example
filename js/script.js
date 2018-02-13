'use strict';
$(function () {
    $('.two').on("click", watchimage);

    function watchimage(e) {
        e.preventDefault();
        var imageTab = ['img/portfoliophoto6.png', 'img/portfoliophoto3.png', 'img/portfolio%20photo.png', 'img/portfoliophoto1.png', 'img/portfoliophoto4.png', 'img/portfoliophoto5.png', 'img/portfoliophoto7.png', 'img/portfolio%20photo2.png'];

        $('.image').remove();

        var container =$('.elements-image');

        for (var i = 0, j = imageTab.length; i < j; i++) {

                var img = document.createElement('img');
                img.src = imageTab[i]; // img[i] refers to the current URL.
                container.append(img).css("background");


        }
    }
});


