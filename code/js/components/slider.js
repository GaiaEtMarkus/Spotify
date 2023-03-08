$(document).ready(function(){
    if($('.slider').length){
        $('.slider').each(function(){
            sliderInit($(this))
        })
    }
})

function test(slider){
    let container = $('<div/>')
    .addClass('slides-container')
    .html(slider.html());

    slider.html(container);
}