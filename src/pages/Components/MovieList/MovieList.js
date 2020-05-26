import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "react-bootstrap/Spinner";

//import {convertToSlug} from '../../../../actions/client/index';
class MovieList extends Component {
  componentWillMount() {
  }
  render() {
    function convertToSlug(Text) {
      return Text.toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");
    }
    var movieList = this.props.movielist.data.videos;
    if (this.props.movielist.loading == false) {
      return (
        <div className={"loadingPage"}>
          <div className={"loadingBox"}>
            <span className="fa fa-spinner fa-spin" />
          </div>
        </div>
      );
    } else {
        var movieItem = movieList.map((movieItem, index) => {
        var movieSlug = convertToSlug(movieItem.name);
        console.log(movieSlug);
        return (
          <div key={index} className="col-md-2 col-xs-6 col-sm-6">
            <div className="thumbnail">
              <a href={`/category/video/${movieSlug}`}>
                <span className="maskIcon">
                  <i className="fa fa-play"></i>
                </span>
                <img
                  src={`http://xutubes.com:88/uploads/posts/${movieItem.image}`}
                  alt={`${movieSlug}`}
                />
              </a>
              <div className="caption">
                <h3>
                  <a href={`/category/video/${movieSlug}`}>{movieItem.name}</a>
                </h3>
              </div>
              <ul>
                <li>
                  <a href={`/category/${movieItem.category_slug}`}>
                    {movieItem.category_name}
                  </a>
                </li>
                <li> - 1000 Views</li>
              </ul>
            </div>
          </div>
        );
      });
    }
    return (
      <div className="movie-list">
        <div className="row">
          <div className="col-md-12">
            <h2 className="category-title">
              <a href={`/category/${this.props.movielist.data.category.slug}`}>
                {this.props.movielist.data.category.title}
              </a>
            </h2>
          </div>
          {movieItem}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movielist: state.movielist
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
