// Prosta logika, np. podświetlenie aktualnego dnia
document.addEventListener("DOMContentLoaded", () => {
    const today = new Date().getDay(); // 0 = niedziela, 1 = poniedziałek, itd.
    if (today === 1) { // Poniedziałek
        document.querySelector("h2").style.color = "#ff9900"; // Podświetlenie nagłówka
    }
});