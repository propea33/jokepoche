const jokes = [
    "Pourquoi les plongeurs plongent-ils toujours en arrière ? Parce que sinon, ils tombent dans le bateau !",
    "Que fait une fraise sur un cheval ? Tagada tagada !",
    // ... (autres blagues)
];

const generateButton = document.getElementById('generateButton');
const jokeText = document.getElementById('jokeText');
const shareButtons = document.getElementById('shareButtons');

let currentJoke = '';

generateButton.addEventListener('click', generateJoke);

function generateJoke() {
    currentJoke = jokes[Math.floor(Math.random() * jokes.length)];
    jokeText.textContent = currentJoke;
    generateButton.textContent = 'Une autre joke poche';
    shareButtons.style.display = 'flex';
}

function shareJoke(platform) {
    // Ici, vous implémenteriez la vraie logique de partage
    console.log(`Partage sur ${platform}: ${currentJoke}`);
    alert(`Partage sur ${platform} simulé : ${currentJoke}`);
}
