import styled from 'styled-components';

export const Container = styled.div`
  background-color: #111417;
  color: #fff;
  font-weight: 700;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 350px;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }

  .section {
    background: #606060;
    height: 30px;
    padding: 0% 2%;
  }

  .checkbox-selection {
    margin: 8% 0%
  }

  .rodape-buttons button {
    float: right;
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;