import React, { Component } from "react";
import withContext from "../withContext";
import { Redirect } from "react-router-dom";
import axios from 'axios';

const initState = {
  title: "",
  category: "",
  author: "",
  date: "",
  description: "",
  body: "",
  categories : ["Article","Notice"],
  photos : []
};

class AddPosting extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  FormatDate = d => {
    var month = d.getMonth()+1;
    var day = d.getDate();
    var year = d.getFullYear();
    return (year + "-" + month + "-" + day);
  }

  save = async (e) => {
    e.preventDefault();
    const { title, category, author, description, body, photos } = this.state;
    console.log(photos);
    if (title && body && category) {
      //const id = Math.random().toString(36).substring(2) + Date.now().toString(36);
      const date = this.FormatDate(new Date());
      const formData = new FormData();
      formData.append('title',title);
      formData.append('category',category);
      formData.append('author',author);
      formData.append('date',date);
      formData.append('description',description);
      formData.append('body',body);
      photos.forEach( (photo,index) => {
        formData.append('photos',photo);
      });

      
      const res = await axios.post(
        '/api/postings',
        formData, 
        {
          headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).catch((res) => {
        //return { status: 401, message: 'Unauthorized' }
        console.log(res);
      })
      
      const numOfPics = res.numOfPics; // might not be needed, compare count b4 and after
      const id = res.id;

      this.props.context.addPosting(
        {
          id, title, category, author, date, description, body, numOfPics
        },
        () => this.setState(initState)
      );
      this.setState(
        { flash: { status: 'is-success', msg: 'Posting created successfully' }}
      );

    } else {
      this.setState(
        { flash: { status: 'is-danger', msg: 'Please enter Title and Body of Notice or Article' }}
      );
    }
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value, error: "" });
  handlePhotos = e => this.setState({ [e.target.name]: Array.from(e.target.files), error: "" })

  render() {
    const { title, author, description, body, categories } = this.state;
    const { user } = this.props.context;

    return !(user && user.accessLevel > 0) ? (
      <Redirect to="/" />
    ) : (
      <>
        <div className="hero is-primary ">
          <div className="hero-body container">
            <h4 className="title">Add Article or Notice</h4>
          </div>
        </div>
        <br />
        <br />
        <form onSubmit={this.save}>
          <div className="columns is-mobile is-centered">
            <div className="column is-one-third">
              <div className="field">
                <label className="label">Title Of Post: </label>
                <input
                  className="input"
                  type="text"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="field">
                <label className="label">Category Of Post: </label>
                {categories.map((option,index) => (
                  <label key={index}>
                    {option} {" "}
                    <input
                      name="category"
                      value={option}
                      onChange={this.handleChange}
                      type="radio"
                    /> {" "}
                    </label>
                  
                  ))}
              </div>
              <div className="field">
              <label className="label">Author Of Post: </label>
                <input
                  className="input"
                  type="text"
                  name="author"
                  value={author}
                  onChange={this.handleChange}
                  
                />
              </div>
              <div className="field">
                <label className="label">Description: </label>
                <textarea
                  className="textarea"
                  type="text"
                  rows="3"
                  style={{ resize: "none"}}
                  name="description"
                  value={description}
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Body / Content : </label>
                <textarea
                  className="textarea"
                  type="text"
                  rows="6"
                  style={{ resize: "block"}}
                  name="body"
                  value={body}
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Photos: </label>
                <input 
                  name="photos"
                  type="file"
                  multiple
                  onChange={this.handlePhotos}
                />
              </div>
              {this.state.flash && (
                <div className={`notification ${this.state.flash.status}`}>
                  {this.state.flash.msg}
                </div>
              )}
              <div className="field is-clearfix">
                <button
                  className="button is-primary is-outlined is-pulled-right"
                  type="submit"
                  onClick={this.save}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default withContext(AddPosting);