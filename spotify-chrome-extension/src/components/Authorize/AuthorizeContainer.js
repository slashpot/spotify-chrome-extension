import { connect } from 'react-redux';
import { setRefreshToken } from '../../actions';
import Authorize from './Authorize';

export default connect(
    (state)=>({}),
    (dispatch) => ({
        onSetRefreshToken: (token) => (
            dispatch(setRefreshToken({token: token}))
        )
    })
)(Authorize);
