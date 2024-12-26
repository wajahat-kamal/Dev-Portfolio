const addBox = document.querySelector(".add-box");
const popupBox = document.querySelector(".popup-box");
const popupTitle = document.querySelector("header p");
const input = document.querySelector("#input");
const description = document.querySelector("#description");
const closeIcon = document.querySelector("header i");
const addBtn = document.querySelector("form button");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "Jun",
  "July",
  "August",
  "September",
  "October",
  "Novber",
  "Decmber",
];

const notes = JSON.parse(localStorage.getItem("notes") || "[]");

addBox.addEventListener("click", () => {
  input.focus();
  popupBox.classList.add("show");
});

let isUpdate = false,
  updateId;

closeIcon.addEventListener("click", () => {
  isUpdate = false;
  input.value = "";
  description.value = "";
  addBtn.innerText = "Add Note";
  popupTitle.innerText = "Add a new Note";
  popupBox.classList.remove("show");
});

function showNotes() {
  document.querySelectorAll(".note").forEach((note) => note.remove());
  notes.forEach((note, index) => {
    let liTag = `
          <li class="note">
            <div class="details">
             <p class="title">${note.title}</p>
             <span class="description">${note.description}</span>
            </div>

           <div class="bottom-content">
             <span>${note.date}</span>
             <div class="setting">
             <i onclick="showMenu(this)" class="uil uil-ellipsis-h   dot"></i>
             <ul class="menu">
               <li onclick="updateNote(${index}, '${note.title}', '${note.description}')"><i onclick="editNote()" class="uil uil-edit"></i>Edit</li>
               <li onclick="deleteNote(${index})"><i class="uil uil-trash"></i>Delete</li>
             </ul>
          </div>
        </div>

      </li>
        `;

    addBox.insertAdjacentHTML("afterend", liTag);
  });
}
showNotes();

function showMenu(elem) {
  elem.parentElement.classList.add("show");

  document.addEventListener("click", (e) => {
    if (e.target.tagName != "I" || e.target !== elem) {
      elem.parentElement.classList.remove("show");
    }
  });
}

function deleteNote(noteId) {
  let confermDel = confirm("Are you sure you want to delete this note?");
  if (!confermDel) return;
  notes.splice(noteId, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}

function updateNote(noteId, title, desc) {
  isUpdate = true;
  updateId = noteId;
  addBox.click();
  input.value = title;
  description.value = desc;
  addBtn.innerText = "Update Note";
  popupTitle.innerText = "Update a Note";
  console.log(noteId, title, desc);
}

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let titleTag = input.value;
  let descTag = description.value;

  if (titleTag || descTag) {
    let dateObj = new Date();
    let month = months[dateObj.getMonth()];
    let day = dateObj.getDate();
    let year = dateObj.getFullYear();

    let note = {
      title: titleTag,
      description: descTag,
      date: `${month} ${day}, ${year}`,
    };

    if (!isUpdate) {
      notes.push(note);
    } else {
      isUpdate = false;
      notes[updateId] = note;
    }

    localStorage.setItem("notes", JSON.stringify(notes));

    closeIcon.click();
    showNotes();
  }
});
