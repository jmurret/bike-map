import React from 'react';
import {shallow} from 'enzyme';
import ContentWithSideBar from './ContentWithSideBar';
import Grid from './GridStyled';
import SideBar from './SideBarStyled';
import MainContent from './MainContentStyled';

describe('<ContentWithSideBar />',() => {
  it('should render Grid with SideBar and MainContent', () => {
    const component = shallow(<ContentWithSideBar />);
    expect(component.find(Grid).length).toEqual(1);
    expect(component.find(SideBar).length).toEqual(1);
    expect(component.find(MainContent).length).toEqual(1);
  });
});
