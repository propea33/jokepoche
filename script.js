const jokeButton = document.getElementById('jokeButton');
const jokeElement = document.getElementById('joke');
const shareButtons = document.getElementById('shareButtons');

// Fonction pour générer une blague aléatoire (à remplacer par votre propre logique)
function generateJoke() {
  const jokes = [
    "Pourquoi les programmeurs confondent-ils Halloween et Noël ? Parce que 31 oct = 25 déc en binaire !",
    // Ajoutez ici vos propres blagues
  ];
  const randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
}

// Fonction pour afficher la blague et mettre à jour le bouton
function displayJoke() {
  jokeElement.textContent = generateJoke();
  jokeButton.textContent = "Une autre joke poche";

  // Code pour afficher les boutons de partage (à adapter selon vos préférences)
  shareButtons.innerHTML = `
    <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}" target="_blank">Partager sur Facebook</a>   

    <a href="mailto:?subject=Regarde cette blague&body=${encodeURIComponent(jokeElement.textContent)}">Partager par email</a>
  `;
}

// Écouteur d'événement sur le bouton
jokeButton.addEventListener('click', displayJoke);

// Afficher une première blague au chargement de la page
displayJoke();
