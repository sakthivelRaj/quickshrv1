import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../../actions/auth'

class Header extends Component {

  render() {
    const { isAuthenticated, user } = this.props.auth;

    return (
      <Fragment>

      <header className="site-header">
            <nav className="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
              <div className="container">
                <a className="navbar-brand mr-4" href="/">QuickShare</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggle">
                  <div className="navbar-nav mr-auto">
                    <a className="nav-item nav-link" href="#">Home</a>
                    <a className="nav-item nav-link" href="#">About</a>
                  </div>
                  
                  <div className="navbar-nav">
                    {isAuthenticated ? 
                     <>
                    <Link to={user ? `profile/${user.id}`: ""} className="nav-item nav-link">{user ? `Welcome ${user.username}` : ''}</Link>
                    <Link to="/logout" onClick={this.props.logout} className="nav-item nav-link" >Logout</Link>
                    </>
                      :
                      <>
                    <Link to="/login" className="nav-item nav-link">Login</Link>
                    <Link to="/register" className="nav-item nav-link">Register</Link>
                      </>
                    }
                  </div>
                </div>
              </div>
            </nav>
      </header>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
