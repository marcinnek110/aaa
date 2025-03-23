// Definiujemy wszystkie możliwe przedziały czasowe w ciągu dnia (co 45 minut) z numerami lekcji
const timeSlots = [
    { start: "08:15", end: "09:00", lessonNumber: 1 },
    { start: "09:10", end: "09:55", lessonNumber: 2 },
    { start: "10:05", end: "10:50", lessonNumber: 3 },
    { start: "11:10", end: "11:55", lessonNumber: 4 },
    { start: "12:05", end: "12:50", lessonNumber: 5 },
    { start: "13:00", end: "13:45", lessonNumber: 6 },
    { start: "13:55", end: "14:40", lessonNumber: 7 },
    { start: "14:50", end: "15:35", lessonNumber: 8 }
];

// Dane planu zajęć dla każdego dnia (z dodanymi szczegółami)
let timetableData = [
    // Poniedziałek, 7 kwietnia 2025
    [
        { time: "08:15 - 09:00", subject: "Godzina wychowawcza", color: "#66ccff", details: { teacher: "Jan Kowalski", room: "Sala 12", notes: "Przynieść zeszyt" } },
        { time: "09:10 - 09:55", subject: "Język polski", color: "#6666ff", details: { teacher: "Anna Nowak", room: "Sala 15", notes: "" } },
        { time: "10:05 - 10:50", subject: "Religia", color: "#ff3399", details: { teacher: "Maria Wiśniewska", room: "Sala 20", notes: "Przygotować się do kartkówki" } },
        { time: "12:05 - 12:50", subject: "Informatyka", color: "#ff3333", details: { teacher: "Piotr Zieliński", room: "Pracownia komputerowa", notes: "" } },
        { time: "13:00 - 13:45", subject: "Geografia", color: "#ff9933", details: { teacher: "Katarzyna Lis", room: "Sala 10", notes: "Przynieść atlas" } },
        { time: "13:55 - 14:40", subject: "Matematyka", color: "#cc33cc", details: { teacher: "Tomasz Marek", room: "Sala 8", notes: "Zadania z podręcznika str. 45" } }
    ],
    // Wtorek, 8 kwietnia 2025
    [
        { time: "09:10 - 09:55", subject: "Montaż i eksploatacja lokalnej sieci komputerowej", color: "#33ccff", details: { teacher: "Piotr Zieliński", room: "Pracownia komputerowa", notes: "Przynieść pendrive" } },
        { time: "10:05 - 10:50", subject: "Montaż i eksploatacja lokalnej sieci komputerowej", color: "#33ccff", details: { teacher: "Piotr Zieliński", room: "Pracownia komputerowa", notes: "" } },
        { time: "11:10 - 11:55", subject: "Montaż i eksploatacja lokalnej sieci komputerowej", color: "#33ccff", details: { teacher: "Piotr Zieliński", room: "Pracownia komputerowa", notes: "" } },
        { time: "12:05 - 12:50", subject: "Tworzenie i testowanie aplikacji", color: "#cc33cc", details: { teacher: "Marek Nowak", room: "Pracownia komputerowa 2", notes: "Projekt grupowy" } },
        { time: "13:00 - 13:45", subject: "Tworzenie i testowanie aplikacji", color: "#cc33cc", details: { teacher: "Marek Nowak", room: "Pracownia komputerowa 2", notes: "" } },
        { time: "13:55 - 14:40", subject: "Tworzenie i testowanie aplikacji", color: "#cc33cc", details: { teacher: "Marek Nowak", room: "Pracownia komputerowa 2", notes: "" } },
        { time: "14:50 - 15:35", subject: "Geografia", color: "#ff9933", details: { teacher: "Katarzyna Lis", room: "Sala 10", notes: "" } }
    ],
    // Środa, 9 kwietnia 2025
    [
        { time: "09:10 - 09:55", subject: "Matematyka", color: "#cc33cc", details: { teacher: "Tomasz Marek", room: "Sala 8", notes: "" } },
        { time: "10:05 - 10:50", subject: "Wychowanie fizyczne", color: "#ff9933", details: { teacher: "Adam Kowal", room: "Sala gimnastyczna", notes: "Strój sportowy" } },
        { time: "11:10 - 11:55", subject: "Historia", color: "#6666ff", details: { teacher: "Ewa Malinowska", room: "Sala 14", notes: "Przeczytać rozdział 5" } },
        { time: "12:05 - 12:50", subject: "Administrowanie serwerowymi systemami operacyjnymi", color: "#66ff66", details: { teacher: "Piotr Zieliński", room: "Pracownia komputerowa", notes: "" } },
        { time: "13:00 - 13:45", subject: "Administrowanie serwerowymi systemami operacyjnymi", color: "#66ff66", details: { teacher: "Piotr Zieliński", room: "Pracownia komputerowa", notes: "" } },
        { time: "13:55 - 14:40", subject: "Administrowanie serwerowymi systemami operacyjnymi", color: "#66ff66", details: { teacher: "Piotr Zieliński", room: "Pracownia komputerowa", notes: "" } },
        { time: "14:50 - 15:35", subject: "Język angielski", color: "#ff3333", details: { teacher: "Joanna Smith", room: "Sala 16", notes: "Przygotować dialog" } }
    ],
    // Czwartek, 10 kwietnia 2025
    [
        { time: "08:15 - 09:00", subject: "Język polski", color: "#6666ff", details: { teacher: "Anna Nowak", room: "Sala 15", notes: "" } },
        { time: "09:10 - 09:55", subject: "Biznes i zarządzanie", color: "#ccff66", details: { teacher: "Marek Wiśniewski", room: "Sala 18", notes: "Prezentacja" } },
        { time: "10:05 - 10:50", subject: "Biologia", color: "#ffcc33", details: { teacher: "Katarzyna Zielona", room: "Sala 22", notes: "Przynieść mikroskop" } },
        { time: "11:10 - 11:55", subject: "Naprawa urządzeń techniki komputerowej", color: "#ff3399", details: { teacher: "Piotr Zieliński", room: "Pracownia komputerowa", notes: "" } },
        { time: "12:05 - 12:50", subject: "Naprawa urządzeń techniki komputerowej", color: "#ff3399", details: { teacher: "Piotr Zieliński", room: "Pracownia komputerowa", notes: "" } },
        { time: "13:00 - 13:45", subject: "Język angielski", color: "#ff3333", details: { teacher: "Joanna Smith", room: "Sala 16", notes: "" } },
        { time: "13:55 - 14:40", subject: "Wychowanie fizyczne", color: "#ff9933", details: { teacher: "Adam Kowal", room: "Sala gimnastyczna", notes: "Strój sportowy" } }
    ],
    // Piątek, 11 kwietnia 2025
    [
        { time: "08:15 - 09:00", subject: "Język niemiecki", color: "#66ff66", details: { teacher: "Hans Müller", room: "Sala 17", notes: "Słownictwo z rozdziału 3" } },
        { time: "09:10 - 09:55", subject: "Język polski", color: "#6666ff", details: { teacher: "Anna Nowak", room: "Sala 15", notes: "" } },
        { time: "10:05 - 10:50", subject: "Język angielski", color: "#ff3333", details: { teacher: "Joanna Smith", room: "Sala 16", notes: "" } },
        { time: "11:10 - 11:55", subject: "Eksploatacja urządzeń peryferyjnych", color: "#33ccff", details: { teacher: "Piotr Zieliński", room: "Pracownia komputerowa", notes: "" } },
        { time: "12:05 - 12:50", subject: "Eksploatacja urządzeń peryferyjnych", color: "#33ccff", details: { teacher: "Piotr Zieliński", room: "Pracownia komputerowa", notes: "" } },
        { time: "13:00 - 13:45", subject: "Historia i teraźniejszość", color: "#66ff66", details: { teacher: "Ewa Malinowska", room: "Sala 14", notes: "" } },
        { time: "13:55 - 14:40", subject: "Historia", color: "#6666ff", details: { teacher: "Ewa Malinowska", room: "Sala 14", notes: "" } }
    ]
];

// Kopia początkowego planu do resetowania
const initialTimetableData = JSON.parse(JSON.stringify(timetableData));

// Dni tygodnia i daty
const daysOfWeek = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek"];
const dates = ["7 kwietnia 2025", "8 kwietnia 2025", "9 kwietnia 2025", "10 kwietnia 2025", "11 kwietnia 2025"];

// Funkcja do zapisywania danych w localStorage
function saveTimetableData() {
    localStorage.setItem("timetableData", JSON.stringify(timetableData));
}

// Funkcja do ładowania danych z localStorage
function loadTimetableData() {
    const savedData = localStorage.getItem("timetableData");
    if (savedData) {
        timetableData = JSON.parse(savedData);
    }
}

// Funkcja do zapisywania stanu trybu edycji w localStorage
function saveEditModeState(isEditMode) {
    localStorage.setItem("editMode", isEditMode ? "true" : "false");
}

// Funkcja do ładowania stanu trybu edycji z localStorage
function loadEditModeState() {
    return localStorage.getItem("editMode") === "true";
}

// Funkcja do zapisywania motywu w localStorage
function saveThemeState(isLightTheme) {
    localStorage.setItem("theme", isLightTheme ? "light" : "dark");
}

// Funkcja do ładowania motywu z localStorage
function loadThemeState() {
    return localStorage.getItem("theme") === "light";
}

// Funkcja do przełączania trybu edycji
function toggleEditMode() {
    const isEditMode = document.body.classList.contains("edit-mode");
    if (isEditMode) {
        // Wyłącz tryb edycji
        document.body.classList.remove("edit-mode");
        document.getElementById("toggleEditMode").textContent = "👁️";
        saveEditModeState(false);
    } else {
        // Pokaż modal z hasłem
        const modal = document.getElementById("passwordModal");
        modal.style.display = "block";

        const form = document.getElementById("passwordForm");
        const errorMessage = document.getElementById("passwordError");
        form.onsubmit = function(e) {
            e.preventDefault();
            const password = document.getElementById("passwordInput").value;
            if (password === "12345") {
                // Włącz tryb edycji
                document.body.classList.add("edit-mode");
                document.getElementById("toggleEditMode").textContent = "👁️‍🗨️";
                saveEditModeState(true);
                modal.style.display = "none";
            } else {
                errorMessage.textContent = "Niepoprawne hasło!";
                errorMessage.style.display = "block";
            }
        };

        // Obsługa zamknięcia modala
        document.querySelectorAll(".close").forEach(closeBtn => {
            closeBtn.onclick = function() {
                modal.style.display = "none";
                errorMessage.style.display = "none";
            };
        });
    }
}

// Funkcja do przełączania motywu
function toggleTheme() {
    const isLightTheme = document.body.classList.contains("light-theme");
    if (isLightTheme) {
        document.body.classList.remove("light-theme");
        document.getElementById("toggleTheme").textContent = "🌙";
        saveThemeState(false);
    } else {
        document.body.classList.add("light-theme");
        document.getElementById("toggleTheme").textContent = "☀️";
        saveThemeState(true);
    }
}

// Funkcja do resetowania planu
function resetTimetable() {
    timetableData = JSON.parse(JSON.stringify(initialTimetableData));
    saveTimetableData();
    displayTimetable(currentDayIndex);
}

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
    timeSlots.forEach((slot, slotIndex) => {
        const li = document.createElement("li");
        const lesson = dayLessons.find(l => l.time === `${slot.start} - ${slot.end}`);

        if (lesson) {
            // Jeśli jest lekcja w tym przedziale czasowym
            li.innerHTML = `
                <span class="time-left">${slot.lessonNumber}. ${slot.start}</span>
                <div class="lesson" style="background-color: ${lesson.color};" data-day="${dayIndex}" data-slot="${slotIndex}">
                    <span class="subject">${lesson.subject}</span>
                    <div class="lesson-right">
                        <span class="time">${lesson.time}</span>
                        <div class="lesson-actions">
                            <button class="edit-btn" data-day="${dayIndex}" data-slot="${slotIndex}">✏️</button>
                            <button class="delete-btn" data-day="${dayIndex}" data-slot="${slotIndex}">🗑️</button>
                        </div>
                    </div>
                </div>
            `;
            // Dodaj obsługę kliknięcia w lekcję
            li.querySelector(".lesson").addEventListener("click", (e) => {
                if (!e.target.classList.contains("edit-btn") && !e.target.classList.contains("delete-btn")) {
                    showLessonDetails(dayIndex, slotIndex);
                }
            });
        } else {
            // Jeśli nie ma lekcji, wyświetlamy pustą lukę z przyciskiem "Dodaj"
            li.innerHTML = `
                <span class="time-left">${slot.lessonNumber}. ${slot.start}</span>
                <div class="lesson empty" data-day="${dayIndex}" data-slot="${slotIndex}">
                    <button class="add-btn" data-day="${dayIndex}" data-slot="${slotIndex}">+ Dodaj lekcję</button>
                </div>
            `;
        }
        timetable.appendChild(li);
    });

    // Dodaj obsługę przycisków edycji, usuwania i dodawania
    document.querySelectorAll(".edit-btn").forEach(btn => {
        btn.addEventListener("click", handleEditLesson);
    });
    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", handleDeleteLesson);
    });
    document.querySelectorAll(".add-btn").forEach(btn => {
        btn.addEventListener("click", handleAddLesson);
    });
}

// Funkcja do pokazywania szczegółów lekcji
function showLessonDetails(dayIndex, slotIndex) {
    const lesson = timetableData[dayIndex].find(l => l.time === timeSlots[slotIndex].start + " - " + timeSlots[slotIndex].end);
    if (!lesson) return;

    // Wypełnij modal szczegółami
    document.getElementById("detailSubject").textContent = lesson.subject;
    document.getElementById("detailTime").textContent = lesson.time;
    document.getElementById("detailTeacher").textContent = lesson.details?.teacher || "Brak danych";
    document.getElementById("detailRoom").textContent = lesson.details?.room || "Brak danych";
    document.getElementById("detailNotes").textContent = lesson.details?.notes || "Brak notatek";

    // Pokaż modal
    const modal = document.getElementById("detailsModal");
    modal.style.display = "block";

    // Obsługa zamknięcia modala
    document.querySelectorAll(".close").forEach(closeBtn => {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        };
    });
}

// Funkcja do obsługi edycji lekcji
function handleEditLesson(event) {
    const dayIndex = parseInt(event.target.getAttribute("data-day"));
    const slotIndex = parseInt(event.target.getAttribute("data-slot"));
    const lesson = timetableData[dayIndex].find(l => l.time === timeSlots[slotIndex].start + " - " + timeSlots[slotIndex].end);

    // Wypełnij formularz danymi lekcji
    document.getElementById("editSubject").value = lesson.subject;
    document.getElementById("editTime").value = lesson.time;
    document.getElementById("editColor").value = lesson.color;

    // Pokaż modal
    const modal = document.getElementById("editModal");
    modal.style.display = "block";

    // Obsługa zapisu zmian
    const form = document.getElementById("editForm");
    form.onsubmit = function(e) {
        e.preventDefault();
        lesson.subject = document.getElementById("editSubject").value;
        lesson.time = document.getElementById("editTime").value;
        lesson.color = document.getElementById("editColor").value;

        // Zapisz zmiany w localStorage
        saveTimetableData();

        // Odśwież plan
        displayTimetable(dayIndex);

        // Zamknij modal
        modal.style.display = "none";
    };

    // Obsługa zamknięcia modala
    document.querySelectorAll(".close").forEach(closeBtn => {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        };
    });
}

// Funkcja do obsługi usuwania lekcji
function handleDeleteLesson(event) {
    const dayIndex = parseInt(event.target.getAttribute("data-day"));
    const slotIndex = parseInt(event.target.getAttribute("data-slot"));

    // Usuń lekcję z timetableData
    timetableData[dayIndex] = timetableData[dayIndex].filter(l => l.time !== timeSlots[slotIndex].start + " - " + timeSlots[slotIndex].end);

    // Zapisz zmiany w localStorage
    saveTimetableData();

    // Odśwież plan
    displayTimetable(dayIndex);
}

// Funkcja do obsługi dodawania lekcji
function handleAddLesson(event) {
    const dayIndex = parseInt(event.target.getAttribute("data-day"));
    const slotIndex = parseInt(event.target.getAttribute("data-slot"));

    // Wypełnij listę rozwijaną przedziałami czasowymi
    const timeSelect = document.getElementById("addTime");
    timeSelect.innerHTML = "";
    timeSlots.forEach((slot, index) => {
        const option = document.createElement("option");
        option.value = `${slot.start} - ${slot.end}`;
        option.textContent = `${slot.start} - ${slot.end}`;
        if (index === slotIndex) {
            option.selected = true;
        }
        timeSelect.appendChild(option);
    });

    // Pokaż modal
    const modal = document.getElementById("addModal");
    modal.style.display = "block";

    // Obsługa dodania nowej lekcji
    const form = document.getElementById("addForm");
    form.onsubmit = function(e) {
        e.preventDefault();
        const newLesson = {
            time: document.getElementById("addTime").value,
            subject: document.getElementById("addSubject").value,
            color: document.getElementById("addColor").value,
            details: { teacher: "", room: "", notes: "" } // Domyślne szczegóły
        };

        // Dodaj nową lekcję do timetableData
        timetableData[dayIndex].push(newLesson);

        // Zapisz zmiany w localStorage
        saveTimetableData();

        // Odśwież plan
        displayTimetable(dayIndex);

        // Zamknij modal
        modal.style.display = "none";
    };

    // Obsługa zamknięcia modala
    document.querySelectorAll(".close").forEach(closeBtn => {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        };
    });
}

// Inicjalizacja - wyświetl poniedziałek
let currentDayIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    console.log("Strona załadowana, inicjalizuję plan...");
    
    // Załaduj dane z localStorage
    loadTimetableData();

    // Załaduj stan trybu edycji
    if (loadEditModeState()) {
        document.body.classList.add("edit-mode");
        document.getElementById("toggleEditMode").textContent = "👁️‍🗨️";
    }

    // Załaduj motyw
    if (loadThemeState()) {
        document.body.classList.add("light-theme");
        document.getElementById("toggleTheme").textContent = "☀️";
    }

    // Wyświetl początkowy plan
    displayTimetable(currentDayIndex);

    // Obsługa kliknięcia w ikonkę oka
    document.getElementById("toggleEditMode").addEventListener("click", toggleEditMode);

    // Obsługa przełączania motywu
    document.getElementById("toggleTheme").addEventListener("click", toggleTheme);

    // Obsługa przycisku resetowania
    document.getElementById("resetPlanBtn").addEventListener("click", () => {
        const modal = document.getElementById("resetModal");
        modal.style.display = "block";

        document.getElementById("confirmReset").onclick = function() {
            resetTimetable();
            modal.style.display = "none";
        };

        document.getElementById("cancelReset").onclick = function() {
            modal.style.display = "none";
        };

        document.querySelectorAll(".close").forEach(closeBtn => {
            closeBtn.onclick = function() {
                modal.style.display = "none";
            };
        });
    });

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