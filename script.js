// Dane planu zajęć dla każdego dnia
const timetableData = [
    // Poniedziałek, 7 kwietnia 2025
    [
        { timeLeft: "08:15", time: "08:15 - 09:00", subject: "Godzina wychowawcza", color: "#66ccff" },
        { timeLeft: "09:10", time: "09:10 - 09:55", subject: "Język polski", color: "#6666ff" },
        { timeLeft: "10:05", time: "10:05 - 10:50", subject: "Religia", color: "#ff3399" },
        { timeLeft: "11:10", time: "11:10 - 11:55", subject: "Biznes i zarządzanie", color: "#ccff66" },
        { timeLeft: "12:05", time: "12:05 - 12:50", subject: "Informatyka", color: "#ff3333" },
        { timeLeft: "13:00", time: "13:00 - 13:45", subject: "Geografia", color: "#ff9933" },
        { timeLeft: "13:55", time: "13:55 - 14:40", subject: "Matematyka", color: "#cc33cc" }
    ],
    // Wtorek, 8 kwietnia 2025
    [
        { timeLeft: "09:10", time: "09:10 - 09:55", subject: "Montaż i eksploatacja lokalnej sieci komputerowej", color: "#33ccff" },
        { timeLeft: "10:05", time: "10:05 - 10:50", subject: "Montaż i eksploatacja lokalnej sieci komputerowej", color: "#33ccff" },
        { timeLeft: "11:10", time: "11:10 - 11:55", subject: "Montaż i eksploatacja lokalnej sieci komputerowej", color: "#33ccff" },
        { timeLeft: "12:05", time: "12:05 - 12:50", subject: "Tworzenie i testowanie aplikacji", color: "#cc33cc" },
        { timeLeft: "13:00", time: "13:00 - 13:45", subject: "Tworzenie i testowanie aplikacji", color: "#cc33cc" },
        { timeLeft: "13:55", time: "13:55 - 14:40", subject: "Tworzenie i testowanie aplikacji", color: "#cc33cc" },
        { timeLeft: "14:50", time: "14:50 - 15:35", subject: "Geografia", color: "#ff9933" }
    ],
    // Środa, 9 kwietnia 2025
    [
        { timeLeft: "09:10", time: "09:10 - 09:55", subject: "Matematyka", color: "#cc33cc" },
        { timeLeft: "10:05", time: "10:05 - 10:50", subject: "Wychowanie fizyczne", color: "#ff9933" },
        { timeLeft: "11:10", time: "11:10 - 11:55", subject: "Historia", color: "#6666ff" },
        { timeLeft: "12:05", time: "12:05 - 12:50", subject: "Administrowanie serwerowymi systemami operacyjnymi", color: "#66ff66" },
        { timeLeft: "13:00", time: "13:00 - 13:45", subject: "Administrowanie serwerowymi systemami operacyjnymi", color: "#66ff66" },
        { timeLeft: "13:55", time: "13:55 - 14:40", subject: "Administrowanie serwerowymi systemami operacyjnymi", color: "#66ff66" },
        { timeLeft: "14:50", time: "14:50 - 15:35", subject: "Język angielski", color: "#ff3333" }
    ],
    // Czwartek, 10 kwietnia 2025
    [
        { timeLeft: "08:15", time: "08:15 - 09:00", subject: "Język polski", color: "#6666ff" },
        { timeLeft: "09:10", time: "09:10 - 09:55", subject: "Biznes i zarządzanie", color: "#ccff66" },
        { timeLeft: "10:05", time: "10:05 - 10:50", subject: "Biologia", color: "#ffcc33" },
        { timeLeft: "11:10", time: "11:10 - 11:55", subject: "Naprawa urządzeń techniki komputerowej", color: "#ff3399" },
        { timeLeft: "12:05", time: "12:05 - 12:50", subject: "Naprawa urządzeń techniki komputerowej", color: "#ff3399" },
        { timeLeft: "13:00", time: "13:00 - 13:45", subject: "Język angielski", color: "#ff3333" },
        { timeLeft: "13:55", time: "13:55 - 14:40", subject: "Wychowanie fizyczne", color: "#ff9933" }
    ],
    // Piątek, 11 kwietnia 2025
    [
        { timeLeft: "08:15", time: "08:15 - 09:00", subject: "Język niemiecki", color: "#66ff66" },
        { timeLeft: "09:10", time: "09:10 - 09:55", subject: "Język polski", color: "#6666ff" },
        { timeLeft: "10:05", time: "10:05 - 10:50", subject: "Język angielski", color: "#ff3333" },
        { timeLeft: "11:10", time: "11:10 - 11:55", subject: "Eksploatacja urządzeń peryferyjnych", color: "#33ccff" },
        { timeLeft: "12:05", time: "12:05 - 12:50", subject: "Eksploatacja urządzeń peryferyjnych", color: "#33ccff" },
        { timeLeft: "13:00", time: "13:00 - 13:45", subject: "Historia i teraźniejszość", color: "#66ff66" },
        { timeLeft: "13:55", time: "13:55 - 14:40", subject: "Historia", color: "#6666ff" }
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

    // Wypełnij plan lekcji
    if (timetableData[dayIndex]) {
        timetableData[dayIndex].forEach(lesson => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span class="time-left">${lesson.timeLeft}</span>
                <div class="lesson" style="background-color: ${lesson.color};">
                    <span class="subject">${lesson.subject}</span>
                    <span class="time">${lesson.time}</span>
                </div>
            `;
            timetable.appendChild(li);
        });
    } else {
        console.error("Brak danych dla dnia:", dayIndex);
    }
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