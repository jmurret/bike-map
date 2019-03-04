import React from 'react';
import PropTypes from 'prop-types';
import Grid from './GridStyled';
import SideBar from './SideBarStyled';
import MainContent from './MainContentStyled';

const ContentWithSideBar = props => (
  <Grid className={props.className}>
    <SideBar>{props.renderSideBar}</SideBar>
    <MainContent>{props.renderMainContent}</MainContent>
  </Grid>
);

ContentWithSideBar.propTypes = {
  className: PropTypes.string,
  renderSideBar: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  renderMainContent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};
export default ContentWithSideBar;
