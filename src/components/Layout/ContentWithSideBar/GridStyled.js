import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.sideBarWidth || 480}px auto;
  grid-template-areas: "sidebar main";
`;

export default Grid;
