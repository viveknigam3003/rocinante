const currentDirectory = "/home/vivek/Desktop"

function directoryReducer(state = currentDirectory, action) {
    switch(action.type){
        case "CD":
            console.log(state)
            const newDir = state + "/" + action.folder
            console.log(newDir)
            return newDir
        default:
           return state; 
    }
}

export default directoryReducer;
