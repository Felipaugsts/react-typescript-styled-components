import styled from "styled-components";

interface props {
  background: string;
  hoverColor: string;
  width: string;
}
export const Container = styled.button<props>`
  width: ${(props) => props.width};
  height: 60px;
  background-color: ${(props) => props.background};
  color: black;
  cursor: pointer;
  border-radius: 10px;
  font-size: 22px;
  border: none;

  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`;
