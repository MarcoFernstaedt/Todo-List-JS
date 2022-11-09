import "./styles.css"
import addProject from "./add-project"

function main() {
    const addProjectBtn = document.querySelector(".add-project")

    addProjectBtn.addEventListener("click", () => {
        const form = document.querySelector("form")
        form.style.display = "flex"
        addProject
    })
}

main()

// date formating 
// npm install date-fns --save
// https://github.com/date-fns/date-fns/blob/main/docs/gettingStarted.md

// WEB browser storage API
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
