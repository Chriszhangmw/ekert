import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';



class Write extends PureComponent {
    render() {
        const { loginSatus } = this.props;
        if (loginSatus) {
            return (
                <div>
                    <button>Run Reports</button>
                    <button>Process Invoice</button>
                    <button>Process Order</button>
                    <button>Check Stock</button>
                    <button>View Analytics</button>
                    <button>Restock</button>
                </div>

            )
        } else {
            return <Redirect to='/login'></Redirect>
        }

    }

}


const mapState = (state) => ({
    loginSatus: state.getIn(['login', 'login'])
});



export default connect(mapState, null)(Write);