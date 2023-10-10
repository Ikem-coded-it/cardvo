import styled from "styled-components";

export const StyledHeader = styled.header`
  max-height: 90vh;
  min-height: 90vh;
  min-width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  position: relative;
  margin: ${({ $margin }) => $margin};
  padding: ${({ $padding }) => $padding};
  justify-content: ${({ $justify }) => $justify};
  align-items: ${({ $align }) => $align};
  gap: ${({ $gap }) => $gap};
  overflow: hidden;
  background-color: ${({ $bg }) => $bg};

  @media(max-width: ${({theme}) => theme.tablet}) {
    padding: 0 30px 100px 30px;
    gap: 20px;
  }

  @media(max-width: ${({theme}) => theme.mobile}) {
    padding: 0 20px;
    margin: 0;
    flex-direction: column-reverse;
    min-height: 90vh;
    max-height: fit-content;
    gap: 150px;
  }
`

export const CircleBackground = styled.div`
  position: absolute;
  bottom: -100px;
  background-color: ${({ theme }) => theme.colors.sec.seven};
  border-radius: 50%;
  right: -100px;
  width: 50%;
  height: 100%;

  @media(max-width: ${({theme}) => theme.mobile}) {
    top: 100px;
    right: -100px;
    width: 80%;
    height: 40%;
  }
`