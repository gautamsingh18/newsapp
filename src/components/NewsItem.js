import React from "react";
import { Link } from "react-router-dom";

const NewsItem = (props) => {
  return (
    <>
      <div className="card">
        <img
          src={
            props.imageUrl
              ? props.imageUrl
              : "https://cdn.pixabay.com/photo/2018/06/26/01/20/connection-lost-3498366_1280.png"
          }
          className="card-img-top "
          alt="..."
        />

        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <Link
            to={props.newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark btn-sm"
          >
            read more
          </Link>
          <p className="card-text">
            <small className="text-body-secondary">
              By {props.author ? props.author : "N/A"} at{" "}
              {props.date ? new Date(props.date).toUTCString() : "N/A"}
            </small>
          </p>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
