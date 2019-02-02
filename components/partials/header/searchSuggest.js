import Autosuggest from "react-autosuggest";
import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../../store/actions";
// Imagine you have a list of languages that you'd like to autosuggest.

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.

class SearchSuggest extends Component {
    constructor(props) {
        super(props);
        // Autosuggest is a controlled component.
        // This means that you need to provide an input value
        // and an onChange handler that updates this value (see below).
        // Suggestions also need to be provided to the Autosuggest,
        // and they are initially empty because the Autosuggest is closed.
        this.state = {
            value: this.props.misc.searchValue || "",
            suggestions: []
        };
    }

    getSuggestionValue = suggestion => suggestion.name;

    // Use your imagination to render suggestions.
    renderSuggestion = suggestion => <div>{suggestion.name}</div>;
    // Teach Autosuggest how to calculate suggestions for any given input value.
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

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
            placeholder: "What are you looking for?",
            value,
            onChange: this.onChange
        };

        // Finally, render it!
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
