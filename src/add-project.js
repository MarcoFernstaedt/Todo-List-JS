function addProject() {
    const input = document.querySelector("input")

    const projectList = document.querySelector(".project-list")

    const newProject = document.createElement("li")
    newProject.textContent = input.value;
    projectList.appendChild(newProject)

    input.value = ""
}

export default addProject;