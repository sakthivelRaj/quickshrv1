import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';

export class Register extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      password2: '',
      firstName: '',
      lastName: ''
      };
  }

  onSubmit(e){
    e.preventDefault();
    const { username, email, password,
     password2, firstName, lastName } = this.state;
    if (password !== password2) {
      // this.props.createMessage({ passwordNotMatch: 'Passwords do not match' });
      console.log("passwords do not match")
    } else {
      const newUser = {        
        username,
        firstName,
        lastName,
        email,
        password           
      };
      this.props.register(newUser);
    }
  };

  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, firstName, lastName, email, password,
     password2 } = this.state;
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Register</h2>
          <form onSubmit={this.onSubmit.bind(this)}>

            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={(e) => this.onChange(e)}
                value={username}
              />
            </div>
            <div className="form-group">
              <label>first name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                onChange={(e) => this.onChange(e)}
                value={firstName}
              />
            </div>

            <div className="form-group">
              <label>last name</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                onChange={(e) => this.onChange(e)}
                value={lastName}
              />
            </div>

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
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="password2"
                onChange={(e) => this.onChange(e)}
                value={password2}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);
