
import React, { Component } from "react";
import withData from "../../../../lib/withData";
import { connect } from "react-redux";
import actions from "../../../../store/actions";
import {TimelineLite} from "gsap";


class Index extends Component {

  componentWillMount(){
    this.myTween = new TimelineLite({paused: true});
    this.myElements = [];
  }

  componentDidMount(){
    this.myTween.staggerTo(this.myElements, 0.5, {y: 0, autoAlpha: 1}, 0.1);
  }


  render() {
    return (
        <div className="w-4/5 min-h-500 bg-grey-light text-white border border-white">
        <h2>productGrid</h2>
        <div className="flex flex-wrap justify-start">
            {this.props.misc.products.map((product, index)=> {
                return(
                    <div key={index} ref={li => this.myElements[index] = li} className="w-64 h-64 m-8 bg-blue-light text-white border border-white"></div>
                );
            })}
        </div>
    </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
