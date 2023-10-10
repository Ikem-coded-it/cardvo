import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  max-height: fit-content;
  min-height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
  justify-content: ${({ $justify }) => $justify || "center"};
  align-items: ${({ $align }) => $align || "center"};
  padding: ${({ $padding }) => $padding || "40px 90px"};
  gap: ${({ $gap }) => $gap};
  background-color: ${({ $bg }) => $bg};
  width: ${({ $width }) => $width};
  flex: ${({ $flex }) => $flex};

  @media(max-width: ${({ theme }) => theme.tablet}) {
    padding: 40px 20px;
  }
`