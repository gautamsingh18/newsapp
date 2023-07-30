import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      <>
        <div className="card">
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://cdn.pixabay.com/photo/2018/06/26/01/20/connection-lost-3498366_1280.png"
            }
            className="card-img-top "
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <Link
              to={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark btn-sm"
            >
              read more
            </Link>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "N/A"} at{" "}
                {date ? new Date(date).toUTCString() : "N/A"}
              </small>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
