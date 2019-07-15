import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth.js';

export class Login extends React.Component {
  render() {
    const { startLogin } = this.props;
    return (
      <div>
        <button
          onClick={startLogin}
        >
          Login
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(Login);
