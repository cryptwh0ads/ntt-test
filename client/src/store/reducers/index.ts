import { GetMoviesAction,  GetMoviesActionType} from "../actionTypes/get-list-movies"
import { GetMovieDetailsAction, GetMovieDetailsActionType } from "../actionTypes/get-movie-details"
import { SearchMoviesAction, SearchMoviesActionType } from "../actionTypes/search-movies"
const initialState: MovieState = {
    error: null,
    loading: false,
    movies: []
}

export const movieReducer = (state: MovieState = initialState, action: GetMoviesAction | GetMovieDetailsAction | SearchMoviesAction):MovieState => {

    switch(action.type) {
        case GetMoviesActionType.GET_MOVIES_PENDING:
            return {
                loading: true
            }
        case GetMoviesActionType.GET_MOVIES_SUCCESS:
            return {
                loading: false,
                movies: action.payload
            }
        case GetMoviesActionType.GET_MOVIES_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case GetMovieDetailsActionType.GET_MOVIE_DETAILS_PENDING:
            return {
                loading: true
            }
        case GetMovieDetailsActionType.GET_MOVIE_DETAILS_SUCCESS:
            return {
                loading: false,
                movie: action.payload
            }
        case GetMovieDetailsActionType.GET_MOVIE_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case SearchMoviesActionType.SEARCH_MOVIES_PENDING:
            return {
                loading: true
            }
        case SearchMoviesActionType.SEARCH_MOVIES_SUCCESS:
            return {
                loading: false,
                movies: action.payload
            }
        case SearchMoviesActionType.SEARCH_MOVIES_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}