/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Header from "../components/partials/header" 
import BannerCarousel from "../components/sections/bannerCarousel" 
import GenePreview from "../components/sections/genePreview"
import Post from "../components/sections/post"
import Footer from "../components/partials/footer"
import ProductPreview from "../components/sections/checkout/productPreview";
import Coupon from "../components/sections/checkout/coupon";
import Shipping from "../components/sections/checkout/shipping";
import ShippingMethod from "../components/sections/checkout/shipping/shippingMethod";
import Payment from "../components/sections/checkout/payment";
import Checkout from "../components/sections/checkout";
import Confirmation from "../components/sections/checkout/confirmation";


class Index extends Component {
  render() {
    return (
      <Layout>
        <div className="text-center pt-10 mt-4 bg-white">
            <h1 className="text-4xl font-bold text-black">Checkout Preview</h1>
        </div>
        <div className="w-container mx-auto mt-12 bg-white">           
            <Checkout {...this.props} />
            
             {this.props.misc.checkoutScreen == "productsScreen" ? 
             <div>
                <ProductPreview {...this.props} /> 
                <hr style={{border:"1px solid rgb(228, 228, 228)"}} className="my-6"/>  
                <Coupon {...this.props} />
             </div>
             : null }          
            
            {this.props.misc.checkoutScreen == "shippingScreen" ? 
             <div>             
                <Shipping {...this.props} />
                <hr style={{border:"1px solid rgb(228, 228, 228)"}} className="my-6"/>  
                <ShippingMethod {...this.props} />                
            </div> 
            : null }

            {this.props.misc.checkoutScreen == "paymentScreen" ?                     
                <Payment {...this.props} />            
            : null }

            {this.props.misc.checkoutScreen == "confirmationScreen" ?                     
                <Confirmation {...this.props} />            
            : null }

        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    setCheckoutScreen: input => dispatch(actions.setCheckoutScreen(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
