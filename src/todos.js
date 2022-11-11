import todoObj from "./todo-obj"

function createToDo() {
    const todoInput = document.querySelector("#todo-input")
    let TodoValue = todoInput.value
    const dateInput = document.querySelector("#date-input")
    let dataValue = dateInput.value

    if (TodoValue === "" && dataValue === "" || TodoValue === "" ||
        dataValue === "") {
        return;
    }

    let newTodo = todoObj(TodoValue, dataValue)

    const table = document.querySelector("table")

    const newTableElem = document.createElement("tr")
    const newTodoData = document.createElement("td")
    newTodoData.textContent = newTodo["todo"]
    newTableElem.appendChild(newTodoData)
    const newDueDateData = document.createElement("td")
    newDueDateData.textContent = newTodo["dueDate"]
    newTableElem.appendChild(newDueDateData)

    table.appendChild(newTableElem)

}

export default createToDo