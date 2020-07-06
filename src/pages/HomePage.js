import React from "react";
import Article from "../components/Article";
import "../styles/Article.css";
const articles = [
  {
    id: 1,
    title: "Fashion Shop",
    subtitle: "Here you will find everything you are looking for",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque amet, vitae consequatur exercitationem ratione voluptatibus repudiandae alias deleniti culpa illo suscipit quia sint temporibus illum commodi itaque ea ab ipsum?",
  },
  {
    id: 2,
    title: "New Collection",
    subtitle: "Lorem lorem",
    text:
      "111Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque accusantium sapiente perspiciatis id ipsam necessitatibus recusandae unde dolores error sunt officiis ad, voluptatum veniam, blanditiis nam in totam esse.",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
