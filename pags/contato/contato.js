function fadeScroll(select){
    let scrlTop = $(document).scrollTop();
    let offset = $(window).height() * 3/4
    let itemTop = select.offset().top;

    if(scrlTop >= itemTop - offset){
        select.addClass('fade')}
}

//RODA AO DER RE-LOAD NA PÁGINA
$('.js-fade').each(function(){
    fadeScroll($(this));
})

//RODA AO SCROLLAR A PÁGINA
$(document).scroll(function(){
    $('.js-fade').each(function(){
        fadeScroll($(this));
    })
})