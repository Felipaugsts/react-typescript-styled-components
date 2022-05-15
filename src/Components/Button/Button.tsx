import React from "react";
import { Container } from "./style";
interface Props {
  background: string;
  hoverColor: string;
  label: any;
  handleButtonClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  width: string;
}

export const Button: React.FC<Props> = ({
  background,
  hoverColor,
  label,
  handleButtonClick,
  width,
}) => (
  <Container
    onClick={handleButtonClick}
    background={background}
    hoverColor={hoverColor}
    width={width}
  >
    {label}
  </Container>
);
