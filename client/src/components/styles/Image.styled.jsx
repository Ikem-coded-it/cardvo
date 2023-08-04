import styled from "styled-components";

export const Image = styled.img`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  flex: ${({ flex }) => flex};
  border-radius: ${({ bdradius }) => bdradius};
`