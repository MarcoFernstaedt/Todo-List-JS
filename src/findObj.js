import { projectList, upcomingFolders } from "./index"

function findObj(objName) {
    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i]["name"] === objName) {
            return projectList[i]
        }
    }

    for (let i = 0; i < upcomingFolders.length; i++) {
        if (upcomingFolders[i]["name"] === objName) {
            return upcomingFolders[i]
        }
    }
}

export default findObj