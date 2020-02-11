import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store';


class Login extends PureComponent {
    render() {
        const { loginSatus } = this.props;
        if (!loginSatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" ref={(input) => { this.account = input }}></Input>
                        <Input placeholder="密码" type='password' ref={(input) => { this.password = input }}></Input>

                        <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to='/'></Redirect>
        }

    }

}


const mapState = (state) => ({
    loginSatus: state.getIn(['login', 'login'])
});



const mapDispatch = (dispatch) => ({
    login(accountEle, passwordEle) {
        // console.log(accountEle.value, passwordEle);
        dispatch(actionCreators.login(accountEle.value, passwordEle.value));
    }

});

export default connect(mapState, mapDispatch)(Login);