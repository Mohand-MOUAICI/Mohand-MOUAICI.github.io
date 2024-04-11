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
