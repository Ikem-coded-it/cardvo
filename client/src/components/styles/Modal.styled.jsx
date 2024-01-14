import styled from "styled-components";
import { Container, FlexRow } from "./Container.styled";

export const DarkModalOverlay = styled(FlexRow)`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
`

export const StyledModal = styled(Container)`
  min-height: 50px;
  max-height: fit-content;
  width: 500px;
  color: white;
  background-color: ${({ theme }) => theme.colors.prim.five};
  transition: all .3s ease;
  // opacity: 0;
  // transform: translateY(-100%);
  z-index: 20;

  & > div {
    padding: 40px 20px;
    position: relative;
  }

  & p {
    font-size: 20px;
    text-align: center;
    color: ${({theme}) => theme.colors.darkFont};
    max-width: 90%;
  }

  & button {
    position: absolute;
    top: 10px;
    right: 10px;
    min-width: 30px;
    max-width: 30px;

    &:hover {
      background-color: none;
      transform: scale(1.02);
    }
  }

  @media(max-width: ${({theme}) => theme.tablet}) {
    width: 300px;
    
    & > div {
      padding: 40px 10px 30px 10px;
    }

    & p {
      font-size: 18px;
    }

    & button {
      min-width: 22px;
      max-width: 22px;
      padding: 0;
    }
  }
`;