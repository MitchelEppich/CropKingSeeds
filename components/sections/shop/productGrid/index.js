
import React, { Component } from "react";
import withData from "../../../../lib/withData";
import { connect } from "react-redux";
import actions from "../../../../store/actions";
import {TimelineLite} from "gsap";
import Link from "next/link";

class Index extends Component {

  constructor (props) {
    super(props);
    this.myTween = new TimelineLite({paused: true});
    this.myElements = [];
  }

  componentDidMount(){
    this.myTween.staggerTo(this.myElements,  0.5, { autoAlpha: 1, y: -30}, 0.1);
    this.myTween.restart();
  }


  render() {

    let hoverId = this.props.misc.hoverId;
    let products = this.props.misc.strains;
    if(this.props.misc.activeFilters.length > 0){
      for(let i = 0; i < this.props.misc.activeFilters.length; i++){
        if(this.props.misc.activeFilters[i].hasOwnProperty('thc')){
          if(this.props.misc.activeFilters[i]['thc'] === 'thcLow'){
            products = products.filter(val => {
              for(let i of val.pthc){
                if(i > 20){
                  return false;
                }
              }
              return true;
            });
            continue;
          } else {
            products = products.filter(val => {
              for(let i of val.pthc){
                if(i < 20){
                  return false;
                }
              }
              return true;
            });
            continue;
          }
        }
        if(this.props.misc.activeFilters[i].hasOwnProperty('cbd')){
          if(this.props.misc.activeFilters[i]['cbd'] === 'cbdLow'){
            products = products.filter(val => {
              for(let i of val.pcbd){
                if(i > 2){
                  return false;
                }
              }
              return true;
            });
            continue;
          } else {
            products = products.filter(val => {
              for(let i of val.pcbd){
                if(i < 2){
                  return false;
                }
              }
              return true;
            });
            continue;
          }
        }
        if(this.props.misc.activeFilters[i].hasOwnProperty('genetic')){
          products = products.filter(val => {
            if(val.genetic === this.props.misc.activeFilters[i]['genetic'])
              return true;
            return false;
          });
          continue;
        }
        if(this.props.misc.activeFilters[i].hasOwnProperty('type')){
          products = products.filter(val => {
            if(val.type === this.props.misc.activeFilters[i]['type'])
              return true;
            return false;
          });
          continue;
        }
      }
    }
    products = products.map((product, index)=> {
      let type;
      if(product.type === 0){
        type = "Sativa";
      } else if (product.type === 1) {
        type = "Indica";
      } else {
        type = "Hybrid";
      }
      let packageStyle = hoverId == product._id ? 
      {
        height: "50%", width: "50%", position: "relative", zIndex: 10, transition: "0.4s all ease-in-out",
        backgroundImage: "url(" + product.packageImg + ")",
        backgroundPosition: "center",
        backgroundSize: "cover"
      } 
      : 
      {
        height: "100%", width: "100%", position: "relative", zIndex: 10, transition: "0.4s all ease-in-out",
        backgroundImage: "url(" + product.packageImg + ")",
        backgroundPosition: "center",
        backgroundSize: "cover"
      };

      let plantStyle = hoverId == product._id ? 
      {
        height: "45%", position: "absolute", top: "15px", zIndex: 0, transition: "0.4s all ease-in-out", transform: "translateX(50px)"
      } 
      : 
      {
        height: "90%", position: "absolute", top: "15px", zIndex: 0, transition: "0.4s all ease-in-out",
      };

      let overlayStyle = hoverId == product._id ? 
      {
        height: "170%", width: "110%", paddingBottom: "60px", backgroundColor: "#eee", transition: "0.4s all ease-in-out",
        color: "rgba(255,255,255,1)", position: "absolute", boxShadow: "0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)",
      } 
      : 
      {
        height: "100%", width: "100%", backgroundColor: "#eee", transition: "0.4s all ease-in-out",
        color: "rgba(255,255,255,0)", position: "relative", zIndex: "0", overflow: "visible"
      };

        return(
            <div key={index} ref={div => this.myElements[index] = div} onMouseEnter={() => this.props.setHoverId(product._id)} onMouseLeave={() => this.props.setHoverId(product._id)} className={hoverId == product._id ?"w-64 h-64 text-white relative z-50 slowish": "w-64 h-64 text-white relative z-0 slowish"}>
              <div style={overlayStyle}>
                {/*<h3 className="bg-red-dark w-full absolute z-30 mt-8 text-white text-center">{product.name.substring(0, product.name.length - 15)}</h3>*/}
                <Link href={"/#" + product._id}>
                  <div style={packageStyle} className="px-12 py-2 cursor-pointer">
                  </div>
                </Link>
                <Link href={"/#" + product._id} >
                  <img src={product.strainImg} style={plantStyle} />
                </Link>=
                <Link href={"/#" + product._id}>
                  <h3 className={hoverId == product._id ?"w-full mt-2 text-black font-black text-2xl text-center cursor-pointer": "opacity-0 slow"}>{product.name.substring(0, product.name.length - 15)}</h3>
                </Link>
                <p className={hoverId == product._id ? "text-grey pl-4 my-4 slow": "opacity-0 slow"}>Type:<span className="ml-1 text-black">{type}</span></p>
                <div className={hoverId == product._id ? "flex flex-wrap justify-between px-4 slow": "opacity-0 slow"}>
                  <button onClick={() => this.props.quickAddToCartQty(0)} className={this.props.misc.quickAddToCartQty === 0 ? "bg-red-dark text-white w-16 rounded-lg flex flex-wrap text-center justify-center leading-normal shadow-md mx-2 font-bold": "bg-white text-black w-16 rounded-lg flex flex-wrap text-center justify-center leading-normal shadow-md mx-2 font-bold"}>5<span className={this.props.misc.quickAddToCartQty === 0 ? "w-full text-white":"w-full text-red-dark"}>seeds</span></button>
                  <button onClick={() => this.props.quickAddToCartQty(1)} className={this.props.misc.quickAddToCartQty === 1 ? "bg-red-dark text-white w-16 rounded-lg flex flex-wrap text-center justify-center leading-normal shadow-md mx-2 font-bold": "bg-white text-black w-16 rounded-lg flex flex-wrap text-center justify-center leading-normal shadow-md mx-2 font-bold"}>10<span className={this.props.misc.quickAddToCartQty === 1 ? "w-full text-white":"w-full text-red-dark"}>seeds</span></button>
                  <button onClick={() => this.props.quickAddToCartQty(2)} className={this.props.misc.quickAddToCartQty === 2 ? "bg-red-dark text-white w-16 rounded-lg flex flex-wrap text-center justify-center leading-normal shadow-md mx-2 font-bold": "bg-white text-black w-16 rounded-lg flex flex-wrap text-center justify-center leading-normal shadow-md mx-2 font-bold"}>25<span className={this.props.misc.quickAddToCartQty === 2 ? "w-full text-white":"w-full text-red-dark"}>seeds</span></button>
                  <button className="bg-red-dark rounded-lg text-center text-white mx-auto m-4 p-4">Add to Cart</button>
                </div>
              </div>
            </div>
        );
    });


    return (
        <div className="w-3/4 min-h-500 text-white">
          <div className="flex flex-wrap justify-start pt-16">
            {products}
        </div>
    </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setHoverId: id => dispatch(actions.setHoverId(id)),
    quickAddToCartQty: input => dispatch(actions.quickAddToCartQty(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
