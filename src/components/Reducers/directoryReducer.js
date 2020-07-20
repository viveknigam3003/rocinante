import { currentUserMountPoint } from "../Utils/Files";

const currentDirectory = currentUserMountPoint();

function directoryReducer(state = currentDirectory, action) {
  switch (action.type) {
    case "CD":
      const newDir = state + "/" + action.folder;
      return newDir;
    default:
      return state;
  }
}

export default directoryReducer;
