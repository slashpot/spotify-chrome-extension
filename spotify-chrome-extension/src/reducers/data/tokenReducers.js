import { handleActions } from 'redux-actions';
import { tokenState } from '../../helper/models';

const tokenReducers = handleActions({
    SET_REFRESH_TOKEN: (state, { payload }) => (
        state.set('refresh_token', payload.token)
    )
},tokenState);

export default tokenReducers;
