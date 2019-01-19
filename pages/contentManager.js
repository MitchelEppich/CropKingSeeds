import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

class Index extends Component {
    render() {
        return (
            <div className="pt-12 pb-12 bg-red-light text-white w-full h-full min-h-screen">
                <h1 className="w-full text-center text-3xl mb-8">CMS</h1>
                <div className="w-250 h-screen fixed z-999 pin-t bg-white text-red-light p-2 pt-64 ">
                    <h3 className="text-center text-2xl mb-2">Crop King Seeds</h3>
                    <p className="text-center mb-12 text-sm">content managment system</p>
                    <div className="px-4">
                        <div className="my-4 flex justify-between leading-loose">
                            edit articles
                            <span className="w-1/2 text-right cmsMenuArrows">
                                <FontAwesomeIcon
                                    icon={faAngleDoubleRight}
                                    className="fa-2x pr-1 hover:text-red-dark cmsMenuArrows cursor-pointer"
                                />
                            </span>
                        </div>
                        <hr className="hr__cms" />
                        <div className="my-4 flex justify-between leading-loose">
                            new article
                            <span className="w-1/2 text-right cmsMenuArrows">
                                <FontAwesomeIcon
                                    icon={faAngleDoubleRight}
                                    className="fa-2x pr-1 hover:text-red-dark  cursor-pointer"
                                />
                            </span>
                        </div>
                        <hr className="hr__cms" />
                    </div>
                </div>
                <div className="bg-white shadow-lg mx-auto w-2/3 h-screen">Dashboard</div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setVisibleScreen: input => dispatch(actions.setVisibleScreen(input))
    };
};

export default connect(
    state => state,
    mapDispatchToProps
)(withData(Index));
