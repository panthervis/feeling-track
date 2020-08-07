import styled from 'styled-components';

export const ContainerHover = styled.div`
  position: absolute;
  /* top: 0;
  left: 0; */
  width: 100%;
  height: 100%;

  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#bcbcbc+0,ffffff+100&0.6+0,0+100 */
  background: -moz-linear-gradient(left,  rgba(188,188,188,0.6) 0%, rgba(255,255,255,0) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left,  rgba(188,188,188,0.6) 0%,rgba(255,255,255,0) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right,  rgba(188,188,188,0.6) 0%,rgba(255,255,255,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#99bcbcbc', endColorstr='#00ffffff',GradientType=1 ); IE6-9;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-y: hidden;
  /* overflow-x: scroll; */
  flex-direction: row-reverse;
  position: relative;

  > * {
    margin: 0 1.1817rem;
  }

  &:hover {
    ${ContainerHover} {
      display: none;
    }
  }
`;
