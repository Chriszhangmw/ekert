
import { combineReducers } from 'redux-immutable';
//combineReducers讲多个store统一管理，让不同组件之间可以保持相互独立，显得更有层次性
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as loginReducer } from '../pages/login/store';
//redux-immutable


const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
});

export default reducer;