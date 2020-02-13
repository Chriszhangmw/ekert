import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DetailWrapper, Header, Content } from './style';
import { actionCreators } from './store'

class Detail extends Component {
    render() {
        const { title, content } = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{ __html: this.props.content }}></Content>
            </DetailWrapper>
        )
    }
    //为什么在componentDidMount中设置Ajax请求？这里和react的生命周期函数是有关的。react里从阶段来分，可以分出initial
    //mount，update，unmount，其中只有mount阶段的componentDidMount和componentWillMount两个生命周期函数在页面加载
    //的时候就执行一次，像shouldComponentUpdate,componentWillUpdate,componentDidUpdate这些生命周期函数在页面变化
    //或者点击操作之类的情况下都会变化，Ajax请求不适合放在这些生命周期函数中，毕竟大部分Ajax请求只需要执行一次即可
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}




const mapState = (state) => ({
    //从store中获取数据
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])

});

const mapDispatch = (dispatch) => ({
    //操作store中的数据
    getDetail(id) {
        dispatch(actionCreators.getDetail(id));
    }
});

export default connect(mapState, mapDispatch)(Detail);
//使用了redux来做数据管理，那么组件怎么和store里的数据交互，主要通过两个函数，一个是provider，provider只要在
//最外面的组件设置store，那么provider包含的所有组件都可以拿到数据了。另外一个函数就是connect，connect里面的
//两个函数，一个是mapState,一个是mapDispatch,前者用于子组件从store中拿取数据，后者用于提供子组件各种函数（也就是
//各种action操作）对store中的数据做修改