import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

export class Login extends Component {
	constructor(props){
		super(props)
		this.state = {
	    email: '',
	    password: ''
  		};
	}
  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e){
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
    this.setState({email: '', password: ''})};

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { email, password } = this.state;
    return (
      <div className="offset-md-2 content-section" style={{width:"60%"}}>

        <form onSubmit={this.onSubmit.bind(this)}>
          
          <fieldset className="form-group">
            <legend className="border-bottom mb-4">Log In</legend>
            
          </fieldset>
          <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={(e) => this.onChange(e)}
                    value={email}
                  />
          </div>
          <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={(e) => this.onChange(e)}
                    value={password}
                  />
          </div>

          <div className="form-group">
            <button className="btn btn-outline-info" type="submit"
            >Login</button>
            <small className="text-muted ml-2">
            <a href="#">Forgot password</a>  
            </small>
            
          </div>
          
        </form>
        <div className="border-top pt-3">
          <small className="text-muted">
            Need an account? <Link to="/register">Register</Link>
          </small>
        </div>  
      </div>

      
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);

