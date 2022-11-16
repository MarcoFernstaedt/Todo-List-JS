import { projectList } from "./index"

function findObj(objName) {
    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i]["name"] === objName) {
            return projectList[i]
        }
    }
}

export default findObj