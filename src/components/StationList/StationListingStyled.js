import styled from 'styled-components';

export default styled.div`
  color: rgb(72, 72, 72);
  height: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(235, 235, 235) ;
  border-image: initial;
  border-radius: 3px;
  padding: 4px;
  margin: 8px;

  .station--name {
    overflow-wrap: break-word;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
    font-size: 16px;
    font-weight: 800;
    line-height: 1.44444em;
    color: rgb(72, 72, 72);
    margin: 0px;
  }

  .station--slots {
    float: right;
  }
`;
