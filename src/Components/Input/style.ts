import styled from "styled-components";

interface props {
  width: string;
  height: string;
}
export const Container = styled.input<props>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 7px;
  border: none;
  outline: none;
  ::placeholder {
    font-size: 22px;
  }
`;
