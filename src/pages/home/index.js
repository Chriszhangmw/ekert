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
                        src="https://images-eu.ssl-images-amazon.com/images/G/02/UK-hq/2018/img/Prime/XCM_Manual_1121975_free_Shipping_3000x600_Prime_GW_DesktopHero_3000x600_jpg._CB485974826_.jpg" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {
                    showScro ? <BackTop onClick={this.handleTop}>
                        BackTop
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