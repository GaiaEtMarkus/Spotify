$(document).ready(function(){
    if($('.slider').length){
        $('.slider').each(function(){
            sliderInit($(this))
        })
    }
})

function sliderInit(slider){
    let container = $('<div/>')
    .addClass('slides-container')
    .html(slider.html());

    slider.html(container);
}