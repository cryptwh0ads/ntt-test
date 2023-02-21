export enum GetMoviesActionType {
    GET_MOVIES_PENDING = 'GET_MOVIES_PENDING',
    GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS',
    GET_MOVIES_FAIL = 'GET_MOVIES_FAIL'
}

interface actionPending {
    type: GetMoviesActionType.GET_MOVIES_PENDING;
}

interface actionSuccess {
    type: GetMoviesActionType.GET_MOVIES_SUCCESS;
    payload: IMovie[];
}

interface actionFail {
    type: GetMoviesActionType.GET_MOVIES_FAIL;
    payload: string ;
}

export type GetMoviesAction = actionPending | actionSuccess | actionFail;