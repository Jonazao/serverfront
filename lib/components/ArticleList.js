import React from 'react';
import Article from './Article';
const ArticleList = ({ articles, actions }) => {
  return (
    <div>
      {Object.values(articles).map((a) => {
        return <Article key={a.id} article={a} actions={actions} />;
      })}
    </div>
  );
};

export default ArticleList;
