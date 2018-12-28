
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


    return (
        <div className="w-3/4 min-h-500 text-white">
          <div className="flex flex-wrap justify-start pt-16">
            {this.props.misc.products.map((product, index)=> {

              let packageStyle = hoverIndex == index ? 
              {
                height: "200px", width: "120px", position: "absolute", zIndex: 10, margin: "0 50px", transition: "0.5s all ease-in-out",
                transform: "translateX(-30px)",
                backgroundImage: "url(" + product.package_url + ")",
                backgroundPosition: "center",
                backgroundSize: "cover"
              } 
              : 
              {
                height: "200px", width: "120px", position: "absolute", zIndex: 10, margin: "0 50px", transition: "0.5s all ease-in-out",
                transform: "translateX(0)",
                backgroundImage: "url(" + product.package_url + ")",
                backgroundPosition: "center",
                backgroundSize: "cover"
              };

              let plantStyle = hoverIndex == index ? 
              {
                height: "200px", position: "absolute", zIndex: 0, margin: "0 50px", transition: "0.5s all ease-in-out",
                transform: "translateX(30px)"
              } 
              : 
              {
                height: "200px", position: "absolute", zIndex: 0, margin: "0 50px", transition: "0.5s all ease-in-out",
                transform: "translateX(0)"
              };

              let overlayStyle = hoverIndex == index ? 
              {
                height: "100%", width: "100%", backgroundColor: "rgba(0,0,0,0.5)", transition: "0.5s all ease-in-out",
                color: "rgba(255,255,255,1)"
              } 
              : 
              {
                height: "100%", width: "100%", backgroundColor: "rgba(0,0,0,0)", transition: "0.5s all ease-in-out",
                color: "rgba(255,255,255,0)"
              };

                return(
                    <div key={index} ref={div => this.myElements[index] = div} onMouseEnter={() => this.props.setHoverIndex(index)} onMouseLeave={() => this.props.setHoverIndex(index)} className="w-64 h-64 m-8 text-white">
                      <div style={packageStyle}>
                        <div style={overlayStyle}>Overlay words</div>
                      </div>
                      <img src={product.plant_url} style={plantStyle} />
                    </div>
                );
            })}
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
