/**
 * Created by naaanazar on 22.05.2017.
 */
$( document ).ready(function() {

    var imagesSrc = {};
    var counterImg = 0;

    $('.slider_img').each(function(i,elem) {
        imagesSrc[i] = ($(elem).attr('src'));

        counterImg++;
    });

    $(document).on('click', '.slider_right_button', function(){

        // $('.slider_img').addClass('animated slideInLeft');

        $('.slider_img').closest('.slider_img_block').addClass('slider_img_block_prev');
        $('.slider_img').addClass('slider_img_prev');

        var bufer = {};
        for (var key in imagesSrc){
            bufer[key] = imagesSrc[key];
        }

        for (var key in imagesSrc){

            if(key == (counterImg - 1)){
                imagesSrc[key] =  bufer[0];
            } else {
                imagesSrc[key] =  bufer[+key+1];
            }
        }

        addNewSlide('slideInRight', imagesSrc);
        removElementsAfterClick();
    });

    $(document).on('click', '.slider_left_button', function(){

        $('.slider_img').closest('.slider_img_block').addClass('slider_img_block_prev');
        $('.slider_img').addClass('slider_img_prev');

        var bufer = {};
        for (var key in imagesSrc){
            bufer[key] = imagesSrc[key];
        }

        for (var key in imagesSrc){

            if(key == (0)){
                imagesSrc[key] =  bufer[counterImg-1];
            } else {
                imagesSrc[key] =  bufer[+key-1];
            }
        }

        addNewSlide('slideInLeft', imagesSrc);
        removElementsAfterClick();
    });


});

var removElementsAfterClick = function(){
    setTimeout(function(){$('.slider_img').removeClass('animated')}, 2000);
    setTimeout(function(){$('.slider_img_prev').removeClass('slider_img')});
    setTimeout(function(){$('.slider_img_block_prev').remove()},1000);
}

var addNewSlide = function(animeteClass, imagesSrc){
    $('.slider_img').each(function(n,elem) {
        var html = '' +
            '<div class="slider_img_block">' +
            '<img class="slider_img animated ' + animeteClass + '"  src="' + imagesSrc[n] + '" alt="">' +
            '</div>';

        /*     console.log($("." + elem + ":eq( " + i + " )").closest('.slider_img_block'));*/

        console.log('n---' + n);
        $(elem).closest('.slider_img_block').after(html);

    }),500;
}