'use strict';
$(function () {
    $('.two').on("click", watchimage);
    $('.one').on('click', hideoneClass);

    function watchimage(e) {
        e.preventDefault();

        $('.elements-image').hide();
        $('.first-element-image').css({"display": "flex", "justify-content": "space-between", "align-items": "center"});
        $('.two-element-image').css({"display": "flex", "justify-content": "space-between", "align-items": "center"});

        $('.first-element-image').show();
        $('.two-element-image').show();

        var imageTab = ['img/portfoliophoto6.png', 'img/portfoliophoto3.png', 'img/portfolio%20photo.png', 'img/portfoliophoto1.png'];
        var imageTabSecond = ['img/portfoliophoto4.png', 'img/portfoliophoto5.png', 'img/portfoliophoto7.png', 'img/portfolio%20photo2.png'];

        var container = $('.first-element-image');

        for (let i = 0, j = imageTab.length; i < j; i++) {
            let img = document.createElement('img');
            img.src = imageTab[i]; 
            container.append(img);
        }

        var classTab = ['two-element-image'];

        jQuery.each(classTab, function (i, val) {
            $.each(imageTabSecond, function (j, valum) {
                var valueImage = document.createElement('img');
                valueImage.src = valum;
                var cont = $("." + val);
                cont.append(valueImage);

            });

        });

    }

    function hideoneClass(e) {
        e.preventDefault();
        $('.first-element-image').hide();
        $('.two-element-image').hide();
        $('.elements-image').show();
    }
});


//,