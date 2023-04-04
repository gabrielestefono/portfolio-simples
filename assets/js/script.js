let links = document.getElementsByClassName('links');
let show = document.getElementById('show');
let hamburger = document.getElementById('hamburger');

let ajustarTela = ()=>{
    if(screen.width <= 768){
        Object.values(links).forEach(value=>{
            value.classList = 'header__nav--ul_li-a-ativo links link';
        })
    }else{
        Object.values(links).forEach(value=>{
            value.classList = 'header__nav--ul_li-a links link';
        })
    }
}

window.onresize = ajustarTela

hamburger.addEventListener('click', ()=>{
    if(show.className == 'header__nav--ul'){
        show.className = 'header__nav--ul-ativo'
        Object.values(links).forEach(value=>{
            value.classList = 'header__nav--ul_li-a-ativo links link';
        })
    }else{
        show.className = 'header__nav--ul'
        Object.values(links).forEach(value=>{
            value.classList = 'header__nav--ul_li-a links link';
        })
    }
})

ajustarTela();