import React from 'react';
import PropTypes from 'prop-types'
import SlugButton from './SlugButton.jsx'
import './ArticleListItem.module.css'

const ArticleListItem = props => (

    <div>
        {/* <!DOCTYPE html> */}
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>Week5 assignment</title>
            </head>
            <article>
                <h1>{props.article.title}</h1>
                <p>{props.article.shortText}</p>
                <time dateTime = {props.article.pubDate}>{props.article.pubDate}</time>
                <SlugButton article = {props.article}/>
                

            </article>
            
            
        </html>
    </div>

);


ArticleListItem.propTypes = {
    articles: PropTypes.object.isRequired
};
export default ArticleListItem;