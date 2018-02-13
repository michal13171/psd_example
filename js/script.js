'use strict';
$(function () {
    $('.two').on("click", watchimage);
    $('.one').on('click',function (e) {
        e.preventDefault();
        $('.first-element-image').hide();
        $('.two-element-image').hide();
        $('.image').show();

    });

    function watchimage(e) {
        e.preventDefault();
        var imageTab = ['img/portfoliophoto6.png', 'img/portfoliophoto3.png', 'img/portfolio%20photo.png', 'img/portfoliophoto1.png'];
        var imageTab2 = ['img/portfoliophoto4.png', 'img/portfoliophoto5.png', 'img/portfoliophoto7.png', 'img/portfolio%20photo2.png'];

        $('.image').hide();
        $('.elements-image').hide();
        $('.first-element-image').css({"display":"flex","justify-content":"space-between","align-items":"center"});
        $('.two-element-image').css({"display":"flex","justify-content":"space-between","align-items":"center"});

        $('.first-element-image').show();
        $('.two-element-image').show();

        var container = $('.first-element-image');
        var container1 = $('.two-element-image');
       // var container = $('.elements-image');

        for (let i = 0, j = imageTab.length; i < j; i++) {

            let img = document.createElement('img');
            img.src = imageTab[i]; // img[i] refers to the current URL.
            container.append(img);

        }
        for (let i = 0, j = imageTab2.length; i < j; i++) {

            let img = document.createElement('img');
            img.src = imageTab2[i]; // img[i] refers to the current URL.
            container1.append(img);

        }
    }
});


//,