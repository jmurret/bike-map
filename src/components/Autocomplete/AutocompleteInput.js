import React from 'react';
import {AutocompleteInputStyled, AutoCompleteSearchIcon, AutoCompleteDeleteIcon} from './AutocompleteStyled';

export default ({onChange, onKeyDown, inputValue, disabled, onClear, placeholder}) => (
  <AutocompleteInputStyled>
    <input
      type="text"
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={inputValue}
      disabled={disabled}
      placeholder={placeholder}
    />
    <AutoCompleteSearchIcon />
    {disabled ?
      <AutoCompleteDeleteIcon type="button" onClick={onClear}>
        <svg viewBox="0 0 24 24" focusable="false">
        <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd"></path>
        </svg>
      </AutoCompleteDeleteIcon>
    : null}
  </AutocompleteInputStyled>
);
