fetch('jokes.json')
  .then(response => response.json())
  .then(data => {
    const jokes = data;

    // Sélection des éléments du DOM
    const generateButton = document.getElementById('generateButton');
    const jokeText = document.getElementById('jokeText');
    const shareButtons = document.getElementById('shareButtons');

    // Variable pour stocker la blague actuelle
    let currentJoke = '';

    // Écouteur d'événement sur le bouton pour générer une blague
    generateButton.addEventListener('click', generateJoke);

    function generateJoke() {
        // Choisir une blague aléatoire parmi celles récupérées du fichier JSON
        currentJoke = jokes[Math.floor(Math.random() * jokes.length)];
        // Afficher la blague sur la page
        jokeText.textContent = currentJoke;
        // Changer le texte du bouton
        generateButton.textContent = 'Une autre joke poche';
        // Afficher les boutons de partage
        shareButtons.style.display = 'flex';
    }

    // Fonction pour partager la blague (à compléter avec la logique de partage réelle)
    function shareJoke(platform) {
        console.log(`Partage sur ${platform}: ${currentJoke}`);
        alert(`Partage sur ${platform} simulé : ${currentJoke}`);
    }
});
