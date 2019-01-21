import React from "react";
import SmArticles from "../articles/previews/smArticles";

const RelatedArticles = props => {
    return (
        <div className="w-full mx-auto p-4">
            <h2 className="ml-8 mb-4">Related Articles</h2>
            <div className="w-full inline-flex flex-wrap justify-center">
                <div className="xxl:w-1/3">
                    <SmArticles {...this.props} src="SMimage-1.jpg" />
                </div>
                <div className="xxl:w-1/3">
                    <SmArticles {...this.props} src="SMimage-2.jpg" />
                </div>
                <div className="xxl:w-1/3">
                    <SmArticles {...this.props} src="SMimage-3.jpg" />
                </div>
            </div>
        </div>
    );
};

export default RelatedArticles;
