import React from "react";

function VideoCard({ imageUrl, title, genre }) {
  return (
    <article
      className={`shadow-2xl w-64 h-80 hover:scale-105 transition-all cursor-pointer`}
    >
      <img src={imageUrl} alt="" className={``} />
      <div className={`p-6`}>
        <h2>{title}</h2>
        <h3>{genre}</h3>
        <p>Keep Reading...</p>
      </div>
    </article>
  );
}

export default VideoCard;
