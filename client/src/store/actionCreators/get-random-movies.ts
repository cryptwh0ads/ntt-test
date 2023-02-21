import { Dispatch } from "react";
import { api } from "../../services";
import { GetMoviesAction, GetMoviesActionType } from "../actionTypes/get-list-movies";

// some mocked suggested movie titles
const movieTitles: Array<string> = [
    'furious',
    'hack',
    'action',
    'developer',
    'programming'
]


export const getRandomMoviesList = () => {
    return async (dispatch: Dispatch<GetMoviesAction>) => {
        dispatch({
            type: GetMoviesActionType.GET_MOVIES_PENDING
        });

        try {
            const { data } = await api.get(`/v1/movies/${movieTitles[Math.floor(Math.random()*movieTitles.length)]}`);

            dispatch({
                type: GetMoviesActionType.GET_MOVIES_SUCCESS,
                payload: data.data
            });

        } catch(err: any) {
            dispatch({
                type: GetMoviesActionType.GET_MOVIES_FAIL,
                payload: err.message
            });
        }
    }
}