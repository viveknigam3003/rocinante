import { combineReducers } from "redux";
import directoryReducer from "./directoryReducer";
import metadataReducer from "./metadataReducer";

const rootReducer = combineReducers({
    directory: directoryReducer,
    metadata: metadataReducer
})

export default rootReducer;
