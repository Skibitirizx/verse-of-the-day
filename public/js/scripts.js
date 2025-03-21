document.addEventListener("DOMContentLoaded", function () {
    const verseElement = document.getElementById("verse");
    const referenceElement = document.getElementById("reference");

    const currentDate = new Date();
    const todayDateString = currentDate.toISOString().slice(0, 10); // Gets the current date in YYYY-MM-DD format
    const storedDate = localStorage.getItem("verseDate");

    // Check if we already have a stored verse and whether it's for today
    if (storedDate === todayDateString) {
        // If the verse is already stored for today, display it
        const storedVerse = JSON.parse(localStorage.getItem("verseData"));
        verseElement.textContent = storedVerse.verse;
        referenceElement.textContent = `- ${storedVerse.reference}`;
    } else {
        // If no verse is stored for today, fetch a random one and store it
        fetchRandomVerse();
    }

    async function fetchRandomVerse() {
        try {
            // List of possible verse references
            const verseList = [
                "John 3:16", "Isaiah 41:4", "Psalm 23:1", "Philippians 4:13", "Romans 8:28"
            ];

            // Pick a random verse from the list
            const randomVerseReference = verseList[Math.floor(Math.random() * verseList.length)];

            // Fetch the random verse using the Bible API
            const response = await fetch(`https://bible-api.com/${encodeURIComponent(randomVerseReference)}`);
            const data = await response.json();

            const verse = data.text;
            const reference = data.reference;

            // Store the verse and the current date in localStorage
            localStorage.setItem("verseDate", todayDateString);
            localStorage.setItem("verseData", JSON.stringify({ verse, reference }));

            // Display the fetched verse
            verseElement.textContent = verse;
            referenceElement.textContent = `- ${reference}`;
        } catch (error) {
            verseElement.textContent = "Failed to load verse.";
            referenceElement.textContent = "";
            console.error("Error fetching verse:", error);
        }
    }
});
