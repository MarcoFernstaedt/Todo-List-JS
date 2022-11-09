function addProject() {
    const projects = document.getElementById("projects")
    const header = document.querySelector(".header-title")

    const projectList = document.createElement("ul")

    const projectName = document.getElementById("project-name")

    const newProject = document.createElement("li")
    newProject.textContent = projectName.value
    projectList.appendChild(newProject)

    newProject.addEventListener("click", () => {
        // header.textContent = `${name}`
        console.log("works")
    })

    const form = document.querySelector("form")
    form.style.display = "none"

    projects.appendChild(projectList)
}

export default addProject;