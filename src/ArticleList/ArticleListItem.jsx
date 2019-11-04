import React from 'react';
import PropTypes from 'prop-types'
import SlugButton from './SlugButton.jsx'
import ArticleImage from './ArticleImage.jsx'
import './ArticleListItem.module.css'

const ArticleListItem = props => (

    <div>
        {/* <!DOCTYPE html> */}
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <link rel="stylesheet" href="ArticleList.module.css"></link>
                <title>Week9 assignment</title>
            </head>

            <body >
                <ArticleImage article = {props.article}/>
                
                <section id = "container">

                    <h1 class = "item-h1">{props.article.title}</h1> 
                    <p class = "item-p">{props.article.shortText}</p>
                    <time class = "item -time" dateTime = {props.article.pubDate}>{props.article.pubDate}</time>
                    <SlugButton article = {props.article}/>
                </section>
                
            </body>
            
        </html>
    </div>

);


ArticleListItem.propTypes = {
    articles: PropTypes.object.isRequired
};
export default ArticleListItem;