$(document).ready(function(){
    const conteudo = [
        {titulo:'olá mundo!(0)', texto:'fbklfglksfysbikgsbkfbsçfbyvlsvvsuo~sviçbuvrsbçs,'},
        {titulo:'olá mundo!(1)', texto:'fbklfglksfysbikgsbkfbsçfbyvlsvvsuo~sviçbuvrsbçs,'},
        {titulo:'olá mundo!(2)', texto:'fbklfglksfysbikgsbkfbsçfbyvlsvvsuo~sviçbuvrsbçs,'},
        {titulo:'olá mundo!(3)', texto:'fbklfglksfysbikgsbkfbsçfbyvlsvvsuo~sviçbuvrsbçs,'},
        {titulo:'olá mundo!(4)', texto:'fbklfglksfysbikgsbkfbsçfbyvlsvvsuo~sviçbuvrsbçs,'}
    ];
    for(let i = 0; i < conteudo.length; i++){
        $('div.itens').children().eq(i).hover(function(){
            $('h4.header').html(conteudo[i].titulo)
        })
    }
    
})