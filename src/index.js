import "./styles.css"
import addProject from "./add-project"
import projectFactory from "./projects"
import createToDo from "./todos"

function main() {
    const addProjectBtn = document.querySelector(".add-project")
    const createToDoBtn = document.querySelector(".create-todo")

    addProjectBtn.addEventListener("click", addProject)
    createToDoBtn.addEventListener("click", (e) => {
        const toDoInfoBox = document.querySelector(".todo-info")

        let none = toDoInfoBox.style.display = "flex"
        if (none !== "flex") {
            none = "flex"
        }
        createToDo()
    })
}

main()

// date formating 
// npm install date-fns --save
// https://github.com/date-fns/date-fns/blob/main/docs/gettingStarted.md

// WEB browser storage API
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
