function projectFactory(name, dueDate) {
    let Project = {
        name,
        todo: [],
        dueDate,
        addDescription(projectDescription) {
            return this.description = projectDescription
        },
        addTodo(todo) {
            this.todo.push(todo)
        }
    }

    return Project
}

export default projectFactory