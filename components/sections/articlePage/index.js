import React from "react";
import RelatedArticles from "./relatedArticles";
import Sidebar from "./sidebar";
import ArticleContent from "./articleContent";
import Keywords from "./keywords";
import ImgHeader from "./imgHeader";

const ArticlePage = props => {
  let articleSection = {
    width: "66%",
    marginTop: "15rem",
    zIndex: "50",
    marginBottom: "4rem",
    boxShadow: "0 1px 5px rgba(0,0,0,.2)"
  };

  let sidebarSection = {
    width: "33%",
    marginTop: "28rem",
    zIndex: "50",
    marginBottom: "4rem"
  };

  return (
    <div className="w-full relative h-full pb-12 mb-12">
      <ImgHeader />
      <div className="inline-flex">
        <div style={articleSection} className="ml-24">
          <ArticleContent {...props} />
          <Keywords {...props} />
        </div>
        <div style={sidebarSection} className="w-1/3 p-2 mx-4">
          <Sidebar {...props} />
        </div>
      </div>
      <RelatedArticles {...props} />
    </div>
  );
};

export default ArticlePage;
