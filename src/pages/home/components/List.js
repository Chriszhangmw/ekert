import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    ListItem, ListInfo, LoadMore
} from '../style';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends Component {

    render() {
        const { page, viewMore } = this.props;
        return (
            <div>
                {
                    this.props.list.map((item, index) => {
                        return (
                            <Link key={index} to={'/detail/' + item.get('id')}>
                                <ListItem >
                                    <img
                                        className='pic'
                                        src={item.get('imgUrl2')}
                                        alt=''
                                    />
                                    <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='desc'>{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => viewMore(page)}>
                    More Goods
            </LoadMore>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    list: state.get('home').get('articalList'),
    page: state.get('home').get('articlPage')
});

const mapDispatch = (dispatch) => ({
    viewMore(page) {
        dispatch(actionCreators.viewMore(page))
    }
});

export default connect(mapStateToProps, mapDispatch)(List);