import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { startLogout } from '../actions/auth'
import Dropdown, {DropdownContent, DropdownTrigger} from 'react-simple-dropdown';


export const Header = ({startLogout, photoURL, displayName}) => (
  <header className="header" >
    <div className="content-container">
      <div className="header__content">
      <Link className="header__title" to="/dashboard">
        <h1>Expensify</h1>
      </Link>
        <div className="dropdown__container">


           <Dropdown>
             <DropdownTrigger>
               <img src={`${photoURL}`} className="header--avatar" />
               <span className="header--username">{displayName}</span>
               <i className="down" />
             </DropdownTrigger>
             <DropdownContent>
                   <button className="button buton--menu" onClick={startLogout}>Logout</button>
             </DropdownContent>
           </Dropdown>
          </div>
      </div>
    </div>
  </header>

);


const mapStateToProps = (state) => ({
  displayName: state.auth.displayName,
  photoURL: state.auth.photoURL,


});


const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
