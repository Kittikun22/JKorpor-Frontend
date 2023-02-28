import React from 'react'
import Parse from 'html-react-parser';


function HtmlParserNews({ news_content }) {
    return (
        Parse(news_content)
    )
}

export default HtmlParserNews