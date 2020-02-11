import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const checkLogin = (result) => ({
    type: constants.LOGIN,
    result
})


export const logout = () => ({
    type: constants.LOGOUT,
    result: false

});

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/user.json?account=' + account + '&password=' + password).then((res) => {
            const result = res.data.data;
            if (result) {
                dispatch(checkLogin(result))
            } else {
                alert('login failed');
            }
        })
    }
}