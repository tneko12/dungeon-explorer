document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    app.innerHTML = `
        <h1>Welcome to Dungeon Explorer</h1>
        <button id="fetchButton">Fetch Data from Backend</button>
        <div id="result"></div>
    `;

    const fetchButton = document.getElementById('fetchButton');
    fetchButton.addEventListener('click', () => {
        fetch('/api/hello')
            .then(response => response.json())
            .then(data => {
                document.getElementById('result').innerText = data.message;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                document.getElementById('result').innerText = 'Error loading data';
            });
    });
});
