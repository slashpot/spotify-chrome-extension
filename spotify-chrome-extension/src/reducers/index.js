import { combineReducers } from 'redux-immutable'
import token from './data/tokenReducers';

const rootReducer = combineReducers({
    token    
});

export default rootReducer;
