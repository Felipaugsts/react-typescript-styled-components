import React from "react";
import { Container } from "./style";

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  height: string;
  width: string;
  type: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: React.FC<InputProps> = ({
  height,
  width,
  onChange,
  placeholder,
  type,
}) => (
  <Container
    placeholder={placeholder}
    onChange={onChange}
    type={type}
    height={height}
    width={width}
  ></Container>
);
