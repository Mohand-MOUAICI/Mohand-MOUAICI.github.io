function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    // Close mobile menu after selecting a section
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.remove('active');
    }
}

function toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour mettre à jour l'heure
    function updateClock() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        // Ajoute un zéro devant les nombres < 10
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        // Met à jour le contenu des éléments HTML
        document.getElementById('hrs').textContent = hours;
        document.getElementById('min').textContent = minutes;
        document.getElementById('sec').textContent = seconds;
    }

    // Met à jour l'horloge immédiatement
    updateClock();
    
    // Met à jour l'horloge chaque seconde
    setInterval(updateClock, 1000);
});
