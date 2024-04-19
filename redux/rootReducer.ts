import { combineReducers } from "redux";

// import slices
import userReducer from "./slices/mainSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  user: persistReducer(persistConfig, userReducer),
});

export default rootReducer;
