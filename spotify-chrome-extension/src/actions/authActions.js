import { createAction } from 'redux-actions'
import { actionType } from '../helper/constant';

export const setRefreshToken = createAction(actionType.SET_REFRESH_TOKEN);
export const setAccessToken = createAction(actionType.SET_ACCESS_TOKEN);
