import React, { Component } from "react";
import withContext from "../withContext";
import { Redirect } from "react-router-dom";
import axios from 'axios';
import Slider from "react-slick";

const initState = {
  title: "",
  category: "",
  author: "",
  date: "",
  description: "",
  body: "",
  categories : ["Article","Notice","Album"],
  photos : [],
  urls: []
};

const sign = require('jwt-encode');
const secret = 'some$3cretKey';
const algorithm = 'HS256';
const data = {
  token : 'Required'
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

    if (title && category) {
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

      const jwt = sign(data,secret,algorithm);
      const res = await axios.post(
        '/api/postings',
        formData, 
        {
          headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization' : jwt
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
        { flash: { status: 'is-danger', msg: 'Please enter All Details of Notice or Article' }}
      );
    }
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value, error: "" });
  handlePhotos = e => {this.setState({ [e.target.name]: Array.from(e.target.files),urls:Array.from(e.target.files).map(f => URL.createObjectURL(f) ), error: "" });}

  render() {
    const date = this.FormatDate(new Date());
    const { title, author, category, description, body, categories, photos, urls } = this.state;
    const { user } = this.props.context;

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };

    return (user && user.accessLevel > 0) ?  (
      <div className="hero-body">
        <div className="hero blkYellow">
          <div className="hero-body container">
            <h4 className="title">Add Article or Notice or Album</h4>
          </div>
        </div>
        <br />
        <div className="hero blkYellow page-header" >
            <div className="page-header-body container">
              <h4 className="title"> {title} </h4>
            </div>
          </div>
        <article className="message new-article is-content is-size-4">
          <div > 
            {photos.length > 0 ? (
              <Slider {...settings}>
                {photos.map((aFile, index) => (
                    <div key={index} className="slick-slide slide--has-caption">
                        {aFile.type.split('/')[0] === "image" && 
                        (
                            <figure key={index} className="image is-1by1">
                                <p> <img className="slick-slide-image" src={urls[index]} alt="upload" /></p>
                                {/*<figcaption className="figcaption">
                                    {captionlist[index]}
                                </figcaption>*/}
                            </figure>
                            
                        )}
                        {aFile.type.split('/')[0] === "audio" && (
                            <audio key={index} controls>
                                <source src={urls[index]} type={aFile.type}/>
                                {/*<figcaption className="figcaption">
                                    {captionlist[index]}
                                </figcaption>*/}
                            </audio>
                        )}
                        {aFile.type.split('/')[0] === "video" && (
                            <video key={index} width="320" height="240" controls>
                                <source src={urls[index]} type={aFile.type}/>
                                {/*<figcaption className="figcaption">
                                    {captionlist[index]}
                                </figcaption>*/}
                            </video>
                        )}
                    </div>
                    
                ))}
            </Slider>

            ):(
              <figure className="image is-4x3">
                <img alt="view post" style={{height:"30rem"}} src={process.env.PUBLIC_URL + "/images/image7.jpg"} />
              </figure>
            )}
          </div> 
        <div className="message-body">
          <div className="box grnBkgn">
            <div className="has-text-left" >
              By : <b style={{ textTransform: "capitalize" }} >
                    {author}
                  </b>
            </div>
            <div className="is-clearfix has-text-left">
              <span className="tag is-primary">
                  {date ? (
                    <small>{date}</small>
                    ) : (
                    <small className="has-text-warning">No Date Available</small>
                    )}
                </span>
            </div>
          </div>

          <p className="is-size-5 p-format para">
            {body}
          </p>

        </div>
      </article>

        <br />
        <form onSubmit={this.save}>
          <div className="columns is-mobile is-centered">
            <div className="column is-one-third-desktop">

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
              {(category === "Article" || category === "Notice") && 
                <div>
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
                  <div className="field body">
                  <label className="label">Body / Content : </label>
                  <textarea
                    className="textarea"
                    type="text"
                    rows="6"
                    maxlength="1024"
                    style={{ resize: "block"}}
                    name="body"
                    value={body}
                    onChange={this.handleChange}
                  />
                </div>
                </div>
              }
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
      </div>
    ):(
      <div className="hero">
        <div className="hero-body"> 
            <div className="content">
                <article className="message">
                    <div className="message-body">
                        <h1>
                            You do not have the requisite access rights to upload articles.
                        </h1>
                    </div>
                </article>
            </div>
        </div>

      </div>
    );
  }
}

export default withContext(AddPosting);