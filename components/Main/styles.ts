import styled from "styled-components";

export const MainContainer = styled.div`
  line-height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: 100px auto;
`;

export const TextContainer = styled.div``;
export const AnimationContainer = styled.div`
  width: 500px;
  height: 500px;
`;
export const H1 = styled.h1`
  font-size: 70px;
  text-transform: uppercase;
  font-weight: 800;
  color: rgb(67, 127, 151);
`;

export const H1Big = styled(H1)`
  font-size: 90px;
  font-weight: 500;
  color: #008080;
`;

export const H1Bold = styled(H1Big)`
  font-weight: 800;
  color: #008069;
`;
export const H3 = styled.h3`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 38px;
  color: #804040;
`;
