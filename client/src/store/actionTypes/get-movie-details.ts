export enum GetMovieDetailsActionType {
    GET_MOVIE_DETAILS_PENDING = 'GET_MOVIE_DETAILS_PENDING',
    GET_MOVIE_DETAILS_SUCCESS = 'GET_MOVIE_DETAILS_SUCCESS',
    GET_MOVIE_DETAILS_FAIL = 'GET_MOVIE_DETAILS_FAIL'
}

interface actionPending {
    type: GetMovieDetailsActionType.GET_MOVIE_DETAILS_PENDING;
}

interface actionSuccess {
    type: GetMovieDetailsActionType.GET_MOVIE_DETAILS_SUCCESS;
    payload: IMovie;
}

interface actionFail {
    type: GetMovieDetailsActionType.GET_MOVIE_DETAILS_FAIL;
    payload: string ;
}

export type GetMovieDetailsAction = actionPending | actionSuccess | actionFail;