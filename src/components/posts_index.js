import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {

  componentWillMount(){
    this.props.fetchPosts();
  }
  renderPosts(){

    return this.props.posts.map((post) => {
        return (
            <li className="list-group-item" key={post.id}>
                  <div className="row">
                    <div className="col-md-5">{post.categories}</div>
                    <div className="col-md-5"><strong>{post.title}</strong></div>
                    <Link to={"posts/" + post.id}>
                        <div className="col-md-2"><strong>Edit</strong></div>
                    </Link>

                  </div>
            </li>
        )
    })
  }


  render() {
      return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                      {this.renderPosts()}
                </ul>
            </div>
      )
  }
}

function mapStateToProps(state){
    return {posts: state.posts.all};
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
