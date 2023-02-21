import React from "react";
import Article from "./Article"

function ArticleList({posts}) {

    console.log(posts)

    const articles = posts.map((article) => {
        return (
            <Article key={article.id} date={article.date}  minutes={article.minutes} preview={article.preview} title={article.title} />
        )
    })

    return (
        <main>
            {articles}
        </main>
    )
}

export default ArticleList;