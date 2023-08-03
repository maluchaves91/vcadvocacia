function scrollToSection(area) {
    const section = document.getElementById(area);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


function redirecionarParaIndex() {
    window.location.href = "index.html#area";
}

var nav = document.querySelector('nav');
window.addEventListener('scroll', function(){
    if(window.pageYOffset > 100){
        nav.classList.add('bg-dark', 'shadow'); 
    }else{
        nav.classList.remove('bg-dark', 'shadow');
    }
})

