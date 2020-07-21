import { getFileMetadata } from "../Utils/Metadata";

const fileMeta = {};

function metadataReducer(state = fileMeta, action) {
  switch (action.type) {
    case "GET_META":
      const newMetaState = getFileMetadata(action.file).then(res => console.log(res.data));
      return newMetaState;
    default:
      return state;
  }
}

export default metadataReducer;
