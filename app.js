//selectors
let inputNote = document.querySelector("input");
let buttonAddNote = document.querySelector("button");
let listNotes = document.querySelector(".todo-list");
//functions
let addNote = () => {
    let pNote = document.createElement("p");
    pNote.innerText = inputNote.value;
    let li = document.createElement("il");
    li.appendChild(pNote);
    listNotes.appendChild(li);
}
//eventlisteners
buttonAddNote.addEventListener("click", addNote);