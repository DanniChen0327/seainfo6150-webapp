import React from 'react';
import PropTypes from 'prop-types'
import './ArticleImage.module.css'

const ArticleImage = props => (
    <div class="image">
        <img src={props.article.image._url} alt={props.article.title} width="250" height="150" />

    </div>

        
            
);


ArticleImage.propTypes = {
    articles: PropTypes.object.isRequired
};
export default ArticleImage;