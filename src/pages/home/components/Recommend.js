import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends Component {
    render() {
        return (
            <RecommendWrapper>
                {
                    this.props.list.map((item) => {
                        return <RecommendItem
                            imgUrl={item.get('url')}
                            key={item.get('id')}>
                        </RecommendItem>
                    })
                }
            </RecommendWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.get('home').get('recommendList')
});


export default connect(mapStateToProps, null)(Recommend);
