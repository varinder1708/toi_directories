import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import s from './Searchbar.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const languages = [
  {
    title: 'Bank',
    year: 1972,
  },
  {
    title: 'Blood Bank',
    year: 2000,
  },
  {
    title: 'Courier Service',
    year: 1983,
  },
  {
    title: 'Hospital',
    year: 2007,
  },
  {
    title: 'Mobile Repair Service',
    year: 2012,
  },
  {
    title: 'Packers Movers',
    year: 2009,
  },
  {
    title: 'School',
    year: 1990,
  },
  {
    title: 'Tailor',
    year: 1995,
  },
  {
    title: 'Veterinary Doctor',
    year: 1995,
  },
  {
    title: 'Visa Assistance',
    year: 1987,
  },
];
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : languages.filter(
        lang => lang.title.toLowerCase().slice(0, inputLength) === inputValue,
      );
};
const getSuggestionValue = suggestion => suggestion.title;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => <div>{suggestion.title}</div>;

class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.val,
      suggestions: [],
    };
  }

  onChange = (event, { newValue }) => {
    this.props.onselectvalue(newValue);
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
    // fetch(`https://swapi.co/api/people/?search=${value}`)
    // .then(response => response.json())
    // .then(data => this.setState({ suggestions: data.results }))
  };
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };
  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Search for anything',
      value,
      onChange: this.onChange,
    };
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}
export default withStyles(s)(Searchbar);
