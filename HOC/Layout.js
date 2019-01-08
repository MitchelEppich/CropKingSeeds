/**************************************/
/*Our highest ordered component. This
component wraps each page. Naturally this
component has the navigation menu and footer.*/
/**************************************/

import "../scss/home.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../store/actions";

import Cart from "../components/sections/cart";
import Header from "../components/partials/header";
import Footer from "../components/partials/footer";

class Layout extends Component {
  componentDidMount() {
    this.props.getStrains();
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className="bg-smoke-grey">
        <Header {...this.props} />
        <div className="pt-32">
          <div className="bg-white px-4 w-1300 mx-auto shadow-md">
            {this.props.children}
          </div>
        </div>

        <Cart {...this.props} />
        <Footer {...this.props} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    getStrains: () => dispatch(actions.getStrains()),
    modifyCart: input => dispatch(actions.modifyCart(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(Layout);
