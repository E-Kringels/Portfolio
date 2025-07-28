// --- Idee 2: Dynamische Begrüßung ---
function updateGreeting() {
    const greetingElement = document.getElementById('dynamicGreeting');
    if (!greetingElement) return; // Stellt sicher, dass das Element existiert

    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours >= 5 && hours < 12) {
        greeting = "Guten Morgen!";
    } else if (hours >= 12 && hours < 18) {
        greeting = "Guten Tag!";
    } else if (hours >= 18 && hours < 22) {
        greeting = "Guten Abend!";
    } else {
        greeting = "Gute Nacht!"; // Oder "Hallo!" für späte Nachtstunden
    }

    greetingElement.textContent = greeting;
}

// Funktion beim Laden der Seite aufrufen
updateGreeting();

// Optional: Begrüßung stündlich aktualisieren (falls die Seite lange offen bleibt)
// setInterval(updateGreeting, 60 * 60 * 1000); // Auskommentiert, da es für kurze Besuche nicht unbedingt nötig ist

// --- Idee 3: Dark/Light Mode Umschalter ---
const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;

// Überprüfen, ob themeToggleBtn existiert, bevor Listener hinzugefügt wird
if (themeToggleBtn) {
    const currentTheme = localStorage.getItem('theme'); // Versucht, den gespeicherten Theme zu laden

    // Setzt das Theme beim Laden der Seite basierend auf dem gespeicherten Wert
    if (currentTheme) {
        body.classList.add(currentTheme);
        updateToggleIcon(currentTheme);
    } else {
        // Standardmäßig Light Mode, falls nichts gespeichert ist (oder wenn der Browser ein Dark Mode bevorzugt)
        // Check for user's system preference (prefers-color-scheme)
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.add('dark-mode');
            updateToggleIcon('dark-mode');
            localStorage.setItem('theme', 'dark-mode'); // Speichert Präferenz, wenn System Dark Mode
        } else {
            body.classList.add('light-mode'); // Fügen Sie eine "light-mode" Klasse für Konsistenz hinzu
            updateToggleIcon('light-mode');
        }
    }

    themeToggleBtn.addEventListener('click', () => {
        let newTheme;
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            newTheme = 'light-mode';
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            newTheme = 'dark-mode';
        }
        localStorage.setItem('theme', newTheme); // Speichert die Präferenz
        updateToggleIcon(newTheme);
    });
}


function updateToggleIcon(theme) {
    // Stellen Sie sicher, dass themeToggleBtn existiert, bevor Sie darauf zugreifen
    if (themeToggleBtn) {
        if (theme === 'dark-mode') {
            themeToggleBtn.textContent = '☀️'; // Sonnen-Emoji für Dark Mode
            themeToggleBtn.setAttribute('title', 'Zum hellen Modus wechseln');
        } else {
            themeToggleBtn.textContent = '🌙'; // Mond-Emoji für Light Mode
            themeToggleBtn.setAttribute('title', 'Zum dunklen Modus wechseln');
        }
    }
}


// --- Optional: Der Code für den Back-to-Top Button (falls Sie ihn doch behalten möchten) ---
/*
const backToTopBtn = document.getElementById("backToTopBtn");

if (backToTopBtn) { // Nur ausführen, wenn der Button im HTML vorhanden ist
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    backToTopBtn.addEventListener("click", topFunction);

    function topFunction() {
        // Smooth scroll for modern browsers
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}
*/