//selectors
let notesList = document.querySelector(".todo-list");
let addNoteButton = document.querySelector(".add-note-button");
let inputNote = document.querySelector(".input-note");
let buttonCheck = document.querySelector(".button-check");
//functions
let addNote = (e) => {
    //prevent form from submitting!!!
    event.preventDefault();
    //prevent form from submitting!!!

    //adding note
    let li = document.createElement("li");
    li.classList.add("note")
    let noteText = document.createElement("span");
    noteText.innerText = inputNote.value;
    noteText.classList.add("note-span");
    li.appendChild(noteText);
    notesList.appendChild(li);
    inputNote.value = null;
    //adding note

    //adding check button
    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fas fa-check"></i>'
    checkButton.classList.add("button-check");
    li.appendChild(checkButton);
    //adding check button

    //adding trash button
    let trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("button-trash");
    li.appendChild(trashButton);
    //adding trash button

    //eventlisteners
    checkButton.addEventListener("click", checkNote);
    trashButton.addEventListener("click", deleteNote);
}

let checkNote = (e) => {
    console.log(e.target.parentElement);
    let li = e.target.parentElement;
    li.querySelector("span").classList.add("checked");
    li.classList.add("opacity");
}

let deleteNote = (e) => {
    let li = e.target.parentElement;
    li.classList.add("deleted");
    li.addEventListener("transitionend", (e) => {
        li.remove();
    });
}
//eventlisteners
addNoteButton.addEventListener("click", addNote);