const jokeElement = document.getElementById('joke');
const getJokeButton = document.getElementById('getJoke');

async function fetchJoke() {
    try {
        const response = await fetch('https://www.randomlists.com/jokes');
        const data = await response.json();
        jokeElement.textContent = data.value;
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
}

getJokeButton.addEventListener('click', fetchJoke);
fetchJoke(); // Initial joke on page load