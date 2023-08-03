import { FlexRow } from "./Container.styled";
import styled from "styled-components";

export const NavContainer = styled(FlexRow)`
  justify-content: space-between;
  max-width: 1340px;
  min-width: 1370px;
  padding: 0 90px;
  position: fixed;
  top: 0;
  left: 0;

  & .open {
    right: 0;
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    max-width: ${({ theme }) => theme.mobile};
    min-width: 99.8vw;
    padding: 0 20px;
  }
`

export const StyledNav = styled.nav`
  display: flex;
  width: 85%;

  & ul {
    height: 100%;
    display: flex;
    gap: 50px;
    flex-direction: space-between;
    list-style: none;
    width: 60%;
    font-weight: 700px;
    color: ${({ theme }) => theme.colors.sec.eight};
    box-sizing: border-box;
    padding: 0;
  }

  & div {
    width: 40%;
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    background-color: ${({ theme }) => theme.colors.sec.two};
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    top: 0;
    right: -480px;
    flex-direction: column;
    height: 100vh;
    width: 70vw;
    transition: all .4s ease;

    & ul {
      justify-content: center;
      flex-direction: column;
      width: 100%;
    }

    & ul li {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    & div {
      flex-direction: column;
    }
  }
`

export const LogoContainer = styled(FlexRow)`
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  width: 15%;

  & i {
    font-size: 40px;
    color: ${({ theme }) => theme.colors.prim.three};
    transform: rotate(40deg) translateY(-10%);
  }

  & span {
    font-size: 30px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.prim.four};
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    justify-content: flex-start;
    & h1 {
      font-size: 20px;
    }

    & span {
      font-size: 20px;
    }
  }
`

export const MenuBars = styled.i`
  display: none;
  font-size: 30px;

  @media(max-width: ${({ theme }) => theme.mobile}) {
    display: block;
  }
`

export const CloseMenu = styled.i`
  display: none;
  font-size: 30px;
  position: absolute;
  top: 20px;
  right: 20px;

  @media(max-width: ${({ theme }) => theme.mobile}) {
    display: block;
  }
`
