const verses = [
  "John 3:16 - For God so loved the world that he gave his one and only Son...",
  "Psalm 23:1 - The Lord is my shepherd, I shall not want.",
  "Philippians 4:13 - I can do all things through Christ who strengthens me.",
  "Romans 8:28 - All things work together for good to those who love God.",
  "Proverbs 3:5 - Trust in the Lord with all your heart.",
  "Isaiah 40:31 - Those who hope in the Lord will renew their strength.",
  "Matthew 6:33 - Seek first the kingdom of God and His righteousness.",
  "Jeremiah 29:11 - For I know the plans I have for you, declares the Lord."
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
  const verseEl = document.getElementById('verse-text');
  if (verseEl) verseEl.innerText = verse;
}

function createFloatingCrosses() {
  const container = document.getElementById('background');
  const count = 40;

  for (let i = 0; i < count; i++) {
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
