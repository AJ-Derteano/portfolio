import styled from 'styled-components';

const MainStyle = styled.div`
  color: #fff;
  width: 55%;
  right: 10%;
  left: 35%;
  position: relative;
  min-height: 100vh;
  padding-bottom: 80px;
  border-bottom: 3px solid rgba(250, 250, 250, 0.25);

  @media screen and (max-width: 1281px) {
    width: 80%;
    left: 10%;
    margin-top: 4rem;
  }

`;

export default MainStyle;
