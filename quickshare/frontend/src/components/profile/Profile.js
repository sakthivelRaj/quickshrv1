import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { getProfile } from '../../actions/profile';

class Profile extends Component {

    constructor(props) {
        super(props);
    }
    componentDidMount(){
    	this.props.getProfile(this.props.match.params.id)
    }
    render() {    								
        return ( 
        	<>
        	{this.props.profileUser ? 
        	<div className="content-section">
			  <div className="media">
			    <img className="rounded-circle account-img" src={this.props.profileUser.profile.image} alt="imgg"/>
			    <div className="media-body">
			      <h2 className="account-heading">profile</h2>
			      <p className="text-secondary">Email: {this.props.profileUser.email}</p>
			      <p className="text-secondary">first name: {this.props.profileUser.first_name}</p>
			      <p className="text-secondary">last name: {this.props.profileUser.last_name}</p>

			    </div>
			  </div>
			  <form>
				<fieldset className="form-group">
					<legend className="border-bottom mb-4">Profile info</legend>
				</fieldset>
			
			  </form>
			 </div> : null }
			</>       
						

        );
    }
}
const mapStateToProps = state => ({
	user: state.auth.user,
	profileUser: state.profile.profile

})
export default connect(mapStateToProps, {getProfile})(Profile);
