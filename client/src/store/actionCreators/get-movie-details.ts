import { Dispatch } from "react";
import { api } from "../../services";
import { GetMovieDetailsAction, GetMovieDetailsActionType } from "../actionTypes/get-movie-details";

export const getMovieDetails = (id: string) => {
    return async (dispatch: Dispatch<GetMovieDetailsAction>) => {
        dispatch({
            type: GetMovieDetailsActionType.GET_MOVIE_DETAILS_PENDING
        });

        try {
            const { data } = await api.get(`/v1/movies/details/${id}`);

            dispatch({
                type: GetMovieDetailsActionType.GET_MOVIE_DETAILS_SUCCESS,
                payload: data
            });

        } catch(err: any) {
            dispatch({
                type: GetMovieDetailsActionType.GET_MOVIE_DETAILS_FAIL,
                payload: err.message
            });
        }
    }
}