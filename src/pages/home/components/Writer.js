import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper } from '../style';

class Writer extends Component {
    render() {
        return (
            <WriterWrapper>
                {
                    this.props.list.map((item) => {

                    })
                }
            </WriterWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.get('home').get('writerList')
});


export default connect(mapStateToProps, null)(Writer);
