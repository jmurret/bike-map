import React from 'react';
import {AutocompleteOptionsListStyled} from './AutocompleteStyled';
export default ({options, activeIndex, displayField, onOptionClick}) => (
  <AutocompleteOptionsListStyled>
    {options.map((option, index) => {
      let className;
      if (index === activeIndex) {
        className = 'option-active';
      }
      return (
        <li className={className} key={index} onClick={onOptionClick}>
          {option[displayField]}
        </li>
      );
    })}
  </AutocompleteOptionsListStyled>
);
