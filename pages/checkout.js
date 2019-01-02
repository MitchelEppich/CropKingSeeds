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
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Index extends Component {
  render() {
    return (
      <Layout>
        <div className="text-center w-full pt-10 mt-4 bg-white relative">
            <h1 className="text-4xl font-bold text-black">Checkout Preview</h1>

            {/* arrow left */}
            {this.props.misc.stepsCheckout != 0 ?
            <div onClick={()=>{
                  this.props.misc.stepsCheckout > 0 ? 
                  this.props.toggleStepsCheckout(this.props.misc.stepsCheckout -1) : null
                  console.log(this.props.misc.stepsCheckout)
                }} 
                className="absolute p-2 mt-3 pin-l cursor-pointer hover:text-red">
                <FontAwesomeIcon icon={faAngleLeft} className="fa-4x" />
            </div> : null }

            {/* arrow right */}
            {this.props.misc.stepsCheckout != 3 ?
            <div onClick={()=>{
                  this.props.misc.stepsCheckout < 3 ? 
                  this.props.toggleStepsCheckout(this.props.misc.stepsCheckout +1) : null
                  console.log(this.props.misc.stepsCheckout)
                }} 
                className="absolute p-2 mt-3 pin-r cursor-pointer hover:text-red">
                <FontAwesomeIcon icon={faAngleRight} className="fa-4x" />
            </div> : null }
        </div>
        
                 
        <div className="w-container mx-auto mt-12 bg-white">  
                   
            <Checkout {...this.props} />
             {this.props.misc.stepsCheckout == 0 ? 
             <div>
                <ProductPreview {...this.props} /> 
                <hr style={{border:"1px solid rgb(228, 228, 228)"}} className="my-6"/>  
                <Coupon {...this.props} />
             </div>
             : null }          
            
            {this.props.misc.stepsCheckout == 1 ? 
             <div>             
                <Shipping {...this.props} />
                <hr style={{border:"1px solid rgb(228, 228, 228)"}} className="my-6"/>  
                <ShippingMethod {...this.props} />                
            </div> 
            : null }

            {this.props.misc.stepsCheckout == 2 ?                    
            <Payment {...this.props} />            
            : null }

            {this.props.misc.stepsCheckout == 3 ?               
            <Confirmation {...this.props} />            
            : null }
        </div>
        {/* <div className="w-full p-2 inline-flex justify-center">
          <div onClick={()=>{
            this.props.misc.stepsCheckout > 0 ? 
            this.props.toggleStepsCheckout(this.props.misc.stepsCheckout -1) : null
            console.log(this.props.misc.stepsCheckout)
          }} 
          className="w-200 p-2 text-center bg-grey-light text-white mx-2 cursor-pointer">
          Back</div>
          <div onClick={()=>{
            this.props.misc.stepsCheckout < 3 ? 
            this.props.toggleStepsCheckout(this.props.misc.stepsCheckout +1) : null
            console.log(this.props.misc.stepsCheckout)
          }}          
          className="w-200 p-2 text-center bg-grey text-white mx-2 cursor-pointer">Next Step</div>
        </div> */}
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    // setCheckoutScreen: input => dispatch(actions.setCheckoutScreen(input)),
    setContext: input => dispatch(actions.setContext(input)),
    toggleStepsCheckout: input => dispatch(actions.toggleStepsCheckout(input)),
    
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
