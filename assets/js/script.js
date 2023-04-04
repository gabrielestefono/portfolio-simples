let links = document.getElementsByClassName('links');
let show = document.getElementById('show');
let hamburger = document.getElementById('hamburger');

window.onresize = ()=>{
    if(screen.width > 768 ){
        show.className = 'header__nav--ul'
        Object.values(links).forEach(value=>{
            value.classList = 'header__nav--ul_li-a links';
        })
    }
}

hamburger.addEventListener('click', ()=>{
    if(show.className == 'header__nav--ul'){
        show.className = 'header__nav--ul-ativo'
        Object.values(links).forEach(value=>{
            value.classList = 'header__nav--ul_li-a-ativo links';
        })
    }else{
        show.className = 'header__nav--ul'
        Object.values(links).forEach(value=>{
            value.classList = 'header__nav--ul_li-a links';
        })
    }
})