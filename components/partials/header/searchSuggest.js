import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../../store/actions";
import Router from "next/router";
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
        this.props.setSearch(
          this.props.misc.suggestions[index].name.toLowerCase()
        );
      }}
      onClick={() => {
        if (!Router.asPath.includes("/shop")) {
          Router.push("/shop");
        }
      }}
      className={
        this.props.misc.highlightedSuggestion == index
          ? "bg-red-light text-white font-bold h-10 z-999 py-1 shadow-lg leading-loose text-sm"
          : "bg-white text-grey font-bold h-10 z-999 py-1 shadow-lg leading-loose text-sm"
      }
    >
      {suggestion.name.length > 17 &&
      ["sm", "md", "lg", "xl"].includes(this.props.misc.mediaSize)
        ? suggestion.name.slice(0, 18) + "..."
        : suggestion.name}
    </div>
  );
  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0
      ? []
      : this.props.misc.strains.filter(
          strain =>
            strain.name.toLowerCase().slice(0, inputLength) === inputValue
        );
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
      <div className="bg-white rounded-lg">
        <input
          onKeyDown={e => {
            this.changeHighlightedSuggestion(e);
          }}
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
          onBlur={() => {
            // this.props.setSearch(null);
            this.props.setSuggestions([]);
            this.props.setHighlightedSuggestion({
              index: null,
              suggestions: this.props.misc.suggestions
            });
          }}
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
