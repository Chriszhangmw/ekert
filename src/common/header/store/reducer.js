import * as actionType from './constant';
import { fromJS } from 'immutable';


const defaultState = fromJS({
    focused: false,
    list: [],
    mouseIn: false,
    page: 1,
    totalPage: 1
});

export default (state = defaultState, action) => {
    if (action.type === actionType.SEARCH_FOCUS) {
        return state.set('focused', true);
    }
    if (action.type === actionType.SEARCH_BLUR) {
        return state.set('focused', false);
    }
    if (action.type === actionType.SEARCH_LIST) {
        return state.merge({
            list: action.data,
            totalPage: action.totalPage
        })
    }
    if (action.type === actionType.MOUSE_ENTER) {
        return state.set('mouseIn', true)
    }
    if (action.type === actionType.MOUSE_LEAVE) {
        return state.set('mouseIn', false)
    }
    if (action.type === actionType.CHANGE_HUAN) {
        return state.set('page', action.page)
    }
    return state;
}