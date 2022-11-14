function addProject() {
    const input = document.querySelector("input")
    let projectName = input.value

    const header = document.querySelector(".header-title")
    header.textContent = projectName

    const projectList = document.querySelector(".project-list")

    const newProject = document.createElement("li")
    newProject.textContent = projectName;

    projectList.appendChild(newProject)

    input.value = ""
}

export default addProject;