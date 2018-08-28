import React from 'react'
import {connect} from 'react-redux';
import { startLogin, startLoginFacebook} from '../actions/auth';

export const LoginPage = ({startLogin, startLoginFacebook}) => (

  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify App</h1>
      <p>Spend with control!</p>
      <div className="is-grouped">
        <p>Login with</p>
      <button className="button" onClick={startLogin}>Google</button>
      <button className="button" onClick={startLoginFacebook}>Facebook</button>
      </div>
    </div>

  </div>

);


const mapDispatchToProps = (dispatch) => ( {
  startLogin: ()=> dispatch(startLogin()),
  startLoginFacebook: ()=> dispatch(startLoginFacebook())

});


export default connect(undefined,mapDispatchToProps)(LoginPage)
