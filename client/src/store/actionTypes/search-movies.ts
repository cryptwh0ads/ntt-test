export enum SearchMoviesActionType {
    SEARCH_MOVIES_PENDING = 'SEARCH_MOVIES_PENDING',
    SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS',
    SEARCH_MOVIES_FAIL = 'SEARCH_MOVIES_FAIL'
}

interface actionPending {
    type: SearchMoviesActionType.SEARCH_MOVIES_PENDING;
}

interface actionSuccess {
    type: SearchMoviesActionType.SEARCH_MOVIES_SUCCESS;
    payload: IMovie[];
}

interface actionFail {
    type: SearchMoviesActionType.SEARCH_MOVIES_FAIL;
    payload: string ;
}

export type SearchMoviesAction = actionPending | actionSuccess | actionFail;