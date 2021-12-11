import { StyledButton } from "./button.styles";
import { Props } from "./button.interfaces";

export const Button = ({ title }: Props): JSX.Element => {
  return <StyledButton>{title}</StyledButton>;
};
