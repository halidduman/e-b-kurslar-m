import React from "react";

function Course({ course }) {
  const { id, title, description, price, link, image } = course;
  return (
    <div className="course">
      <img className="images" src={image} />
      <h2 className="title-mini">{title}</h2>
      <h3 className="text">{description}</h3>
      <h4 className="price">{price}₺</h4>
      <a className="link" href={link}>
        Satın Almak İçin
      </a>
    </div>
  );
}

export default Course;
