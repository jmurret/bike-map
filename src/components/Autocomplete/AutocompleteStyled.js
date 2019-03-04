import React from 'react';
import styled from 'styled-components';

export default styled.div`
  .autocomplete {
    width: 100%;
    text-align: right;
    position: relative;

    svg {
      height: 18px;
      width: 18px;
      display: block;
      fill: currentcolor;
    }
  }
  .autocomplete--input {
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
    height: 48px;
    transition: box-shadow 200ms ease-in 0s;
    border-width: 1px !important;
    border-style: solid !important;
    border-color: rgb(235, 235, 235) !important;
    border-image: initial !important;
    border-radius: 4px !important;
    font-size: 20px;
    width: 320px;
    padding-left: 56px;
  }
  .autocomplete--input:focus {
    outline: none;
    border: 4px solid grey;
  }
  .autocomplete--search-icon {
    height: 100%;
    width: 24px;
    margin-top: -10px;
    position: absolute;
    top: 50%;
    left: 20px;

    opacity: 0.6;
    background-color: transparent;
    border: 0;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAACnElEQVR4AcXZsUsbYRjH8e+dh2s1SyAGJwMJuDj1BIcEhJQIOnTq5F+QOf0jIq79A7oFh7aYyVBEkaZDC3awECc1AUXRIqUQotfFocnjJe/dk+b9PKP65Md7z13ee3Uwk2SNHKmngs5TnbDLJQqjA+RYZ4OXuDzvkSYf+cAJ44fPAYFhHeAzVhlqBBGrRoax8KjSJYhRXap4KCVoECiqQQKFLC0CZbXIElOBOwJ9cUchzm2Y5QsveN4tdfY4o00HSDHHPKuUmOV5v/D5SSSJ0MXfIY+HBB55dkIvRIIIvJDR28dnFJ/9kHH0MFaVDehRxlSZnuxAFUMZunKQKBJFUQ4wXTIYqcmPZ5GoFmUEahjw5eJTJI6ivBD4jCS/csrEVZZfU4yQk5OPhrwjcoRygQ0GVdCQf73OUEfisaMkHk1HDJHkYeDX82jlBzo+kCSEyxruwDP/EK1DbsWnhHDFgNTpodWjLgY9NECKfnvoyS4p8wBngN5Z/ABtQK8dP0AH0OuYB5iMqfAAMque7HJtHmAOPdnlxjzAPHqyy5V5gFX0ZJfj8AAn9CvhoeVRol8zPMAuj/xrlhW0Vpg1D3ApflhGR3b4wTlDvI24i4u+w9y0uyVrM213U1qxuy2/Z8bui8m23VezgGW7L6cBLdIWXs9FBAsHFCLCJI9opFMKXEzkkEp/IbK0bEdI0LARQRzVWoigPKy+Z5tlWooIiuP6NhVmAEiPNwLkqHDEw5CGx2wyDQDRI8T7l80U19xwxTFNmpwzKM1nFsyeCw7jFymCAxYjrHDp8r9cUOCUYRZ4Bw6AxVV47QJYXIVXLliNsOSC1Qh/XLAa4ZuDmmIcH1l2AaytwhZfmaAkn/qOb7eYBofJekOJJX7znfccAvwFyB3OeNys7d4AAAAASUVORK5CYII=");
  }

  .autocomplete--delete-icon {
    height: 100%;
    width: 24px;
    margin-top: -24px;
    position: absolute;
    top: 50%;
    right: 20px;
    opacity: 0.6;
    background-color: transparent;
    border: 0;
    cursor: pointer;

    svg {
      height: 12px;
      width: 12px;
      display: block;
      fill: currentcolor;
    }
  }

  ul.options {
    display: block;
    list-style: none;
    width: 360px;
    transition: width 0.3s;
    margin: auto;
    position: relative;
    max-height: 368px;
    overflow-y: scroll;
  }

  ul.options li {
    display: block;
    background: white;
    margin: 10px auto;
    padding: 10px;
    font-size: 1.2rem;
    width: 100%;
    border-radius: 2px;
    margin-left: -40px;
  }
  ul.options li:hover, ul.options li.option-active {
    cursor: pointer;
    transition: 0.3s all;
    background: whitesmoke;
  }

  ul.options li.option-active {
    background: whitesmoke;
  }
`;
