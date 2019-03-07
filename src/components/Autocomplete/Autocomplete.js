import React, { Component } from 'react';
import AutocompleteStyled from './AutocompleteStyled';
import {KEYS} from '../../utils/constants';
import AutocompleteOptionsList from './AutocompleteOptionsList';
import AutocompleteInput from './AutocompleteInput';

export class Autocomplete extends Component {
  constructor(props) {
    super(props);
    const {selectedOption} = props;
    this.state = {
      activeIndex: 0,
      selectedOption,
      filteredOptions: [],
      showOptions: false,
      inputValue: selectedOption ? selectedOption.search : '',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.selectedOption !== this.props.selectedOption){
      const {selectedOption} = this.props;
      this.setState({
        selectedOption,
        inputValue: selectedOption ? selectedOption.search : '',
      });
    }
  }

  _onChange = (e) => {
    const { options, searchField } = this.props;
    const inputValue = e.target.value;

    const filteredOptions = options.filter(
      (option) =>
        option[searchField].toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );

    this.setState({
      activeIndex: 0,
      filteredOptions,
      showOptions: true,
      inputValue,
    });
  };

  _onOptionClick = (e) => {
    const selectedOption = this.state.filteredOptions[this.state.activeIndex];
    this._onSelect(selectedOption);
    this.setState({
      activeIndex: 0,
      selectedOption,
      filteredOptions: [],
      showOptions: false,
      inputValue: e.currentTarget.innerText
    });
  };

  _onSelect = (option) => {
    const {onSelect} = this.props;
    onSelect(option);
  }

  _onClear = () => {
    const selectedOption = null;
    this._onSelect(selectedOption);
    this.setState({
      activeIndex: 0,
      selectedOption,
      filteredOptions: [],
      showOptions: false,
      inputValue: ''
    });
  }

  _onKeyDown = (e) => {
    const { activeIndex, filteredOptions } = this.state;

    if (e.keyCode === KEYS.enter) {
      const selectedOption = filteredOptions[activeIndex];
      this._onSelect(selectedOption);
      this.setState({
        activeIndex: 0,
        selectedOption,
        showOptions: false,
        inputValue: filteredOptions[activeIndex].search
      });
    } else if (e.keyCode === KEYS.upArrow) {
      if (activeIndex === 0) {
        return;
      }
      this.setState({ activeIndex: activeIndex - 1 });
    } else if (e.keyCode === KEYS.downArrow) {
      if (activeIndex === filteredOptions.length - 1) {
        return;
      }
      this.setState({ activeIndex: activeIndex + 1 });
    }
  };

  render() {
    const { activeIndex, filteredOptions, showOptions, inputValue, selectedOption } = this.state;
    const {displayField, placeholder} = this.props;
    return (
      <AutocompleteStyled>
        <AutocompleteInput
          onChange={this._onChange}
          onKeyDown={this._onKeyDown}
          inputValue={inputValue}
          disabled={!!selectedOption}
          onClear={this._onClear}
          placeholder={placeholder}
        />
        {showOptions && inputValue ?
          <AutocompleteOptionsList
            options={filteredOptions}
            activeIndex={activeIndex}
            displayField={displayField}
            onOptionClick={this._onOptionClick}
          /> : null}
      </AutocompleteStyled>
    );
  }
}

export default Autocomplete;
