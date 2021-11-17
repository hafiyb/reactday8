import { FETCH_MOVIE, FETCH_MOVIE_FAIL, FETCH_MOVIE_SUCCESS } from "../types"

const defaultState = () =>({
    isLoading:false,
    data: {},
    error:null
})

const fetchMovieReducer = (state, action) =>{
    if (state == undefined){
        return defaultState()
    }
    switch(action.type){
        case FETCH_MOVIE:
            return {
                isLoading: true,
                data: {},
                error: null
            }
        case FETCH_MOVIE_SUCCESS:
            return {
                isLoading: false,
                data: action.payload,
                error: null
            }
        case FETCH_MOVIE_FAIL:
            return {
                isLoading: false,
                data: {},
                error: action.error
            }
        default:
            return state
    }
}

export default fetchMovieReducer