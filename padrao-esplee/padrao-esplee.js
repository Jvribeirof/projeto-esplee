$(document).ready(function(){

    //JS DO ACCORDION

    $('div.accordion .content').hide()
    $('div.accordion button').click(function(){
        $(this).children('img').toggleClass('rotate');
        $(this).parent().next().slideToggle(400);
    })

    //----------------
})