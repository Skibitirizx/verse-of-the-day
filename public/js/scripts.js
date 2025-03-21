document.addEventListener("DOMContentLoaded", function () {
    const verseElement = document.getElementById("verse");
    const referenceElement = document.getElementById("reference");

    async function fetchVerse() {
        try {
            const response = await fetch("https://beta.ourmanna.com/api/v1/get/?format=json");
            const data = await response.json();

            verseElement.textContent = data.verse.details.text;
            referenceElement.textContent = `- ${data.verse.details.reference}`;
        } catch (error) {
            verseElement.textContent = "Failed to load verse.";
            referenceElement.textContent = "";
            console.error("Error fetching verse:", error);
        }
    }

    fetchVerse();
});
