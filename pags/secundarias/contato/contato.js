function fadeScroll(select){
    let scrlTop = $(document).scrollTop();
    let offset = $(window).height() * 3/4
    let itemTop = select.offset().top;

    if(scrlTop >= itemTop - offset){
        select.addClass('fade')}
}

/*NAVBAR PARA MOBILE*/
$('#nav-menu-ico, .background, .navbar-icon').click(function(){
    let img = document.querySelector('#img-cancel');
    $('.navbar').toggleClass('show');
    $('.background').fadeToggle(1000);
    $('#nav-menu-ico').toggleClass('icon-fixed')

    if($('.navbar').hasClass('show') == true){
        $('.links a, #nav-menu-ico').fadeToggle(900);
    }else{
        $('.links a, #nav-menu-ico').fadeToggle(400);
    }
})