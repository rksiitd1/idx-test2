document.addEventListener('DOMContentLoaded', () => {
    const principles = [
        "Strive for excellence in all endeavors",
        "Embrace continuous learning and growth",
        "Practice kindness and empathy",
        "Cultivate resilience in the face of adversity",
        "Pursue your passions with unwavering dedication"
    ];

    const quotes = [
        "Greatness is not in where we stand, but in what direction we are moving. - Oliver Wendell Holmes",
        "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
        "To be great is to be misunderstood. - Ralph Waldo Emerson",
        "The secret of greatness is simple: do better work than any other man in your field - and keep on doing it. - Wilfred Peterson",
        "No great man ever complains of want of opportunity. - Ralph Waldo Emerson"
    ];

    const principleList = document.getElementById('principle-list');
    const quoteDisplay = document.getElementById('quote-display');
    const newQuoteButton = document.getElementById('new-quote');

    // Populate principles
    principles.forEach(principle => {
        const li = document.createElement('li');
        li.textContent = principle;
        principleList.appendChild(li);
    });

    // Display random quote
    function displayRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteDisplay.textContent = quotes[randomIndex];
    }

    // Initial quote display
    displayRandomQuote();

    // New quote button event listener
    newQuoteButton.addEventListener('click', displayRandomQuote);
});