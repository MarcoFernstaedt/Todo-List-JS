function projectFactory(todo, dueDates) {
    let project = {
        todo: todo,
        dueDates: dueDates,
    }

    return { todo, dueDates }
}

export default projectFactory