$(document).ready(function(){

    //JS DO ACCORDION

    $('div.accordion .content').hide()
    $('div.accordion button').click(function(){
        $(this).children('img').toggleClass('rotate');
        $(this).parent().next().slideToggle(400);
    })

    //----------------

        //FUNÇÃO DA ANIMAÇÃO
        function fadeScroll(select){
            let scrlTop = $(document).scrollTop();
            let offset = $(window).height() * 3/4
            let itemTop = select.offset().top;

            if(scrlTop >= itemTop - offset){
                select.addClass('fade')}
        }
            /*
            //RODA AO DER RE-LOAD NA PÁGINA
            fadeScroll()

            //RODA AO SCROLLAR A PÁGINA
            $(document).scroll(function(){
                fadeScroll();
            })
            */

           /*NAVBAR PARA MOBILE*/
            $('#nav-menu-ico, .background').click(function(){
                let img = document.querySelector('#img-cancel');
                $('.navbar').toggleClass('show');
                $('.background').fadeToggle(1000);
                $('#nav-menu-ico').toggleClass('icon-fixed')

                if($('.navbar').hasClass('show') == true){
                    $('.links a').fadeToggle(900);
                    img.src = '../../imagens/icon/light-cancel.svg'
                }else{
                    $('.links a').fadeToggle(400);
                    img.src = '../../imagens/icon/light-menu.svg'
                }
            })
})