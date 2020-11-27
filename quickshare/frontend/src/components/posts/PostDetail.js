import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getPosts, deletePost, getPostDetail } from '../../actions/posts';
import {Link} from 'react-router-dom'

export class PostDetail extends Component {
  
  componentDidMount(){
    const id = this.props.match.params.id
    this.props.getPostDetail(id)
    this.setState(this.props.post)
  }
  render() {

    const post = this.props.post
    const currentUser = this.props.currentUser
    return (
    
      <Fragment>
      
        <h2>Post detail</h2>
        {
          post ? <div key={post.id} className="card mt-2 mb-2 db-post">          
            <ul className="nav">
              <li className="nav-item profile-link">
                       <a className="nav-link active" href="profile/">{post.author.username}</a>
              </li>              
            </ul>          
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
            {
              this.props.currentUser === post.author.username ?
              <button className="btn btn-outline-danger" 
              onClick={this.props.deletePost.bind(this, post.id)}>
              delete</button> : null
            }
            
          </div>
         
        </div> : null  
        }
                
      </Fragment>
    

    );
  }
}

const mapStateToProps = (state) => ({
  post: state.posts.post_detail,
  currentUser: state.auth.user.username
});

export default connect(mapStateToProps, { getPosts, deletePost, getPostDetail })(PostDetail);
