import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  display: block;
  background-color: #6495ED; 
  box-shadow: 0 0 15px 3px;
  width: 100%;
  margin-right:  0px !important;
  margin-left: 0px !important;
  > svg {
    color: white;
    width: 50px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  .time-icons {
    text-align: end;
  }

  .clientName {
    color: #fff;
  }

  .pd-2 {
    padding: 2% 0%;
  }

  .btn-menu {
    padding 0% 2%;
    color: #fff;
  }

  .btn-new {
    text-align: right;
    color: #fff;
  }

  .icon-new { 
    cursor: pointer;
  }
  
`;

