import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getPosts, deletePost, addPost, getPostDetail } from '../../actions/posts';
import {Link} from 'react-router-dom'

export class Posts extends Component {

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const posts = this.props.posts

    return (
      <Fragment>

        {
          this.props.posts.map(post => (
                          
                <article key={post.id} className="media content-section">
                  <img className="rounded-circle article-img" src={post.author.profile.image} alt="imggx" />
                  <div className="media-body">
                    <div className="article-metadata">
                      <Link to={`profile/${post.author.id}`} className="mr-2" >{ post.author.username }</Link>
                      <small className="text-muted mr-2">{post.date_posted.slice(0,10)}</small>
                    </div>
                    <h2>
                    <Link to={`/posts/${post.id}`} className="article-title"> { post.title }</Link>
                    </h2>
                    <p className="article-content">{ post.content }</p>
                  </div>
                </article>
           

        ) )

      }
        
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.posts
});

export default connect(mapStateToProps, { getPosts, addPost, getPostDetail })(Posts);
