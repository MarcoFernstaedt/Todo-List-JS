function addProject() {
    const projects = document.getElementById("projects")

    const header = document.querySelector(".header-title")

    const projectList = document.createElement("ul")

    let projectName = prompt("What is the name of this. Project?")

    const newProject = document.createElement("li")
    newProject.textContent = `${projectName}`
    projectList.appendChild(newProject)

    newProject.addEventListener("click", () => {
        header.textContent = `${projectName}`
    })

    projects.appendChild(projectList)
}

export default addProject;