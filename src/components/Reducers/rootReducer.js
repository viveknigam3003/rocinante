import { combineReducers } from "redux";
import directoryReducer from "./directoryReducer";
import metadataReducer from "./metadataReducer";
import loginReducer from "./loginReducer";
import statusReducer from "./statusReducer";

const rootReducer = combineReducers({
    directory: directoryReducer,
    metadata: metadataReducer,
    login: loginReducer,
    status: statusReducer
})

export default rootReducer;
