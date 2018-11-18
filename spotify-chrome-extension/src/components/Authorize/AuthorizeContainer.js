import { connect } from 'react-redux';
import { setRefreshToken, setAccessToken } from '../../actions';
import Authorize from './Authorize';

export default connect(
    (state) => ({}),
    (dispatch) => ({
        setRefreshToken: (token) => (
            dispatch(setRefreshToken({ token: token }))
        ),
        setAccessToken: (token) => {
            dispatch(setAccessToken({ token: token }))
        }
    })
)(Authorize);
