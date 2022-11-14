import "./styles.css"
import addProject from "./add-project"
import projectFactory from "./projects"
import createToDo from "./todos"
import todoObj from "./todo-obj"

function main() {
    const addProjectBtn = document.querySelector(".add-project")
    const createToDoBtn = document.querySelector(".create-todo")

    const projectList = []

    addProjectBtn.addEventListener("click", (e) => {
        const projectInput = document.querySelector("input")
        let name = projectInput.value

        if (name !== "") {
            addProject()
            let newProject = projectFactory(name, "12-10-2022")
            projectList.push(newProject, "24")
        } else {
            return;
        }
    })

    createToDoBtn.addEventListener("click", (e) => {
        const toDoInfoBox = document.querySelector(".todo-info")

        let none = toDoInfoBox.style.display = "flex"
        if (none !== "flex") {
            none = "flex"
        }

        const todoInput = document.querySelector("#todo-input")
        let TodoValue = todoInput.value
        const dateInput = document.querySelector("#date-input")
        let dataValue = dateInput.value

        let newToDo = todoObj(TodoValue, dataValue)
        const header = document.querySelector(".header-title")
        let value = header.textContent
        for (let i = 0; i < projectList.length; i++) {
            let project = projectList[i]["name"]
            if (TodoValue === "") {
                return;
            } else if (project === value) {
                projectList[i]["todo"].push(newToDo)
                toDoInfoBox.style.display = "none"
                console.log(projectList[i]["todo"])
            }
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

