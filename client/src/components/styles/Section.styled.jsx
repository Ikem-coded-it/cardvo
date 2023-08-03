import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  // border: 1px solid red;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
`