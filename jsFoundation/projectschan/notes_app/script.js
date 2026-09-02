let note = document.getElementById("note");
let addNote = document.getElementById("addNote");
let display = document.getElementById("display");

let savedNotes = localStorage.getItem("notes");

let notes = savedNotes ? JSON.parse(savedNotes) : [];

function displayNotes() {
  display.innerText = "";

  for (let i = 0; i < notes.length; i++)  {
   display.innerHTML +=
     "<p>" +
     notes[i] +
     " <button onclick='deleteNote(" +
     i +
     ")'>Delete</button></p>";
  }
}

function deleteNote(index) {
  notes.splice(index, 1);

  localStorage.setItem("notes", JSON.stringify(notes));

  displayNotes();
}

addNote.addEventListener("click", function () {
  let noteText = note.value;

  if (noteText === "") {
    return;
  }

  notes.push(noteText);

  localStorage.setItem("notes", JSON.stringify(notes));

  displayNotes();

  note.value = "";
});

displayNotes();
