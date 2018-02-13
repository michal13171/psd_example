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
        var container1 = $('.two-element-image');

        var addImg1 = $('.image1');
        var addImg2 = $('.image2');
        var addImg3 = $('.image3');
        var addImg4 = $('.image4');
        for (let i = 0, j = imageTab.length; i < j; i++) {
            let img = document.createElement('img');
            img.src = imageTab[i]; // img[i] refers to the current URL.
            container.append(img);
        }
        // forEach (const i; in imageTabSecond.length) {
        //     var attr = imageTabSecond[i]
        //     container1.html('<img src="' + attr + '">');
        //     console.log('<img src="' + attr + '">');
        //     console.log(attr[i]);
        // }

            addImg1.attr("src",imageTabSecond[0]);
            addImg2.attr("src",imageTabSecond[1]);
            addImg3.attr("src",imageTabSecond[2]);
            addImg4.attr("src",imageTabSecond[3]);
        
    }

    function hideoneClass(e) {
        e.preventDefault();
        $('.first-element-image').hide();
        $('.two-element-image').hide();
        $('.elements-image').show();
    }
});


//,