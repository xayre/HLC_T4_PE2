function getRandomBotMessage () {
    const messages = [
        "Creo que no.",
        "¡Totalmente!",
        "Eso suena interesante.",
        "No estoy seguro de entender, ¿puedes explicar más?",
        "¡Qué genial!",
        "Hmm, déjame pensar...",
        "¡Por supuesto!",
        "No sé, pero suena divertido.",
        "¿Puedes decirme más?",
        "Eso es un misterio para mí.",
        "¡Me encanta hablar contigo!"]

    return messages[Math.floor(Math.random() * messages.length)];
}

function showTabById(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.classList.toggle('active', tab.id === tabId);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.menu button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const tabId = button.id.replace('btn', 'tab');
        showTabById(tabId);
      });
    });
  });

  function changeTheme(theme) {
    const body = document.body;
    const header = document.querySelector("header");
    const button = document.button;

    body.setAttribute("data-theme", theme);
    header.setAttribute("data-theme", theme);
    button.setAttribute("data-theme", theme);
}

function addNote() {
    const noteInput = document.getElementById("note-input");
    const notesContainer = document.getElementById("notes-container");
    const noNotesMessage = document.getElementById("no-notes");

    const noteText = noteInput.value.trim();

    if (noteText === "") {
        alert("Por favor, escribe un mensaje antes de enviar.");
        return;
    }

    const note = document.createElement("div");
    note.className = "note";
    note.innerHTML = `
        <span>${noteText}</span>
        <button class="delete-note" onclick="deleteNote(this)">Borrar</button>
    `;

    notesContainer.appendChild(note);

    noteInput.value = "";
    noNotesMessage.style.display = "none";
}

function deleteNote(button) {
    const note = button.parentElement;
    note.remove();

    const notesContainer = document.getElementById("notes-container");

    if (notesContainer.children.length === 0) {
        document.getElementById("no-notes").style.display = "block";
    }
}

function clearAllNotes() {
    if (confirm("¿Estás seguro de que deseas borrar todos los mensajes?")) {
        const notesContainer = document.getElementById("notes-container");
        notesContainer.innerHTML = '<p id="no-notes" style="font-style: italic; color: #555;">Todavía no hay notas</p>';
    }
}