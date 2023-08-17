import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  width: ${({ width }) => width || 'fit-content'};
  text-decoration: none;
  font-size: 20px;
  color: ${({ theme, color }) => color || theme.colors.font};

  @media(max-width: ${({theme}) => theme.tablet}) {
    font-size: 16px;
  }
`

export default StyledLink;