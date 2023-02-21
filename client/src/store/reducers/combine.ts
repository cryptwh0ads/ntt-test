import { combineReducers } from 'redux';
import { movieReducer } from './index';

const reducers = combineReducers({
movie: movieReducer
});

export default reducers;
//This RootState is required to use useSelector later on 
export type RootState = ReturnType<typeof reducers>;
