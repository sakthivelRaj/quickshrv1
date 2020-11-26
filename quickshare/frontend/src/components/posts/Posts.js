import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { getPosts, deletePost, addPost } from '../../actions/posts';

export class Posts extends Component {

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
  	console.log(this.props.posts)
  	console.log(localStorage.getItem('token'))
    return (
      <Fragment>
        <h2>Posts</h2>

        {
        	this.props.posts.map(post => (
        		<div key={post.id} className="card text-center mt-2 mb-2">
				  <div className="card-header">
				    <ul className="nav nav-pills card-header-pills">
				      <li className="nav-item">
				        <a className="nav-link active" href="#">Active</a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link" href="#">Link</a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
				      </li>
				    </ul>
				  </div>
				  <div className="card-body">
				    <h5 className="card-title">{post.title}</h5>
				    <p className="card-text">{post.content}</p>
				    <a href="#" className="btn btn-primary">Go somewhere</a>
				  </div>
				</div>
                	
                ))
        }
        
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.posts
});

export default connect(mapStateToProps, { getPosts, deletePost, addPost })(Posts);
