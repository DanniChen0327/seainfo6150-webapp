import React from "react";
import PropTypes from 'prop-types'
import ArticleListItem from './ArticleListItem.jsx'
import './ArticleList.module.css'

const ArticleList = props => {
  return (
    <ul>
      
      {props.articles.map(article => (
          <h1 key={article.slug}> <ArticleListItem article = {article}/></h1>
          
        
      ))}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;