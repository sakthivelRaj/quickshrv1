import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../actions/posts';

class Form extends Component {
  constructor(props){
    super(props)
      this.state = {
        title:'',
        content:'Whats on your mind'
      }}
    

  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e){
    e.preventDefault();
    const { title, content } = this.state;
    const post = { title, content };
    this.props.addPost(post);
    this.setState({
     title:'',
    content:''
    });
  };

  render() {
    const { title, content } = this.state;
    return (
      <div className="card card-body mt-4 mb-4 db-post">
        
        <form onSubmit={this.onSubmit.bind(this)}>
        <legend className="border-bottom mb-4">Blog Post</legend>
          <div className="form-group">
            <label>title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={(e) => this.onChange(e)}
              value={title}
            />
          </div>
          

          <div className="form-group">
            <label>content</label>
          <textarea 
              className="form-control"
              type="text"
              name="content"
              onChange={(e) => this.onChange(e)}
              value={content}>
            
          </textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-outline-info">
              post
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addPost })(Form);