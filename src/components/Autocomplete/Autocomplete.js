import React, { Component } from 'react';
import AutocompleteStyled from './AutocompleteStyled';
import {KEYS} from '../../utils/constants';


export class Autocomplete extends Component {
  constructor(props) {
    super(props);
    const {selectedOption} = props;
    this.state = {
      activeIndex: 0,
      selectedOption,
      filteredOptions: [],
      showOptions: false,
      inputValue: selectedOption ? selectedOption.name : '',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.selectedOption !== this.props.selectedOption){
      const {selectedOption} = this.props;
      this.setState({
        selectedOption,
        inputValue: selectedOption ? selectedOption.name : '',
      });
    }
  }

  _onChange = (e) => {
    const { options, searchField } = this.props;
    const inputValue = e.currentTarget.value;

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

  _onClick = (e) => {
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

  _onClearSelectedOption = () => {
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
        inputValue: filteredOptions[activeIndex].name
      });
    } else if (e.keyCode === KEYS.upArrow) {
      if (activeIndex === 0) {
        return;
      }
      this.setState({ activeIndex: activeIndex - 1 });
    } else if (e.keyCode === KEYS.downArrow) {
      if (activeIndex === filteredOptions.length - 1) {
        console.log(activeIndex);
        return;
      }
      this.setState({ activeIndex: activeIndex + 1 });
    }
  };

  render() {
    const {
      _onChange,
      _onClick,
      _onKeyDown,
      state: { activeIndex, filteredOptions, showOptions, inputValue, selectedOption }
    } = this;
    const {displayField} = this.props;
    let optionList;
    if (showOptions && inputValue) {
      optionList = (
        <ul className="options">
          {filteredOptions.map((option, index) => {
            let className;
            if (index === activeIndex) {
              className = 'option-active';
            }
            return (
              <li className={className} key={index} onClick={_onClick}>
                {option[displayField]}
              </li>
            );
          })}
        </ul>
      );
    }
    return (
      <AutocompleteStyled>
        <div className="autocomplete">
          <input
            type="text"
            className="autocomplete--input"
            onChange={_onChange}
            onKeyDown={_onKeyDown}
            value={inputValue}
            disabled={!!selectedOption}
          />
          <div className="autocomplete--search-icon"></div>
          {!!selectedOption ?
            <button className="autocomplete--delete-icon" type="button" onClick={this._onClearSelectedOption}>
              <svg viewBox="0 0 24 24" focusable="false">
              <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd"></path>
              </svg>
            </button>
          : null}
        </div>
        {optionList}
      </AutocompleteStyled>
    );
  }
}

export default Autocomplete;
