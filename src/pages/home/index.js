import React, { PureComponent } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';

//PureComponent相比Component，当数据变化的时候不至于更新所有组件的render 

class Home extends PureComponent {



    handleTop() {
        window.scrollTo(0, 0);
    }
    render() {
        const { showScro } = this.props;
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img
                        alt=''
                        className='banner-img'
                        src="//upload-images.jianshu.io/upload_images/14705879-0539726db06813f9.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/638/format/webp" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {
                    showScro ? <BackTop onClick={this.handleTop}>
                        回到顶部
                </BackTop> : null
                }

            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomedata();
        this.bindEvents();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScroll)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScroll)
    }
}



const mapStateToProps = (state) => ({
    showScro: state.get('home').get('showScro')
});

const mapDispatch = (dispatch) => ({
    changeHomedata() {
        const actuon = actionCreators.getHomeInfo();
        dispatch(actuon);
    },
    changeScroll() {
        if (document.documentElement.scrollTop > 100) {
            const action = actionCreators.changeScrollL(true);
            dispatch(action);
        } else {
            const action = actionCreators.changeScrollL(false);
            dispatch(action);
        }

    }
})
export default connect(mapStateToProps, mapDispatch)(Home);