import Autosuggest from "react-autosuggest";
import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../../store/actions";
class SearchSuggest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.misc.searchValue || "",
            suggestions: []
        };
    }

    getSuggestionValue = suggestion => suggestion.name;
    renderSuggestion = suggestion => <div>{suggestion.name}</div>;
    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        return inputLength === 0
            ? []
            : this.props.misc.strains.filter(strain => strain.name.toLowerCase().slice(0, inputLength) === inputValue);
    };

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
        this.props.setSearch(newValue.toLowerCase());
    };
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;

        const inputProps = {
            placeholder: window.innerWidth > 1367 ? "What are you looking for?" : "Search...",
            value,
            onChange: this.onChange
        };

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
            />
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
