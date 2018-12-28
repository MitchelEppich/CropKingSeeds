/**************************************/
/*Our highest ordered component. This
component wraps each page. Naturally this
component has the navigation menu and footer.*/
/**************************************/

import "../scss/home.scss";
import React, { Component } from "react";
import DevTools from "../store/DevTools";
import { connect } from "react-redux";
import actions from "../store/actions";

import Header from "../components/partials/header";
import Footer from "../components/partials/footer";
import Cart from "../components/sections/cart";

class Layout extends Component {
  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <div className="bg-red-dark">
        <Header {...this.props} />
        <div className="px-12">
          {this.props.children}
        </div>
        
        <Cart {...this.props} />
        <Footer {...this.props} />
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
)(Layout);
