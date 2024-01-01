import { FlexRow } from "./Container.styled";
import styled from "styled-components";

export const NavContainer = styled(FlexRow)`
  background-color: #fff;
  border-bottom: 1px solid ${({theme}) => theme.colors.prim.five};
  justify-content: space-between;
  max-width: 1500px;
  min-width: 100%;
  padding: 0 90px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  & .open {
    right: 0;
  }

  & > .open-menu {
    display: none;
  }

  @media(max-width: 1200px) {
    padding: 0 30px;
  }

  @media(max-width: 770px) {
    & > .open-menu {
      display: block;
    }
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    max-width: ${({ theme }) => theme.mobile};
    min-width: 99.8vw;
    padding: 0 20px;
    position: static;
  }
`

export const StyledNav = styled.nav`
  display: flex;
  width: 85%;
  z-index: 3;
  position: relative;

  & ul {
    height: 100%;
    display: flex;
    gap: 50px;
    justify-content: flex-end;
    list-style: none;
    width: 60%;
    font-weight: 700px;
    color: ${({ theme }) => theme.colors.sec.eight};
    box-sizing: border-box;
    padding: 0;

    & > li {
      flex-direction: column;

      > div {
        width: 50px;
        opacity: 0;
        transition: all .2s ease;
      }
    }
  }

  & div {
    width: 40%;
  }

  & > .close-menu {
    display: none;
    position: absolute;
    top: 20px;
    left: 20px;
  }

  @media(max-width: 1200px) {
    & ul {
      gap: 20px;
    }
  }

  @media(max-width: 770px) {
    & > .close-menu {
      display: block;
    }
  }

  @media(max-width: 770px) {
    background-color: ${({ theme }) => theme.colors.sec.two};
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    top: 0;
    right: -800px;
    flex-direction: column;
    height: 100vh;
    width: 70vw;
    transition: all .4s ease;

    & ul {
      height: fit-content;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      gap: 40px;
    }

    & ul li {
      font-weight: 600;
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

  & div {
    font-size: 30px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.sec.nine};
  }

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

  @media(max-width: ${({theme}) => theme.tablet}) {
    & div {
      font-size: 25px;
    }

    & i {
      font-size: 30px;
    }

    & span {
      font-size: 25px;
    }
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    justify-content: flex-start;
    & div {
      font-size: 20px;
    }

    & span {
      font-size: 20px;
    }
  }
`