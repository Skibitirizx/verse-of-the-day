// Array of Bible verses (could be expanded)
const bibleVerses = [
    { verse: "John 3:16", text: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life." },
    { verse: "Psalm 23:1", text: "The Lord is my shepherd; I shall not want." },
    { verse: "Philippians 4:13", text: "I can do all things through him who strengthens me." },
    { verse: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." },
    { verse: "Isaiah 41:10", text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand." }
];

// Function to get the random Bible verse
function getRandomVerse() {
    const randomIndex = Math.floor(Math.random() * bibleVerses.length);
    return bibleVerses[randomIndex];
}

// Function to display the Bible verse
function displayVerse() {
    const currentVerse = getRandomVerse();
    document.getElementById('bible-verse').innerHTML = `<strong>${currentVerse.verse}</strong>: ${currentVerse.text}`;
}

// Set a function to refresh the verse at midnight
function refreshVerseAtMidnight() {
    const now = new Date();
    const nextMidnight = new Date();
    nextMidnight.setHours(24, 0, 0, 0); // Set to midnight
    
    const timeUntilMidnight = nextMidnight - now;
    
    setTimeout(() => {
        displayVerse(); // Show a new verse when midnight hits
        setInterval(displayVerse, 24 * 60 * 60 * 1000); // Refresh verse every 24 hours
    }, timeUntilMidnight);
}

// Initial verse display
displayVerse();

// Start the midnight refresh
refreshVerseAtMidnight();

