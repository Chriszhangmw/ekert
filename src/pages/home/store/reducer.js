
import { fromJS } from 'immutable';
import * as constants from './constants';


const defaultState = fromJS({
    topicList: [],
    articalList: [],
    recommendList: [],
    writerList: [],
    articlPage: 1,
    showScro: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME:
            return state.merge({
                topicList: fromJS(action.topicList),
                articalList: fromJS(action.articalList),
                recommendList: fromJS(action.recommendList),
                writerList: fromJS(action.writerList)
            });
        case constants.MORE_LIST:
            return state.merge({
                articalList: state.get('articalList').concat(action.list),
                articlPage: action.page
            });
        case constants.CHANGE_SCROLL:
            return state.set("showScro", action.showScro);

        default:
            return state;

    }


}