import React,{Component} from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

 class PostNew extends Component {

    render() {

      const { fields: {title, categories, content}, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.props.createPost)} >
              <h3>Create a new Post</h3>
              <div className="form-group">
                  <label>Title</label>
                  <input type="text" className="form-control" {...title} />
                  <div className="text-help"> {title.touched ? title.error : ''} </div>
              </div>
              <div className="form-group">
                  <label>Categories</label>
                  <input type="text" className="form-control"  {...categories} />
              </div>
              <div className="form-group">
                  <label>Content</label>
                <textarea className="form-control"  {...content} />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

function validate(values){
    const errors = {};

      if(!values.title){
          errors.title = 'Enter a title';
      }

    return errors;
}
export default reduxForm({
    form: 'PostNewForm', //name the form
    fields: ['title','categories','content'],
    validate
}, null, { createPost })(PostNew);
