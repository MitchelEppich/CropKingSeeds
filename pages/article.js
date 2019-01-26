/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import ArticlePage from "../components/sections/articlePage";

class Index extends Component {
    componentDidMount() {
        document.getElementById("copyArticleLink").addEventListener("click", () => {
            let link = document.querySelector("#articleLinkText");
            link.select();
            document.execCommand("copy");
            alert("Link copied successfully!");
        });
    }

    render() {
        return (
            <Layout>
                {this.props.misc.strains != null && this.props.misc.strains.length > 0 ? (
                    <div className="">
                        <ArticlePage {...this.props} />
                        <input
                            id="articleLinkText"
                            value={
                                "localhost:3000/product/" +
                                this.props.article.currentArticle.name.toLowerCase().replace(/ /g, "-")
                            }
                        />
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
        setHoverId: (id, turnOn) => dispatch(actions.setHoverId(id, turnOn)),
        quickAddToCartQty: input => dispatch(actions.quickAddToCartQty(input)),
        modifyCart: input => dispatch(actions.modifyCart(input)),
        modifyPotentialQuantity: input => dispatch(actions.modifyPotentialQuantity(input))
    };
};

export default connect(
    state => state,
    mapDispatchToProps
)(withData(Index));
