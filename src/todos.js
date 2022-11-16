import todoObj from "./todo-obj"
import { projectList } from "./index"

function findProj(projectName) {
    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i]["name"] === projectName) {
            return projectList[i]
        }
    }
}

function createToDo(todoValue, dateValue) {
    const table = document.querySelector("table")
    const newTableData = document.createElement('tr')
    const todo = document.createElement("td")
    todo.textContent = todoValue
    newTableData.appendChild(todo)

    const date = document.createElement("td")
    date.textContent = dateValue
    newTableData.appendChild(date)

    table.appendChild(newTableData)

}

export default createToDo 