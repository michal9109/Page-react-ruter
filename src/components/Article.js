import React from "react";

const Article = ({ title, subtitle, text }) => {
  return (
    <article className="home__article">
      <h3>{title}</h3>
      <span>{subtitle}</span>
      <p>{text}</p>
    </article>
  );
};

export default Article;
