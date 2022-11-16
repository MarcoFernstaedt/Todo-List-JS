function createToDo(todoValue, dateValue) {
    const tBody = document.querySelector("tbody")
    const newTableData = document.createElement('tr')
    const todo = document.createElement("td")
    todo.textContent = todoValue
    newTableData.appendChild(todo)

    const date = document.createElement("td")
    date.textContent = dateValue
    newTableData.appendChild(date)

    tBody.appendChild(newTableData)

}

export default createToDo 