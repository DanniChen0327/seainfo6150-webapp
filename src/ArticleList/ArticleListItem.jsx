import React from 'react';
import PropTypes from 'prop-types'

const ArticleListItem = props => (

    <div>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>Week4 assignment</title>
            </head>
            <article>
                <h1>{props.article.title}</h1>
                <p>{props.article.shortText}</p>
                <time dateTime = {props.article.pubDate}>{props.article.pubDate}</time>
                <button onClick={() => alert(props.article.slug)}>show article slug
                </button>
                <p></p>

            </article>
            
        </html>
    </div>

);


ArticleListItem.propTypes = {
    articles: PropTypes.object.isRequired
};
export default ArticleListItem;