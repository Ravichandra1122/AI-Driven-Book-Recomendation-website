// Sample data for book recommendations
const booksData = {
    'Fantasy': [
        { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
        { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling' },
        { title: 'Mistborn', author: 'Brandon Sanderson' }
    ],
    'Science Fiction': [
        { title: 'Dune', author: 'Frank Herbert' },
        { title: 'Neuromancer', author: 'William Gibson' },
        { title: 'The Left Hand of Darkness', author: 'Ursula K. Le Guin' }
    ],
    'Mystery': [
        { title: 'The Da Vinci Code', author: 'Dan Brown' },
        { title: 'Gone Girl', author: 'Gillian Flynn' },
        { title: 'Big Little Lies', author: 'Liane Moriarty' }
    ]
};

// Function to get book recommendations based on selected genre
function getRecommendations() {
    const genre = document.getElementById('genreSelect').value; // Get selected genre
    const recommendations = booksData[genre]; // Get books data for selected genre
    
    // Get recommendations container
    const container = document.getElementById('recommendationsContainer');
    container.innerHTML = '';  // Clear previous recommendations

    if (recommendations) {
        recommendations.forEach(book => {
            // Create a book card for each recommendation
            const bookElement = document.createElement('div');
            bookElement.classList.add('book');
            bookElement.innerHTML = `<h3>${book.title}</h3><p>by ${book.author}</p>`;
            container.appendChild(bookElement);
        });
    } else {
        container.innerHTML = `<p>No recommendations available for this genre.</p>`;
    }
}
