import { FETCH_MOVIE_DETAILS, FETCH_MOVIE_DETAILS_FAIL, FETCH_MOVIE_DETAILS_SUCCESS } from "../types"


const defaultState = () =>({
    isLoading: false,
    data : {},
    error : null
})

const fetchMovieDetails = (state,action) =>{
    if(state === undefined){
        return defaultState()
    }
    switch(action.type){
        case FETCH_MOVIE_DETAILS:
            return{
                isLoading: true,
                data : {},
                error : null
            }
        case FETCH_MOVIE_DETAILS_SUCCESS:
            return{
                isLoading:false,
                data : action.payload,
                error: null
            }
        case FETCH_MOVIE_DETAILS_FAIL:
            return{
                isLoading:false,
                data : {},
                error: action.error
            }
        default:
            return state
    }
}

export default fetchMovieDetails