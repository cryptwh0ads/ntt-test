import { Dispatch } from "react";
import { api } from "../../services";
import { SearchMoviesAction, SearchMoviesActionType } from "../actionTypes/search-movies";

export const searchMoviesByTitle = (title: string) => {
    return async (dispatch: Dispatch<SearchMoviesAction>) => {
        dispatch({
            type: SearchMoviesActionType.SEARCH_MOVIES_PENDING
        });

        try {
            const { data } = await api.get(`/v1/movies/${title}`);

            dispatch({
                type: SearchMoviesActionType.SEARCH_MOVIES_SUCCESS,
                payload: data.data
            });

        } catch(err: any) {
            dispatch({
                type: SearchMoviesActionType.SEARCH_MOVIES_FAIL,
                payload: err.message
            });
        }
    }
}