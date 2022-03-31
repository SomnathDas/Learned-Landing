import React from "react";

const Card = ({ imageUrl, label, bgColor }) => {
  return (
    <article className={`${bgColor} relative`}>
      <img src={imageUrl} alt="" className={` w-72 h-80`} />
      <h2
        className={`text-white font-bold relative bottom-12 text-center text-xl`}
      >
        {label}
      </h2>
    </article>
  );
};

export default Card;
