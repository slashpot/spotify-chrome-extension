import { createAction } from 'redux-actions'
import { actionType } from '../helper/constant';

export const setRefreshToken = createAction(actionType.SET_REFRESH_TOKEN);
