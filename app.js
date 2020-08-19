//selectors
let notesList = document.querySelector(".todo-list");
let addNoteButton = document.querySelector(".add-note-button");
let inputNote = document.querySelector(".input-note");
//functions
let addNote = (e) => {
    //prevent form from submitting!!!
    event.preventDefault();
    //prevent form from submitting!!!
    let li = document.createElement("li");
    li.innerText = inputNote.value;
    li.classList.add("note");
    notesList.appendChild(li);
}
//eventlisteners
addNoteButton.addEventListener("click", addNote);