import React from "react";
import RelatedArticles from "./relatedArticles";
import Sidebar from "./sidebar";
import ArticleContent from "./articleContent";
import Keywords from "./keywords";
import ImgHeader from "./imgHeader";

import RelatedStrains from "./relatedStrains";

const ArticlePage = props => {
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
                <div className="mx-24 sm:mx-0 md:mx-0 lg:mx-4 xxl:w-2/3 xl:w-full mt-48 mb-16 shadow-md z-50">
                    <ArticleContent {...props} />
                    <Keywords {...props} />
                </div>
                <div style={sidebarSection} className="xxl:w-1/3 xl:hidden lg:hidden md:hidden sm:hidden p-2 mx-4">
                    <Sidebar {...props} />
                </div>
            </div>
            <RelatedArticles {...props} />

            <div className="xxl:hidden">
                <RelatedStrains {...props} />
            </div>
        </div>
    );
};

export default ArticlePage;
