function scrollToSection(area) {
    const section = document.getElementById(area);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


function redirecionarParaIndex() {
    window.location.href = "index.html#area";
}
