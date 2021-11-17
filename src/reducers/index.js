import { combineReducers } from "redux";
import fetchMovieDetails from "./fetchMovieDetailsReducer";
import fetchMovieReducer from "./fetchMovieReducer";

// import countReducer from "./countReducer";
// import todoReducer from "./todoReducer";
// import removeReducer from './removeReducer';
// import userReducer from "./userReducer";

// const rootReducer = combineReducers({
//     fetchMovie : fetchMovieReducer
// })

// export default rootReducer

export default combineReducers({
    movie : fetchMovieReducer,
    movieDetails :fetchMovieDetails
})

