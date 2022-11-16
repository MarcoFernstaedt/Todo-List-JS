import "./styles.css"
import addProject from "./add-project"
import projectFactory from "./projects"
import createToDo from "./todos"
import todoObj from "./todo-obj"
import findObj from "./findObj"

export const projectList = []

function main() {
    const header = document.querySelector(".header-title")
    const addProjectBtn = document.querySelector(".add-project")
    const createToDoBtn = document.querySelector(".create-todo")
    const listItems = document.querySelectorAll("li")
    listItems.forEach(listItem => {
        listItem.addEventListener("click", (e) => {
            header.textContent = listItem.textContent
        })
    });

    addProjectBtn.addEventListener("click", (e) => {
        const projectInput = document.querySelector("input")
        let name = projectInput.value

        if (name !== "") {
            addProject()
            let newProject = projectFactory(name, "12-10-2022")
            projectList.push(newProject)
        } else {
            return;
        }
    })

    createToDoBtn.addEventListener("click", (e) => {
        const toDoInfoBox = document.querySelector(".todo-info")

        toDoInfoBox.style.display = "flex"

        const todoInput = document.querySelector("#todo-input")
        let todoValue = todoInput.value
        const dateInput = document.querySelector("#date-input")
        let dataValue = dateInput.value

        todoInput.value = ""
        dateInput.value = ""

        let newToDo = todoObj(todoValue, dataValue)
        let value = header.textContent
        for (let i = 0; i < projectList.length; i++) {
            let project = projectList[i]["name"]
            if (todoValue === "") {
                return;
            } else if (project === value) {
                projectList[i]["todo"].push(newToDo)
                toDoInfoBox.style.display = "none"

                const tBody = document.querySelector("tbody")
                tBody.textContent = ""
                let obj = findObj(project)
                for (let i = 0; i < obj["todo"].length; i++) {
                    let todos = obj["todo"][i]["todo"]
                    let date = obj["todo"][i]["dueDate"]
                    createToDo(todos, date)
                }
            }
        }
    })
}

main()

// date formating 
// npm install date-fns --save
// https://github.com/date-fns/date-fns/blob/main/docs/gettingStarted.md

// WEB browser storage API
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API

