const verses = [
  "John 3:16 - For God so loved the world...",
  "Psalm 23:1 - The Lord is my shepherd...",
  "Romans 8:28 - All things work together for good...",
  "Philippians 4:13 - I can do all things through Christ...",
  "Proverbs 3:5 - Trust in the Lord with all your heart...",
  "Isaiah 40:31 - Those who wait on the Lord shall renew their strength...",
  "Matthew 6:33 - Seek first the kingdom of God...",
  // Add more verses as needed
];

function getDailyVerse() {
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  let hash = 0;
  for (let i = 0; i < today.length; i++) {
    hash = today.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % verses.length;
  return verses[index];
}

function showVerse() {
  const verse = getDailyVerse();
  document.getElementById('verse-text').innerText = verse;
}

function createFloatingCrosses() {
  const container = document.getElementById('background');
  const numCrosses = 40;

  for (let i = 0; i < numCrosses; i++) {
    const cross = document.createElement('div');
    cross.classList.add('cross');
    cross.innerText = '+';
    cross.style.left = `${Math.random() * 100}%`;
    cross.style.top = `${Math.random() * 100}%`;
    cross.style.animationDuration = `${5 + Math.random() * 10}s`;
    cross.style.fontSize = `${16 + Math.random() * 24}px`;
    container.appendChild(cross);
  }
}

showVerse();
createFloatingCrosses();
