import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../../store/actions";
import Router from "next/router";

import { filter } from "../../../store/utilities/filter";

class SearchSuggest extends Component {
  componentDidMount() {}

  renderSuggestion = (suggestion, index) => (
    <div
      key={index}
      onMouseEnter={() => {
        this.props.setHighlightedSuggestion({
          index: index,
          suggestions: this.props.misc.suggestions
        });
      }}
      onClick={() => {
        this.props
          .setSearch(
            this.props.misc.suggestions[index].strain.name.toLowerCase()
          )
          .then(res => {
            this.props.clearSuggestions();
            if (!Router.asPath.includes("/shop")) {
              Router.push("/shop");
            } else {
              this.props.setFilters();
            }
          });
        // this.props
        //   .getStrain({
        //     sotiId: strains[index].sotiId,
        //     strains
        //   })
        //   .then(res => {
        //     this.props.setCurrentProduct({ product: res }).then(() => {
        //       let product = this.props.viewProduct.currentProduct;
        //       let _index = 0;
        //       while (product.price[_index] == -1) {
        //         _index++;
        //       }
        //       this.props.quickAddToCartQty(_index);
        //     });
        //   });
        // Router.push(
        //   "/product",
        //   "/product/" + props.product.name.toLowerCase().replace(/ /g, "-")
        // );
        // window.scrollTo(0, 0);
      }}
      className={
        this.props.misc.highlightedSuggestion == index
          ? "bg-red-light text-white font-bold h-10 sm:h-12 sm:w-full xxl:w-full lg:w-250 xl:h-16 xl:w-48 z-999 py-1 shadow-lg leading-normal text-sm"
          : "bg-white text-grey font-bold h-10 sm:h-12 sm:w-full xxl:w-full lg:w-250 xl:h-16 xl:w-48 z-999 py-1 shadow-lg leading-normal text-sm"
      }
    >
      <div className="inline-flex w-full">
        <div className="w-3/5 sm:w-full xl:w-4/5 text-left pl-2">
          {suggestion.strain.name.length > 17 &&
          ["md", "lg"].includes(this.props.misc.mediaSize)
            ? suggestion.strain.name.slice(0, 18) + "..."
            : suggestion.strain.name}
        </div>
        <div className="w-2/5 text-right text-grey-lighter pr-2">
          {suggestion.match}
        </div>
      </div>
    </div>
  );
  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : filter(
          this.props.misc.strains,
          {
            text: inputValue.split(",").map(a => a.trim().toLowerCase())
          },
          true
        ).slice(0, 5);
  };
  changeHighlightedSuggestion = e => {
    if (e.keyCode == 13) {
      if (!Router.asPath.includes("/shop")) {
        Router.push("/shop");
      }
      this.props.setSuggestions([]);
    }
    if (this.props.misc.suggestions.length > 0) {
      let lastValue =
        this.props.misc.highlightedSuggestion != null
          ? this.props.misc.highlightedSuggestion
          : -1;
      if (e.keyCode == 40) {
        this.props.setHighlightedSuggestion({
          index: lastValue + 1,
          suggestions: this.props.misc.suggestions
        });
        this.props.setSearch(
          this.props.misc.suggestions[lastValue + 1].name.toLowerCase()
        );
      }
      if (e.keyCode == 38) {
        this.props.setHighlightedSuggestion({
          index: lastValue - 1,
          suggestions: this.props.misc.suggestions
        });
        this.props.setSearch(
          lastValue - 1 > -1
            ? this.props.misc.suggestions[lastValue - 1].name.toLowerCase()
            : null
        );
      }
    }
  };
  render() {
    return (
      <div className="bg-white rounded-lg flex flex-wrap justify-start lg:w-250 xxl:w-350">
        <input
          onKeyDown={e => {
            this.changeHighlightedSuggestion(e);
          }}
          onBlur={() => {
            if (this.props.misc.mediaSize == "sm") {
              this.props.setVisibleScreen({
                input: "showSearchBar"
              });
            }
          }}
          aria-label="search"
          type="search"
          name="searchInput"
          autoComplete="off"
          id="searchInput"
          className="react-autosuggest__input mb-2"
          placeholder={
            window.innerWidth > 1367 ? "What are you looking for?" : "Search..."
          }
          onChange={e => {
            this.props.setSearch(e.target.value.toLowerCase());
            this.props.setSuggestions(this.getSuggestions(e.target.value));
            this.props.setHighlightedSuggestion({
              index: null,
              suggestions: this.props.misc.suggestions
            });
          }}
          // onBlur={() => {
          //   // this.props.setSearch(null);
          //   this.props.setSuggestions([]);
          //   this.props.setHighlightedSuggestion({
          //     index: null,
          //     suggestions: this.props.misc.suggestions
          //   });
          // }}
          value={
            (this.props.misc.suggestions[this.props.misc.highlightedSuggestion]
              ? this.props.misc.suggestions[
                  this.props.misc.highlightedSuggestion
                ].name
              : null) ||
            this.props.misc.searchValue ||
            ""
          }
        />
        {this.props.misc.suggestions.length > 0
          ? this.props.misc.suggestions.map((suggestion, index) => {
              return this.renderSuggestion(suggestion, index);
            })
          : null}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  state => state,
  mapDispatchToProps
)(SearchSuggest);
