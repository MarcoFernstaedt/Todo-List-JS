import findObj from "./findObj"
import createToDo from "./todos"

function addProject() {
    const input = document.querySelector("input")
    let projectName = input.value

    const header = document.querySelector(".header-title")
    header.textContent = projectName

    const projectList = document.querySelector(".project-list")

    const newProject = document.createElement("li")
    newProject.textContent = projectName;
    newProject.addEventListener("click", (e) => {
        const header = document.querySelector(".header-title")
        header.textContent = newProject.textContent

        const tBody = document.querySelector("tbody")
        tBody.textContent = ""

        let proj = findObj(newProject.textContent)
        for (let i = 0; i < proj["todo"].length; i++) {
            let todos = proj["todo"][i]["todo"]
            let date = proj["todo"][i]["dueDate"]
            createToDo(todos, date)
        }
    })

    projectList.appendChild(newProject)

    input.value = ""
}

export default addProject;