import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';


const changeHomedata = (result) => ({
    type: constants.CHANGE_HOME,
    topicList: result.topicList,
    articalList: result.articalList,
    recommendList: result.recommendList,
    writerList: result.writerList
})

const changeScrollLL = (show) => ({
    type: constants.CHANGE_SCROLL,
    showScro: show
})

const getviewMore = (moreList, newPage) => ({

    type: constants.MORE_LIST,
    list: fromJS(moreList),
    page: newPage
})

export const changeScrollL = (show) => {
    return (dispatch) => {
        dispatch(changeScrollLL(show))
    }
}

export const viewMore = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const moreList = res.data.data;
            const action = getviewMore(moreList, page + 1);
            dispatch(action);
        })
    }
}
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            // console.log(result);
            const action = changeHomedata(result);
            dispatch(action);
        })
    }
}
