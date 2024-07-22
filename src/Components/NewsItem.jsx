import React from "react";

function NewsItem({ title, description, src, url }) {
  return (
    <div
      className="card card-bg   mb-3 d-inline-block my-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px", borderRadius: "5px" }}
    >
      <img
        src={src}
        style={{ height: "15rem", width: "20rem" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 30)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 70)
            : "News is information about current events. This may be provided through many different media broadcasting, electronic communication"}
        </p>
        <a href={url} className="btn btn-danger">
          Read more
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
