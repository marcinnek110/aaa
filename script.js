// Definiujemy wszystkie możliwe przedziały czasowe w ciągu dnia (co 45 minut)
const timeSlots = [
    { start: "08:15", end: "09:00" },
    { start: "09:10", end: "09:55" },
    { start: "10:05", end: "10:50" },
    { start: "11:10", end: "11:55" },
    { start: "12:05", end: "12:50" },
    { start: "13:00", end: "13:45" },
    { start: "13:55", end: "14:40" },
    { start: "14:50", end: "15:35" }
];

// Dane planu zajęć dla każdego dnia
const timetableData = [
    // Poniedziałek, 7 kwietnia 2025
    [
        { time: "08:15 - 09:00", subject: "Godzina wychowawcza", color: "#66ccff" },
        { time: "09:10 - 09:55", subject: "Język polski", color: "#6666ff" },
        { time: "10:05 - 10:50", subject: "Religia", color: "#ff3399" },
        // Brak "Biznes i zarządzanie" w przedziale 11:10 - 11:55, będzie pusta luka
        { time: "12:05 - 12:50", subject: "Informatyka", color: "#ff3333" },
        { time: "13:00 - 13:45", subject: "Geografia", color: "#ff9933" },
        { time: "13:55 - 14:40", subject: "Matematyka", color: "#cc33cc" }
        // Brak lekcji w przedziale 14:50 - 15:35, będzie pusta luka
    ],
    // Wtorek, 8 kwietnia 2025
    [
        { time: "09:10 - 09:55", subject: "Montaż i eksploatacja lokalnej sieci komputerowej", color: "#33ccff" },
        { time: "10:05 - 10:50", subject: "Montaż i eksploatacja lokalnej sieci komputerowej", color: "#33ccff" },
        { time: "11:10 - 11:55", subject: "Montaż i eksploatacja lokalnej sieci komputerowej", color: "#33ccff" },
        { time: "12:05 - 12:50", subject: "Tworzenie i testowanie aplikacji", color: "#cc33cc" },
        { time: "13:00 - 13:45", subject: "Tworzenie i testowanie aplikacji", color: "#cc33cc" },
        { time: "13:55 - 14:40", subject: "Tworzenie i testowanie aplikacji", color: "#cc33cc" },
        { time: "14:50 - 15:35", subject: "Geografia", color: "#ff9933" }
    ],
    // Środa, 9 kwietnia 2025
    [
        { time: "09:10 - 09:55", subject: "Matematyka", color: "#cc33cc" },
        { time: "10:05 - 10:50", subject: "Wychowanie fizyczne", color: "#ff9933" },
        { time: "11:10 - 11:55", subject: "Historia", color: "#6666ff" },
        { time: "12:05 - 12:50", subject: "Administrowanie serwerowymi systemami operacyjnymi", color: "#66ff66" },
        { time: "13:00 - 13:45", subject: "Administrowanie serwerowymi systemami operacyjnymi", color: "#66ff66" },
        { time: "13:55 - 14:40", subject: "Administrowanie serwerowymi systemami operacyjnymi", color: "#66ff66" },
        { time: "14:50 - 15:35", subject: "Język angielski", color: "#ff3333" }
    ],
    // Czwartek, 10 kwietnia 2025
    [
        { time: "08:15 - 09:00", subject: "Język polski", color: "#6666ff" },
        { time: "09:10 - 09:55", subject: "Biznes i zarządzanie", color: "#ccff66" },
        { time: "10:05 - 10:50", subject: "Biologia", color: "#ffcc33" },
        { time: "11:10 - 11:55", subject: "Naprawa urządzeń techniki komputerowej", color: "#ff3399" },
        { time: "12:05 - 12:50", subject: "Naprawa urządzeń techniki komputerowej", color: "#ff3399" },
        { time: "13:00 - 13:45", subject: "Język angielski", color: "#ff3333" },
        { time: "13:55 - 14:40", subject: "Wychowanie fizyczne", color: "#ff9933" }
    ],
    // Piątek, 11 kwietnia 2025
    [
        { time: "08:15 - 09:00", subject: "Język niemiecki", color: "#66ff66" },
        { time: "09:10 - 09:55", subject: "Język polski", color: "#6666ff" },
        { time: "10:05 - 10:50", subject: "Język angielski", color: "#ff3333" },
        { time: "11:10 - 11:55", subject: "Eksploatacja urządzeń peryferyjnych", color: "#33ccff" },
        { time: "12:05 - 12:50", subject: "Eksploatacja urządzeń peryferyjnych", color: "#33ccff" },
        { time: "13:00 - 13:45", subject: "Historia i teraźniejszość", color: "#66ff66" },
        { time: "13:55 - 14:40", subject: "Historia", color: "#6666ff" }
    ]
];

// Dni tygodnia i daty
const daysOfWeek = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek"];
const dates = ["7 kwietnia 2025", "8 kwietnia 2025", "9 kwietnia 2025", "10 kwietnia 2025", "11 kwietnia 2025"];

// Funkcja do wyświetlania planu dla wybranego dnia
function displayTimetable(dayIndex) {
    console.log("Wyświetlam plan dla dnia:", dayIndex);
    const timetable = document.getElementById("timetable");
    const currentDate = document.getElementById("current-date");

    if (!timetable || !currentDate) {
        console.error("Nie znaleziono elementów timetable lub current-date");
        return;
    }

    timetable.innerHTML = ""; // Wyczyść poprzedni plan

    // Zaktualizuj nagłówek z datą
    currentDate.textContent = `${daysOfWeek[dayIndex]}, ${dates[dayIndex]}`;

    // Zaktualizuj aktywny dzień w kalendarzu
    document.querySelectorAll(".calendar .day").forEach(day => {
        day.classList.remove("active");
        if (parseInt(day.getAttribute("data-day")) === dayIndex) {
            day.classList.add("active");
        }
    });

    // Wypełnij plan lekcji z uwzględnieniem wszystkich przedziałów czasowych
    const dayLessons = timetableData[dayIndex] || [];
    timeSlots.forEach(slot => {
        const li = document.createElement("li");
        const lesson = dayLessons.find(l => l.time === `${slot.start} - ${slot.end}`);

        if (lesson) {
            // Jeśli jest lekcja w tym przedziale czasowym
            li.innerHTML = `
                <span class="time-left">${slot.start}</span>
                <div class="lesson" style="background-color: ${lesson.color};">
                    <span class="subject">${lesson.subject}</span>
                    <span class="time">${lesson.time}</span>
                </div>
            `;
        } else {
            // Jeśli nie ma lekcji, wyświetlamy pustą lukę
            li.innerHTML = `
                <span class="time-left">${slot.start}</span>
                <div class="lesson empty"></div>
            `;
        }
        timetable.appendChild(li);
    });
}

// Inicjalizacja - wyświetl poniedziałek
document.addEventListener("DOMContentLoaded", () => {
    console.log("Strona załadowana, inicjalizuję plan...");
    let currentDayIndex = 0;
    displayTimetable(currentDayIndex);

    // Obsługa strzałek
    document.querySelector(".left-arrow").addEventListener("click", () => {
        currentDayIndex = (currentDayIndex - 1 + timetableData.length) % timetableData.length;
        displayTimetable(currentDayIndex);
    });

    document.querySelector(".right-arrow").addEventListener("click", () => {
        currentDayIndex = (currentDayIndex + 1) % timetableData.length;
        displayTimetable(currentDayIndex);
    });

    // Obsługa kliknięcia w kalendarz
    document.querySelectorAll(".calendar .day[data-day]").forEach(day => {
        day.addEventListener("click", () => {
            currentDayIndex = parseInt(day.getAttribute("data-day"));
            displayTimetable(currentDayIndex);
        });
    });
});