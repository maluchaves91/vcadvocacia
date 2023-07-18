    function scrollToSection(area) {
        const section = document.getElementById(area);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

