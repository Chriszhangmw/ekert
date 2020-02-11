
import { fromJS } from 'immutable';
import * as constants from './constants';


const defaultState = fromJS({
    title: '你好呀',
    content: '<p><b>我们常常说，在真爱面前，年龄不是问题</b>。去年一部韩国电视剧《经常请吃饭的漂亮姐姐》掀起了一股崇尚姐弟恋的风尚</p>'
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content
            });

        default:
            return state;

    }


}