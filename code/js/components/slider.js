$(document).ready(function(){
    if($('.slider').length){
        $('.slider').each(function(){
            sliderInit($(this))
        })
    }
})

function testTEST(slider){
    let container = $('<div/>')
    .addClass('slides-container')
    .html(slider.html());

    slider.html(container);
}