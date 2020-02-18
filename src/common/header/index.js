import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators as loginActionCreators } from '../../pages/login/store';


import { actionCreators } from './store';


import {
    SearchWrapper,
    Button,
    Addition,
    NavSearch,
    NavItem,
    Nav,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    HeaderWrapper,
    Logo
} from './style';
import { Link } from 'react-router-dom';



class Header extends Component {

    getSearchArea = () => {
        const { focused, list, page, totalPage, mouseIn, mouseEnter, mouseLeave, changeHuan } = this.props;

        const pageList = []
        const jsList = list.toJS();
        if (jsList.length) {
            for (let i = (page - 1) * 5; i < page * 5; i++) {
                pageList.push(
                    <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
                )
            }
        }

        if (focused || mouseIn) {
            // console.log(this.props.list + 'jjjjjjjj')
            return (
                <SearchInfo onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                    <SearchInfoTitle>
                        Recommends
                    </SearchInfoTitle>
                    <SearchInfoSwitch onClick={() => changeHuan(page, totalPage)}>
                        Change More
                    </SearchInfoSwitch>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            );

        } else {
            return null;
        }
    }
    render() {
        // const { focused, list } = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>

                <Nav>
                    <NavItem className='left active'>Home</NavItem>
                    <NavItem className='left'>Download APP</NavItem>
                    {
                        this.props.login ? <NavItem className='right' onClick={this.props.logout}>LogOut</NavItem> :
                            <Link to='/login'><NavItem className='right'>LogIn</NavItem></Link>

                    }
                    <SearchWrapper>
                        <CSSTransition timeout={200} in={this.props.focused} classNames="slide">
                            <NavSearch
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={() => this.props.handleInputFocus(this.props.list)}
                                onBlur={this.props.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>Search</i>
                        {this.getSearchArea()}
                    </SearchWrapper>
                </Nav>

                <Addition>
                    <Link to='/write'>
                        <Button className='writting'>Admin</Button>
                    </Link>

                    <Button className='reg'>Register</Button>
                </Addition>

            </HeaderWrapper>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        list: state.get('header').get('list'),
        mouseIn: state.get('header').get('mouseIn'),
        page: state.get('header').get('page'),
        totalPage: state.get('header').get('totalPage'),
        login: state.get('login').get('login')
    }

}
const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            const action = actionCreators.searchFocus();
            if (list.size === 0) {
                dispatch(actionCreators.getList());
            }
            dispatch(action);

        },
        handleInputBlur() {
            const action = actionCreators.searchBler();
            dispatch(action);

        },
        mouseEnter() {
            const action = actionCreators.mouseEnter();
            dispatch(action);
        },
        mouseLeave() {
            const action = actionCreators.mouseLeave();
            dispatch(action);
        },
        logout() {
            dispatch(loginActionCreators.logout());

        },
        changeHuan(page, totalPage) {
            // dispatch(action);
            if (page < totalPage) {
                const action = actionCreators.changeHuan(page + 1);
                dispatch(action);
            } else {
                const action = actionCreators.changeHuan(1);
                dispatch(action);
            }

        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);