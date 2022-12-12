import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 100px;
  background-color: #333333;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  cursor: pointer;
`;

export const Link = styled.a`
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  :hover {
    color: black;
  }
`;

export const BottomWrapper = styled.div`
  background-color: #333333;
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 10px;
`;

export const BottomContainer = styled.div`
  margin: 0 10px;
  display: flex;
`;

export const Text = styled.p`
  font-size: 10px;
`;

export const MediaContainer = styled.div``;

export const Icon = styled.div`
  height: 50px;
  width: 50px;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
