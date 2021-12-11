import { StyledCard } from "./card.styles";
import { Props } from "./card.interfaces";

export const Card = ({ children, title }: Props): JSX.Element => {
  return (
    <StyledCard>
      {title}
      <div>{children}</div>
    </StyledCard>
  );
};
