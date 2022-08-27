function fadeScroll(select){
    let scrlTop = $(document).scrollTop();
    let offset = $(window).height() * 3/4
    let itemTop = select.offset().top;

    if(scrlTop >= itemTop - offset){
        select.addClass('fade')}
}

//RODA AO DER RE-LOAD NA PÁGINA
$('.js-pic').each(function(){
    fadeScroll($(this));
})

//RODA AO SCROLLAR A PÁGINA
$(document).scroll(function(){
    $('.js-pic').each(function(){
        fadeScroll($(this));
    })
})

/*NAVBAR PARA MOBILE*/
$('#nav-menu-ico, .background, .navbar-icon').click(function(){
    let img = document.querySelector('#img-cancel');
    $('.navbar').toggleClass('show');
    $('.background, #nav-menu-ico').fadeToggle(1000);
    $('#nav-menu-ico').toggleClass('icon-fixed')

    if($('.navbar').hasClass('show') == true){
        $('.links a').fadeToggle(900);
    }else{
        $('.links a').fadeToggle(400);
    }
})