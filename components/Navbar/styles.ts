import styled, { css } from "styled-components";

export const Nav = styled.nav`
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 50px;
  background-color: #f7fcffab;
  transition: 2s transform ease-in;
`;
export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 300px;
`;
export const Li = styled.li`
  list-style-type: none;
  margin-left: 5px;
  font-weight: 500;
`;
export const A = styled.a``;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  letter-spacing: 1px;
  cursor: pointer;

  :hover {
    background-color: #f7fcffac;
    transform: translateX(-2px);
    color: black;
  }
  transition: 0.2s all ease-in;
`;

export const ImageContainer = styled.div``;
