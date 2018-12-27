
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
    // this.staggerEl();
    this.myTween.staggerTo(this.myElements, 0.5, {y: 0, autoAlpha: 1}, 0.1);
  }


  render() {
    return (
        <div className="w-3/4 min-h-500 bg-grey-light text-white border border-white">
        <h2 onClick={() => {console.log("cli");this.myTween.restart()}}>productGrid</h2>
        <div className="flex flex-wrap justify-start">
            {this.props.misc.products.map((product, index)=> {
                return(
                    <div key={index} ref={div => this.myElements[index] = div} className="w-64 h-64 m-8 bg-blue-light text-white border border-white"></div>
                );
            })}
        </div>
    </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    staggerEl: () => dispatch(actions.staggerEl())
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
