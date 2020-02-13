import * as actionType from './constant';
import { fromJS } from 'immutable';
//一般在改变store里的值的时候，不可能直接在上面操作，所以为了安全，引入fromJS，这样state里面
//的对象就是immutable了，比较安全


const defaultState = fromJS({
    focused: false,
    list: [],
    mouseIn: false,
    page: 1,
    totalPage: 1
});

export default (state = defaultState, action) => {
    //这里考虑换成switch-case结构
    if (action.type === actionType.SEARCH_FOCUS) {
        //会结合之前immutable得值喝现在得新得值，生成一个全新得immutable数值。
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
        //当需要变化多个state里的值的时候，merge可以同时操作多个，代码显得更简洁好看
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