document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contactForm');
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = {};
        formData.forEach((value, key) => (data[key] = value));
        
        try {
            const response = await fetch('https://votreapi.com/envoi', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            
            if (response.ok) {
                alert('Message envoyé avec succès!');
                contactForm.reset();
            } else {
                alert('Il y a eu un problème avec l\'envoi de votre message.');
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert('Erreur lors de l\'envoi du message.');
        }
    });
});
