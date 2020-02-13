
import * as actionType from './constant';
import axios from 'axios';
import { fromJS } from 'immutable';

export const searchFocus = () => ({
    type: actionType.SEARCH_FOCUS
});

export const searchBler = () => ({
    type: actionType.SEARCH_BLUR
});

export const mouseEnter = () => ({
    type: actionType.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: actionType.MOUSE_LEAVE
})

export const changeHuan = (page) => ({
    type: actionType.CHANGE_HUAN,
    page
})

const getSearchList = (data) => ({
    type: actionType.SEARCH_LIST,
    data: fromJS(data),
    totalPage: Math.floor(data.length / 5)
})

//如果使用redux-thunk来处理异步请求，ajax请求一般放在actioncreator里面
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/searchlist.json').then((res) => {
            const data = res.data;
            dispatch(getSearchList(data.data));
        }).catch(() => {
            console.log("error");
        })
    }
};