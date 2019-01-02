
import React, { Component } from "react";
import withData from "../../../../lib/withData";
import { connect } from "react-redux";
import actions from "../../../../store/actions";
import {TimelineLite} from "gsap";


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

    let hoverIndex = this.props.misc.hoverIndex;
    let products = this.props.misc.strains;
    console.log(products);
    if(this.props.misc.activeFilters.length > 0){
      for(let i = 0; i < this.props.misc.activeFilters.length; i++){
        switch(this.props.misc.activeFilters[i]){
          case "thcLow":
            products = products.filter(val => {
              for(let i of val.pthc){
                if(i > 20){
                  return false;
                }
              }
              return true;
            });
            break;
          case "thcHigh":
            products = products.filter(val => {
              for(let i of val.pthc){
                if(i < 20){
                  return false;
                }
              }
              return true;
            });
            break;
          case "cbdLow":
            products = products.filter(val => {
              for(let i of val.pcbd){
                if(i > 2){
                  return false;
                }
              }
              return true;
            });
            break;
          case "cbdHigh":
            products = products.filter(val => {
              for(let i of val.pcbd){
                if(i < 2){
                  return false;
                }
              }
              return true;
            });
            break;
          case "cbd":
            
          default:
            products = products.filter(val => {
              return JSON.stringify(val).toLowerCase().includes(this.props.misc.activeFilters[i].toLowerCase());
            });
          break;
        }
       
      
       
      
      }
    }
    products = products.map((product, index)=> {

      let packageStyle = hoverIndex == index ? 
      {
        height: "100%", width: "100%", position: "relative", zIndex: 10, margin: "0 50px", transition: "0.5s all ease-in-out",
        transform: "translateX(-15px)",
        backgroundImage: "url(" + product.packageImg + ")",
        backgroundPosition: "center",
        backgroundSize: "cover"
      } 
      : 
      {
        height: "100%", width: "100%", position: "relative", zIndex: 10, margin: "0 50px", transition: "0.5s all ease-in-out",
        transform: "translateX(0)",
        backgroundImage: "url(" + product.packageImg + ")",
        backgroundPosition: "center",
        backgroundSize: "cover"
      };

      let plantStyle = hoverIndex == index ? 
      {
        height: "100%", position: "relative", zIndex: 0, margin: "0 50px", transition: "0.5s all ease-in-out",
        transform: "translateX(55px) translateY(-250px)"
      } 
      : 
      {
        height: "100%", position: "relative", zIndex: 0, margin: "0 50px", transition: "0.5s all ease-in-out",
        transform: "translateX(40px) translateY(-250px)"
      };

      let overlayStyle = hoverIndex == index ? 
      {
        height: "99%", width: "86%", padding: "20px", backgroundColor: "rgba(0,0,0,0.5)", transition: "0.5s all ease-in-out",
        color: "rgba(255,255,255,1)", transform: "translateX(14px) translateY(1px)"
      } 
      : 
      {
        height: "0px", width: "86%", backgroundColor: "rgba(0,0,0,0.5)", transition: "0.5s all ease-in-out",
        color: "rgba(255,255,255,0)", transform: "translateX(14px) translateY(1px)"
      };

        return(
            <div key={index} ref={div => this.myElements[index] = div} onMouseEnter={() => this.props.setHoverIndex(index)} onMouseLeave={() => this.props.setHoverIndex(index)} className="w-64 h-64 m-4 text-white">
              <div style={packageStyle} className="px-12 py-2 mx-4">
                <div style={overlayStyle}>{product.name.substring(0, product.name.length - 15)}</div>
              </div>
              <img src={product.strainImg} style={plantStyle} />
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
    setHoverIndex: index => dispatch(actions.setHoverIndex(index))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
