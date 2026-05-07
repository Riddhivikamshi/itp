**RagaSearch: Project Documentation & Reflection
**

https://riddhivikamshi.github.io/

I developed RagaSearch, a digital database and interactive web application designed to catalog 65 North Indian (Hindustani) ragas. This project was done with the help of Gemini AI. The goal was to create an educational tool that bridges Eastern and Western musical concepts by providing the Aaroh (ascending scale), Avroh (descending scale), Western equivalents, Carnatic equivalents, and performance times for each raga.
Built entirely with HTML and JavaScript, the final application features a custom scoring-based search engine, a sticky educational glossary sidebar, and a fully functional dark-mode toggle built with CSS variables.

Building this application was a massive learning curve. I ran into several coding roadblocks that ultimately taught me a lot about how web browsers and programming logic actually work behind the scenes.

Initially, I set up my project using an external style.css file. It looked great, but I quickly realized I had overlooked a major class constraint: I was only allowed to use (didn’t speak to professor about it) .html and .js files. I had to pivot and refactor my entire styling architecture, moving all my CSS into an internal <style> tag inside the index.html file.

One of the most frustrating parts of the process was updating my JavaScript sorting algorithm, hitting refresh, and seeing absolutely nothing change. I learned the hard way about browser caching my browser was trying to be "helpful" by loading an old saved copy of my code. I had to learn how to use Hard Refreshes to force the browser to read my new logic.

While pasting my massive 65-raga database, my entire website suddenly vanished, leaving only a blank white screen. I learned how to use the browser's Developer Console to hunt down errors. At one point, the issue was simply a missing </style> tag that caused the browser to read my whole website as CSS. In another instance, the code was completely flawless, and the white screen was only fixed by hitting the "Enter" key at the end of my JavaScript file so the browser could register the End of File!

Because the full database is quite long, I have included the core structural snippets below. The application relies on a JavaScript array of objects to store the data, which is then dynamically injected into the HTML DOM.

const ragaDatabase = [
  {
    id: 1,
    name: "Ahir Bhairav",
    aarohSwaras: "S, r, G, M, P, D, n, S'",
    avrohSwaras: "S', n, D, P, M, G, r, S",
    aarohScale: "1, b2, 3, 4, 5, 6, b7, 8",
    avrohScale: "8, b7, 6, 5, 4, 3, b2, 1",
    pakad: "G, M, D, n, D, P, M, G, r, S",
    westernEquivalent: "Mixolydian b2",
    carnaticEquivalent: "Chakravakam",
    time: "Early Morning",
    mood: "Peace, Devotion"
  }
  //  64 more ragas follow
];

One of the most complex features I built was the Search Normalization. Initially, if a user searched "S R G", the app would break because the database formatted it as "S, R, G". I implemented a Regular Expression (Regex) to strip spaces and commas out of both the search input and the database before comparing them, making the search incredibly robust.

searchInput.addEventListener('input', (event) => {
    const rawSearchTerm = event.target.value.toLowerCase().trim();
    
    // Normalization: Removes all spaces and commas for robust searching
    const cleanSearchTerm = rawSearchTerm.replace(/[\s,]+/g, '');

    if (rawSearchTerm === "") {
        displayRagas(ragaDatabase);
        return;
    }

    const scoredRagas = ragaDatabase.map(raga => {
        let score = 0;
        
        // Exact name matches get highest priority
        if (raga.name.toLowerCase().startsWith(rawSearchTerm)) score += 50; 
        
        // Normalize database strings before comparing
        const cleanAaroh = raga.aarohSwaras.toLowerCase().replace(/[\s,]+/g, '');
        if (cleanAaroh.includes(cleanSearchTerm)) score += 30;

        return { raga: raga, score: score };
    });

    // Filter, sort by relevance score, and display
    const filteredRagas = scoredRagas.filter(item => item.score > 0);
    filteredRagas.sort((a, b) => b.score - a.score);
    displayRagas(filteredRagas.map(item => item.raga));
});

For the final touch, I implemented CSS variables to allow for a Dark Mode toggle. Instead of hardcoding colors, I used variables like --bg-color and --heading-color (using a custom palette of #DCE6F2 for backgrounds and #F285E0 for headings). A small JavaScript function toggles a dark-mode class on the body tag, instantly swapping the entire color palette. I also added a responsive sidebar glossary to explain terms like Komal and Tivra, fulfilling the project's educational goals.
Overall, building RagaSearch taught me that programming is just as much about debugging, problem-solving, and managing data as it is about writing code.

I will be, in the future, developing this website as a full version with more data, better design, visuals and usability.
