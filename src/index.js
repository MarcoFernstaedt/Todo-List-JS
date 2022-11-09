import "./styles.css"
import addProject from "./add-project"
import projectFactory from "./projects"

function main() {
    const addProjectBtn = document.querySelector(".add-project")
    const addTodoBtn = document.querySelector(".add-todo")
    // const x = projectFactory(["help"], [14])
    // console.table(x)

    addProjectBtn.addEventListener("click", addProject)

    addTodoBtn.addEventListener("click", (e) => {
        console.log("working")
    })
}

main()

// date formating 
// npm install date-fns --save
// https://github.com/date-fns/date-fns/blob/main/docs/gettingStarted.md

// WEB browser storage API
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
